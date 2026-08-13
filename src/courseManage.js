import './manage.css';
import { inspectCourseGroup } from './courses/index.js';

// 這一頁的目的：讓複製這個範本網站的老師，不用碰git/CLI，直接在瀏覽器裡把課程JS檔
// commit進自己的repo（GitHub Contents API），觸發GitHub Pages自動重新部署。
//
// 為什麼用Personal Access Token而不是「用GitHub登入」的OAuth流程：這是純靜態網站，
// 沒有後端能安全保管OAuth的client secret（標準Authorization Code Flow一定要在伺服器端
// 交換token，client secret不能放在前端程式碼裡）。Fine-grained PAT是唯一不需要額外
// 架一個後端就能做到的方式，老師自己在GitHub網站幾個點擊就能建立、可以限定只給這一個
// repo的Contents讀寫權限，風險可控。Token只存在使用者自己瀏覽器的localStorage，
// 這個網站本身不會把token送到我們或任何第三方。

const GITHUB_CONFIG_STORAGE_KEY = 'blocklyLabManageGithubConfigV1';
const GITHUB_API_BASE = 'https://api.github.com';

const repoOwnerInput = document.getElementById('repoOwner');
const repoNameInput = document.getElementById('repoName');
const repoBranchInput = document.getElementById('repoBranch');
const repoAutoDetectHint = document.getElementById('repoAutoDetectHint');
const githubTokenInput = document.getElementById('githubToken');
const btnSaveGithubConfig = document.getElementById('btnSaveGithubConfig');
const btnTestGithubConfig = document.getElementById('btnTestGithubConfig');
const githubConfigStatus = document.getElementById('githubConfigStatus');

const courseFileInput = document.getElementById('courseFileInput');
const courseTextInput = document.getElementById('courseTextInput');
const btnValidateCourse = document.getElementById('btnValidateCourse');
const validationResult = document.getElementById('validationResult');
const btnImportCourse = document.getElementById('btnImportCourse');
const importResult = document.getElementById('importResult');

let validatedCourse = null; // { code, courseGroup, rawText }

function setStatus(el, text, kind) {
  el.textContent = text;
  el.classList.remove('ok', 'error');
  if (kind) el.classList.add(kind);
}

// GitHub Pages網址通常是 https://{owner}.github.io/{repo}/...，
// 從目前網址自動猜owner/repo，讓老師少填一步（猜錯的話，欄位本來就可以手動改）。
function autoDetectRepoFromLocation() {
  const host = window.location.hostname;
  const match = host.match(/^([^.]+)\.github\.io$/i);
  if (!match) {
    repoAutoDetectHint.textContent = '無法從網址自動判斷（可能是本機開發環境），請手動填寫。';
    return null;
  }

  const owner = match[1];
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const repo = pathParts[0] || '';

  if (repo) {
    repoAutoDetectHint.textContent = `已自動偵測：${owner}/${repo}（如果不對，請直接修改上面欄位）。`;
  }

  return { owner, repo };
}

function loadGithubConfig() {
  try {
    const raw = window.localStorage.getItem(GITHUB_CONFIG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveGithubConfig(config) {
  window.localStorage.setItem(GITHUB_CONFIG_STORAGE_KEY, JSON.stringify(config));
}

function getGithubConfig() {
  return {
    owner: repoOwnerInput.value.trim(),
    repo: repoNameInput.value.trim(),
    branch: repoBranchInput.value.trim() || 'main',
    token: githubTokenInput.value.trim(),
  };
}

function initGithubSection() {
  const saved = loadGithubConfig();
  const detected = autoDetectRepoFromLocation();

  repoOwnerInput.value = saved?.owner || detected?.owner || '';
  repoNameInput.value = saved?.repo || detected?.repo || '';
  repoBranchInput.value = saved?.branch || 'main';
  githubTokenInput.value = saved?.token || '';
}

btnSaveGithubConfig.addEventListener('click', () => {
  const config = getGithubConfig();

  if (!config.owner || !config.repo || !config.token) {
    setStatus(githubConfigStatus, '請把擁有者、repo名稱、token都填寫完整。', 'error');
    return;
  }

  saveGithubConfig(config);
  setStatus(githubConfigStatus, '已儲存在這台瀏覽器。', 'ok');
});

async function githubApiRequest(path, options = {}) {
  const config = getGithubConfig();

  if (!config.token) {
    throw new Error('尚未設定 GitHub Token，請先在上方填寫並儲存。');
  }

  const resp = await fetch(`${GITHUB_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${config.token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  });

  return resp;
}

btnTestGithubConfig.addEventListener('click', async () => {
  const config = getGithubConfig();

  if (!config.owner || !config.repo || !config.token) {
    setStatus(githubConfigStatus, '請把擁有者、repo名稱、token都填寫完整再測試。', 'error');
    return;
  }

  setStatus(githubConfigStatus, '連線測試中...', null);

  try {
    const resp = await githubApiRequest(`/repos/${config.owner}/${config.repo}`);
    const body = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      setStatus(
        githubConfigStatus,
        `連線失敗（HTTP ${resp.status}）：${body.message || '請檢查owner/repo/token是否正確、token權限是否包含這個repo的Contents讀寫。'}`,
        'error'
      );
      return;
    }

    const permissions = body.permissions || {};
    if (!permissions.push) {
      setStatus(githubConfigStatus, `連線成功，但這個token對 ${config.owner}/${config.repo} 沒有寫入權限，匯入會失敗，請重新建立token並勾選Contents: Read and write。`, 'error');
      return;
    }

    setStatus(githubConfigStatus, `連線成功，已確認對 ${config.owner}/${config.repo} 有讀寫權限。`, 'ok');
  } catch (error) {
    setStatus(githubConfigStatus, `連線失敗：${error.message}`, 'error');
  }
});

// 把課程JS原始碼透過真正的ES module動態載入（跟GitHub Pages上線後瀏覽器實際載入
// 課程檔的方式一致），而不是用new Function硬解析——這樣export default的各種寫法
// （const course = {...}; export default course; 或 export default {...}; 直接寫）
// 都能正確處理，不用自己維護一套解析規則。
async function parseCourseSource(text) {
  const blob = new Blob([text], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);

  try {
    const module = await import(/* @vite-ignore */ url);
    return module.default || null;
  } finally {
    URL.revokeObjectURL(url);
  }
}

function normalizeForInspection(course) {
  if (!course || typeof course !== 'object' || !Array.isArray(course.tasks)) return null;

  const id = String(course.code || course.id || '').trim().toUpperCase();
  if (!id) return null;

  return {
    ...course,
    id,
    code: course.code || id,
    title: course.title || id,
    mode: course.mode || 'learning',
    type: course.type || (id.startsWith('SR') ? 'smartring' : 'programming'),
    tasks: course.tasks.map((task, index) => ({
      ...task,
      id: task?.id || `${id}-${String(index + 1).padStart(2, '0')}`,
      title: task?.title || task?.problemTitle || `題目 ${index + 1}`,
    })),
  };
}

async function readCourseInputText() {
  const file = courseFileInput.files?.[0];
  if (file) return file.text();
  return courseTextInput.value;
}

function renderValidation(inspection, courseGroup) {
  validationResult.hidden = false;
  validationResult.classList.remove('ok', 'error');

  if (inspection.status === 'error') {
    validationResult.classList.add('error');
    validationResult.innerHTML = `
      <strong>驗證失敗，無法匯入：</strong>
      <ul>${inspection.messages.map((m) => `<li>${m}</li>`).join('')}</ul>
    `;
    return;
  }

  const warningsHtml = inspection.messages.length
    ? `<ul>${inspection.messages.map((m) => `<li>${m}</li>`).join('')}</ul>`
    : '';

  validationResult.classList.add('ok');
  validationResult.innerHTML = `
    <strong>驗證通過${inspection.status === 'warning' ? '（有警告，仍可匯入）' : ''}：</strong>
    <p>課程代碼：<code>${courseGroup.id}</code>｜標題：${courseGroup.title}｜題目數：${courseGroup.tasks.length}</p>
    ${warningsHtml}
    <p>匯入後會寫入 <code>src/courses/${courseGroup.id}.js</code>。</p>
  `;
}

btnValidateCourse.addEventListener('click', async () => {
  validatedCourse = null;
  btnImportCourse.disabled = true;

  const text = await readCourseInputText();

  if (!String(text || '').trim()) {
    validationResult.hidden = false;
    validationResult.classList.remove('ok');
    validationResult.classList.add('error');
    validationResult.innerHTML = '<strong>請先選擇檔案或貼上課程JS內容。</strong>';
    return;
  }

  let parsed;
  try {
    parsed = await parseCourseSource(text);
  } catch (error) {
    validationResult.hidden = false;
    validationResult.classList.remove('ok');
    validationResult.classList.add('error');
    validationResult.innerHTML = `<strong>JS語法解析失敗：</strong><p>${error.message}</p>`;
    return;
  }

  const courseGroup = normalizeForInspection(parsed);

  if (!courseGroup) {
    validationResult.hidden = false;
    validationResult.classList.remove('ok');
    validationResult.classList.add('error');
    validationResult.innerHTML = '<strong>這份檔案沒有匯出有效的課程物件</strong>（需要 export default 一個含 code/id 與 tasks 陣列的物件）。';
    return;
  }

  const inspection = inspectCourseGroup(courseGroup);
  renderValidation(inspection, courseGroup);

  if (inspection.status !== 'error') {
    validatedCourse = { courseGroup, rawText: text };
    btnImportCourse.disabled = false;
  }
});

function utf8ToBase64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

btnImportCourse.addEventListener('click', async () => {
  if (!validatedCourse) return;

  const config = getGithubConfig();
  if (!config.owner || !config.repo || !config.token) {
    setStatus(importResult, '請先在上方完成GitHub設定。', 'error');
    return;
  }

  const { courseGroup, rawText } = validatedCourse;
  const path = `src/courses/${courseGroup.id}.js`;

  btnImportCourse.disabled = true;
  importResult.className = 'manage-status-block';
  importResult.textContent = '匯入中，請稍候...';

  try {
    // 先查這個檔案在repo裡存不存在——存在的話GitHub Contents API要求帶sha才能更新，
    // 不存在則不能帶sha（否則API會回錯誤），所以兩種情況要分開處理。
    let existingSha;
    const getResp = await githubApiRequest(
      `/repos/${config.owner}/${config.repo}/contents/${path}?ref=${encodeURIComponent(config.branch)}`
    );

    if (getResp.ok) {
      const existing = await getResp.json();
      existingSha = existing.sha;
    } else if (getResp.status !== 404) {
      const body = await getResp.json().catch(() => ({}));
      throw new Error(body.message || `檢查現有檔案失敗（HTTP ${getResp.status}）`);
    }

    const putResp = await githubApiRequest(
      `/repos/${config.owner}/${config.repo}/contents/${path}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: existingSha
            ? `更新課程：${courseGroup.id}（${courseGroup.title}）`
            : `新增課程：${courseGroup.id}（${courseGroup.title}）`,
          content: utf8ToBase64(rawText),
          branch: config.branch,
          ...(existingSha ? { sha: existingSha } : {}),
        }),
      }
    );

    const putBody = await putResp.json().catch(() => ({}));

    if (!putResp.ok) {
      throw new Error(putBody.message || `匯入失敗（HTTP ${putResp.status}）`);
    }

    importResult.className = 'manage-status-block ok';
    importResult.innerHTML = `
      已成功${existingSha ? '更新' : '新增'} <code>${path}</code>（commit
      <a href="${putBody.commit?.html_url || '#'}" target="_blank" rel="noopener">${(putBody.commit?.sha || '').slice(0, 7)}</a>）。
      GitHub Pages 通常 1~2 分鐘內會自動重新部署，之後在網站首頁輸入課程代碼
      <code>${courseGroup.id}</code> 就能載入。
    `;
  } catch (error) {
    importResult.className = 'manage-status-block error';
    importResult.textContent = `匯入失敗：${error.message}`;
  } finally {
    btnImportCourse.disabled = false;
  }
});

initGithubSection();
