var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=s({JSA00:()=>d}),d={code:`JSA00`,title:`基礎練習2`,type:`programming`,mode:`learning`,tasks:[{id:`A-08-0`,title:`查找最大值`,problemTitle:`查找最大值`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值。
這樣的練習可以幫助你處理一串資料，並找出其中的最大值。`,inputDescription:``,outputDescription:``,statement:{description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值。
這樣的練習可以幫助你處理一串資料，並找出其中的最大值。`,input:``,output:``},examples:[{input:`3
9 6 8`,output:`9`,explanation:`第一行輸入3，表示有3個數字要輸入
第二行輸入9 6 8三個數字序列
程式運算輸出最大值9`},{input:`6
99 12 129 16 8`,output:`129`,explanation:`第一行輸入6，表示有6個數字要輸入
第二行輸入99 12 129 16 8 3六個數字序列
程式運算輸出最大值129`}],testCases:[{input:`3
9 6 8`,expectedOutput:`9`,output:`9`,score:10,hidden:!1},{input:`6
99 12 129 16 8 3`,expectedOutput:`129`,output:`129`,score:10,hidden:!1},{input:`5
89 15 47 0 56`,expectedOutput:`89`,output:`89`,score:10,hidden:!1},{input:`1
25`,expectedOutput:`25`,output:`25`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable>
    <variable id="var_max">最大值</variable>
    <variable id="var_current">目前數值</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入資料筆數 N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_max">最大值</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">-999999</field></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="var_current">目前數值</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="controls_if">
                                <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_current">目前數值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value>
                                <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_current">目前數值</field></block></value></block></statement>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-08-1`,title:`查找最大值、最小值`,problemTitle:`查找最大值、最小值`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分及最低分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值及最小值。
這樣的練習可以幫助你處理一串資料，並同時找出其中的最大值、最小值。`,inputDescription:``,outputDescription:``,statement:{description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分及最低分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值及最小值。
這樣的練習可以幫助你處理一串資料，並同時找出其中的最大值、最小值。`,input:``,output:``},examples:[{input:`3
9 6 8`,output:`9
6`,explanation:`第一行輸入3，表示有3個數字要輸入
第二行輸入9 6 8三個數字序列
程式運算輸出最大值9，最小值6`},{input:`6
99 12 129 16 8 3`,output:`129
3`,explanation:`第一行輸入6，表示有6個數字要輸入
第二行輸入99 12 129 16 8 3六個數字序列
程式運算輸出最大值129，最小值3`}],testCases:[{input:`3
9 6 8`,expectedOutput:`9 6`,output:`9 6`,score:10,hidden:!1},{input:`6
99 12 129 16 8 3`,expectedOutput:`129 3`,output:`129 3`,score:10,hidden:!1},{input:`5
89 15 47 0 56`,expectedOutput:`89 0`,output:`89 0`,score:10,hidden:!1},{input:`1
25`,expectedOutput:`25 25`,output:`25 25`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-09-0`,title:`判斷質數`,problemTitle:`判斷質數`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`質數是大於 1 且只能被 1 和自己整除的數字。
請寫一個程式，輸入一個整數 N，判斷它是否為質數。

若是質數輸出 Yes，否則輸出 No。

這題訓練你使用條件與迴圈判斷。`,inputDescription:``,outputDescription:``,statement:{description:`質數是大於 1 且只能被 1 和自己整除的數字。
請寫一個程式，輸入一個整數 N，判斷它是否為質數。

若是質數輸出 Yes，否則輸出 No。

這題訓練你使用條件與迴圈判斷。`,input:``,output:``},examples:[{input:`1`,output:`No`,explanation:`第一行輸入1
電腦運算判斷1不是質數
程式運算輸出No`},{input:`2`,output:`Yes`,explanation:`第一行輸入2
電腦運算判斷2是質數
程式運算輸出Yes`},{input:`7`,output:`Yes`,explanation:`第一行輸入7
電腦運算判斷7是質數
程式運算輸出Yes`},{input:`6`,output:`No`,explanation:`第一行輸入6
電腦運算判斷6可被2整除，不是質數
程式運算輸出No`}],testCases:[{input:`1`,expectedOutput:`No`,output:`No`,score:10,hidden:!1},{input:`2`,expectedOutput:`Yes`,output:`Yes`,score:10,hidden:!1},{input:`1007`,expectedOutput:`No`,output:`No`,score:10,hidden:!1},{input:`997`,expectedOutput:`Yes`,output:`Yes`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable>
    <variable id="var_i">i</variable>
    <variable id="var_is_prime">是否為質數</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入一個整數</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_is_prime">是否為質數</field>
                <value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value>
                <next>
                  <block type="controls_if">
                    <value name="IF0">
                      <block type="logic_compare">
                        <field name="OP">LTE</field>
                        <value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                        <value name="B"><block type="math_number"><field name="NUM">1</field></block></value>
                      </block>
                    </value>
                    <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_is_prime">是否為質數</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></statement>
                    <next>
                      <block type="controls_if">
                        <value name="IF0">
                          <block type="logic_compare">
                            <field name="OP">GT</field>
                            <value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                            <value name="B"><block type="math_number"><field name="NUM">2</field></block></value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="controls_for">
                            <field name="VAR" id="var_i">i</field>
                            <value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value>
                            <value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
                            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                            <statement name="DO">
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_compare">
                                    <field name="OP">EQ</field>
                                    <value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value>
                                    <value name="B"><block type="math_number"><field name="NUM">0</field></block></value>
                                  </block>
                                </value>
                                <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_is_prime">是否為質數</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></statement>
                              </block>
                            </statement>
                          </block>
                        </statement>
                        <next>
                          <block type="controls_if">
                            <mutation else="1"></mutation>
                            <value name="IF0"><block type="variables_get"><field name="VAR" id="var_is_prime">是否為質數</field></block></value>
                            <statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">Yes</field></block></value></block></statement>
                            <statement name="ELSE"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">No</field></block></value></block></statement>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`數學運算與數論`],subConcepts:[`整數性質`],algorithm:[`枚舉`,`輾轉相除`],dataStructure:[],syntax:[`取餘數`,`迴圈`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-09-1`,title:`找因數`,problemTitle:`找因數`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`因數是指一個整數能被另一整數「整除」時，這個「除數」就是「被除數」的因數。

0不是任何整數的因數。1是所有整數的因數。

請寫一個程式，輸入一個整數 N，請找出N所有的因數。

所有因數以空白符號間格

這題訓練你使用條件與迴圈判斷。`,inputDescription:``,outputDescription:``,statement:{description:`因數是指一個整數能被另一整數「整除」時，這個「除數」就是「被除數」的因數。

0不是任何整數的因數。1是所有整數的因數。

請寫一個程式，輸入一個整數 N，請找出N所有的因數。

所有因數以空白符號間格

這題訓練你使用條件與迴圈判斷。`,input:``,output:``},examples:[{input:`12`,output:`1 2 3 4 6 12`,explanation:`第一行輸入12
程式輸出12所有因數1 2 3 4 6 12`},{input:`39`,output:`1 3 13 39`,explanation:`第一行輸入39
程式輸出39所有因數1 3 13 39`}],testCases:[{input:`56`,expectedOutput:`1 2 4 7 8 14 28 56`,output:`1 2 4 7 8 14 28 56`,score:10,hidden:!1},{input:`37`,expectedOutput:`1 37`,output:`1 37`,score:10,hidden:!1},{input:`78`,expectedOutput:`1 2 3 6 13 26 39 78`,output:`1 2 3 6 13 26 39 78`,score:10,hidden:!1},{input:`88`,expectedOutput:`1 2 4 8 11 22 44 88`,output:`1 2 4 8 11 22 44 88`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`數學運算與數論`],subConcepts:[`整數性質`],algorithm:[`枚舉`,`輾轉相除`],dataStructure:[],syntax:[`取餘數`,`迴圈`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-10-0`,title:`多科成績計算`,problemTitle:`多科成績計算`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`小明參加了數學、英文、自然...等多科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。

請設計程式，輸入多科的成績，計算總分與平均。

第一行輸入共有幾科

第二行依序輸入各科成績，科成績之間以空白間隔

計算總分，平均成績以四捨五入取整數

如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。

這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,inputDescription:``,outputDescription:``,statement:{description:`小明參加了數學、英文、自然...等多科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。

請設計程式，輸入多科的成績，計算總分與平均。

第一行輸入共有幾科

第二行依序輸入各科成績，科成績之間以空白間隔

計算總分，平均成績以四捨五入取整數

如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。

這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,input:``,output:``},examples:[{input:`3
80 70 90`,output:`240
80
及格`,explanation:`第一行輸入3，表示後面會有3個數字輸入
第二行輸入80 70 90，經過計算後
總分180、平均80、及格`},{input:`6
50 41 60 55 70 65`,output:`341
57
不及格`,explanation:`第一行輸入6，表示後面會有3個數字輸入
第二行輸入50 41 60 55 70 65，經過計算後
程式輸出總分341、平均57、不及格`}],testCases:[{input:`3
20 60 90`,expectedOutput:`170 57 不及格`,output:`170 57 不及格`,score:10,hidden:!1},{input:`6
50 41 60 55 70 65`,expectedOutput:`341 57 不及格`,output:`341 57 不及格`,score:10,hidden:!1},{input:`5
80 70 75 85 90`,expectedOutput:`400 80 及格`,output:`400 80 及格`,score:10,hidden:!1},{input:`1
55`,expectedOutput:`55 55 不及格`,output:`55 55 不及格`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_count">科目數</variable>
    <variable id="var_score">目前成績</variable>
    <variable id="var_total">總分</variable>
    <variable id="var_avg">平均</variable>
    <variable id="var_result">結果</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入科目數</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_count">科目數</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_total">總分</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="var_count">科目數</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="var_score">目前成績</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="var_total">總分</field>
                                <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_score">目前成績</field></block></value></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="variables_set">
                        <field name="VAR" id="var_avg">平均</field>
                        <value name="VALUE"><block type="math_round"><field name="OP">ROUND</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_count">科目數</field></block></value></block></value></block></value>
                        <next>
                          <block type="controls_if">
                            <mutation else="1"></mutation>
                            <value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_avg">平均</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value>
                            <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果</field><value name="VALUE"><block type="text"><field name="TEXT">及格</field></block></value></block></statement>
                            <statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果</field><value name="VALUE"><block type="text"><field name="TEXT">不及格</field></block></value></block></statement>
                            <next>
                              <block type="interaction_say">
                                <value name="TEXT"><block type="text_join"><mutation items="5"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_avg">平均</field></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="var_result">結果</field></block></value></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`字串處理`],subConcepts:[`字元統計與格式判斷`],algorithm:[],dataStructure:[`字串`],syntax:[`字串`,`索引`,`len`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-10-1`,title:`加權成績計算`,description:`大明綜合高中辦理考試，不同科系考試科目數量、每周上課時數不一定相同
成績計算時，以每一科成績乘以該科上課時數為加權成績，將所有科目的加權成績加總，並除以全部科目總時數，即為學生加權平均成績
請設計一個程式，輸入各科的成績、各科加權時數，程式運算後輸出加權總分、加權平均、等第。
第一行輸入N，代表該科共有N科考試成績
第二行依序輸入N筆各科成績，各科成績之間以空白間隔
第三行依序輸入N筆各科對應加權時數，各科加權時數之間以空白間隔
計算全部加權總分，加權平均成績以四捨五入取整數
如果平均分數大於等於 80，就是「A」等第，小於80大於等於70則是「B」等第，小於70大於等於60則是「C」等第，否則是「D」等第。
程式輸出加權總分、加權平均、等第。
這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,examples:[{input:`3
80 70 90
1 2 1`,output:`310
78
B`,explanation:`第一行輸入3，表示後面會有3科成績輸入
第二行輸入各科原始成績80 70 90
第三行輸入各科加權時數1 2 1
程式運算輸出加權總分310、平均78、等第B`},{input:`6
50 41 60 55 70 65
1 3 3 2 2 1`,output:`668
56
D`,explanation:`第一行輸入6，表示後面會有6科成績輸入
第二行輸入各科原始成績50 41 60 55 70 65
第三行輸入各科加權時數1 3 3 2 2 1
程式運算輸出加權總分668、平均56、等第D`}],testCases:[{input:`1
80
3`,expectedOutput:`240 80 A`,score:10},{input:`6
50 41 60 55 70 65
1 3 3 2 2 1`,expectedOutput:`668 56 D`,score:10},{input:`5
80 70 75 85 90
1 1 3 2 1`,expectedOutput:`635 79 B`,score:10},{input:`3
55 90 99
2 3 3`,expectedOutput:`677 85 A`,score:10}],starterXml:``,requiresGreenFlag:!0},{id:`A-11-0`,title:`計算字元出現次數`,problemTitle:`計算字元出現次數`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`請設計程式，輸入一個字串，並輸入一個英文字母輸出該字母在字串中出現的次數。

這樣的練習可以訓練你操作字串與統計。`,inputDescription:``,outputDescription:``,statement:{description:`請設計程式，輸入一個字串，並輸入一個英文字母輸出該字母在字串中出現的次數。

這樣的練習可以訓練你操作字串與統計。`,input:``,output:``},examples:[{input:`banana
a`,output:`3`,explanation:`第一行輸入banana
第二行輸入字元a
程式運算比對a出現3次
程式輸出3`},{input:`student
t`,output:`2`,explanation:`第一行輸入student
第二行輸入字元t
程式運算比對t出現2次
程式輸出2`}],testCases:[{input:`Goodmoning
o`,expectedOutput:`3`,output:`3`,score:10,hidden:!1},{input:`ChaiYiCity
i`,expectedOutput:`3`,output:`3`,score:10,hidden:!1},{input:`announcement
n`,expectedOutput:`4`,output:`4`,score:10,hidden:!1},{input:`experimen
e`,expectedOutput:`3`,output:`3`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_word">字串</variable>
    <variable id="var_target">目標字元</variable>
    <variable id="var_count">出現次數</variable>
    <variable id="var_i">i</variable>
    <variable id="var_char">目前字元</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入字串</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_word">字串</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入要統計的字元</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_target">目標字元</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="variables_set">
                        <field name="VAR" id="var_count">出現次數</field>
                        <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                        <next>
                          <block type="controls_for">
                            <field name="VAR" id="var_i">i</field>
                            <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                            <value name="TO"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_word">字串</field></block></value></block></value>
                            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                            <statement name="DO">
                              <block type="variables_set">
                                <field name="VAR" id="var_char">目前字元</field>
                                <value name="VALUE">
                                  <block type="text_charAt">
                                    <mutation at="true"></mutation>
                                    <field name="WHERE">FROM_START</field>
                                    <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_word">字串</field></block></value>
                                    <value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value>
                                  </block>
                                </value>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0">
                                      <block type="logic_compare">
                                        <field name="OP">EQ</field>
                                        <value name="A"><block type="variables_get"><field name="VAR" id="var_char">目前字元</field></block></value>
                                        <value name="B"><block type="variables_get"><field name="VAR" id="var_target">目標字元</field></block></value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="variables_set">
                                        <field name="VAR" id="var_count">出現次數</field>
                                        <value name="VALUE">
                                          <block type="math_arithmetic">
                                            <field name="OP">ADD</field>
                                            <value name="A"><block type="variables_get"><field name="VAR" id="var_count">出現次數</field></block></value>
                                            <value name="B"><block type="math_number"><field name="NUM">1</field></block></value>
                                          </block>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">出現次數</field></block></value></block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`字串處理`],subConcepts:[`字元統計與格式判斷`],algorithm:[],dataStructure:[`字串`],syntax:[`字串`,`索引`,`len`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-11-1`,title:`計算字元出現最多的次數`,description:`請設計程式，輸入一字串由小寫英文字母組合，長度1~50間的字串
程式會統計該字串的字母中，出現最多的次數。
這樣的練習可以訓練你循環計數迴圈與字串統計。`,examples:[{input:`banana`,output:`3`,explanation:`第一行輸入banana
程式運算比對，出現最多為a，共出現3次
程式輸出3`},{input:`student`,output:`2`,explanation:`第一行輸入student
程式運算比對，出現最多為t，共出現2次
程式輸出2`},{input:`spider`,output:`1`,explanation:`第一行輸入spider
程式運算比對，全部字母都只出現1次
程式輸出1`}],testCases:[{input:`goodmoning`,expectedOutput:`3`,score:10},{input:`chaiyicity`,expectedOutput:`3`,score:10},{input:`announment`,expectedOutput:`4`,score:10},{input:`experimen`,expectedOutput:`3`,score:10},{input:`junior`,expectedOutput:`1`,score:10}],starterXml:``,requiresGreenFlag:!0},{id:`A-12-0`,title:`簡易密碼轉換`,problemTitle:`簡易密碼轉換`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`小明設計了一種簡單的密碼環密碼規則：將每個字母向後移二個字母（z 變 b）。

密碼環：abcdefghijklmnopqrstuvwxyz

請寫一個程式，輸入一個英文單字，輸出轉換後的字串。

這樣的練習訓練你字元處理與條件轉換。`,inputDescription:``,outputDescription:``,statement:{description:`小明設計了一種簡單的密碼環密碼規則：將每個字母向後移二個字母（z 變 b）。

密碼環：abcdefghijklmnopqrstuvwxyz

請寫一個程式，輸入一個英文單字，輸出轉換後的字串。

這樣的練習訓練你字元處理與條件轉換。`,input:``,output:``},examples:[{input:`banana`,output:`dcpcpc`,explanation:`第一行輸入banana
程式運算，將字串往後移2個位置加密
程式輸出dcpcpc`},{input:`student`,output:`uvwfgpv`,explanation:`第一行輸入student
程式運算，將字串往後移2個位置加密
程式輸出uvwfgpv`}],testCases:[{input:`goodmoning`,expectedOutput:`iqqfoqpkpi`,output:`iqqfoqpkpi`,score:10,hidden:!1},{input:`chaiyicity`,expectedOutput:`ejckakekva`,output:`ejckakekva`,score:10,hidden:!1},{input:`announcement`,expectedOutput:`cppqwpegogpv`,output:`cppqwpegogpv`,score:10,hidden:!1},{input:`experimen`,expectedOutput:`gzrgtkogp`,output:`gzrgtkogp`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_word">原始字串</variable>
    <variable id="var_ring">密碼環</variable>
    <variable id="var_result">轉換結果</variable>
    <variable id="var_i">i</variable>
    <variable id="var_char">目前字元</variable>
    <variable id="var_pos">目前位置</variable>
    <variable id="var_newpos">新位置</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="variables_set">
        <field name="VAR" id="var_ring">密碼環</field>
        <value name="VALUE"><block type="text"><field name="TEXT">abcdefghijklmnopqrstuvwxyz</field></block></value>
        <next>
          <block type="interaction_ask_and_wait">
            <value name="TEXT"><block type="text"><field name="TEXT">請輸入英文單字</field></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_word">原始字串</field>
                <value name="VALUE"><block type="interaction_answer"></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_result">轉換結果</field>
                    <value name="VALUE"><block type="text"><field name="TEXT"></field></block></value>
                    <next>
                      <block type="controls_for">
                        <field name="VAR" id="var_i">i</field>
                        <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                        <value name="TO"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_word">原始字串</field></block></value></block></value>
                        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                        <statement name="DO">
                          <block type="variables_set">
                            <field name="VAR" id="var_char">目前字元</field>
                            <value name="VALUE">
                              <block type="text_charAt">
                                <mutation at="true"></mutation>
                                <field name="WHERE">FROM_START</field>
                                <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_word">原始字串</field></block></value>
                                <value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value>
                              </block>
                            </value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="var_pos">目前位置</field>
                                <value name="VALUE">
                                  <block type="text_indexOf">
                                    <field name="END">FIRST</field>
                                    <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_ring">密碼環</field></block></value>
                                    <value name="FIND"><block type="variables_get"><field name="VAR" id="var_char">目前字元</field></block></value>
                                  </block>
                                </value>
                                <next>
                                  <block type="variables_set">
                                    <field name="VAR" id="var_newpos">新位置</field>
                                    <value name="VALUE">
                                      <block type="math_arithmetic">
                                        <field name="OP">ADD</field>
                                        <value name="A"><block type="variables_get"><field name="VAR" id="var_pos">目前位置</field></block></value>
                                        <value name="B"><block type="math_number"><field name="NUM">2</field></block></value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="controls_if">
                                        <value name="IF0">
                                          <block type="logic_compare">
                                            <field name="OP">GT</field>
                                            <value name="A"><block type="variables_get"><field name="VAR" id="var_newpos">新位置</field></block></value>
                                            <value name="B"><block type="math_number"><field name="NUM">26</field></block></value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="variables_set">
                                            <field name="VAR" id="var_newpos">新位置</field>
                                            <value name="VALUE">
                                              <block type="math_arithmetic">
                                                <field name="OP">MINUS</field>
                                                <value name="A"><block type="variables_get"><field name="VAR" id="var_newpos">新位置</field></block></value>
                                                <value name="B"><block type="math_number"><field name="NUM">26</field></block></value>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="variables_set">
                                            <field name="VAR" id="var_result">轉換結果</field>
                                            <value name="VALUE">
                                              <block type="text_join">
                                                <mutation items="2"></mutation>
                                                <value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">轉換結果</field></block></value>
                                                <value name="ADD1">
                                                  <block type="text_charAt">
                                                    <mutation at="true"></mutation>
                                                    <field name="WHERE">FROM_START</field>
                                                    <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_ring">密碼環</field></block></value>
                                                    <value name="AT"><block type="variables_get"><field name="VAR" id="var_newpos">新位置</field></block></value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_result">轉換結果</field></block></value></block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`字串處理`],subConcepts:[`字元統計與格式判斷`],algorithm:[],dataStructure:[`字串`],syntax:[`字串`,`索引`,`len`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-12-1`,title:`動態密碼轉換`,description:`小明設計了一種英文字元密碼環編碼規則：
密碼環為『abcdefghijklmnopqrstuvwxyz0123456789』
第一行輸入數字N(N介於0~36)，N為編碼位移值
編碼時，待編碼字串每個字元都按照密碼環『往前』移動N個位置
如果轉換後密碼往前超過密碼環第一個字元a，則接續最後面9繼續接回密碼環
請寫一個程式，輸入一個英文單字，程式輸出依照編碼規則轉換後的密碼字串。
這樣的練習訓練你字元處理與條件轉換。`,examples:[{input:`2
banana`,output:`98l8l8`,explanation:`第一行輸入2，表示編碼時要往前移動2個位置
第二行輸入banana表示待編碼字串為banana
程式運算，將字串往前移2個位置加密
程式輸出98l8l8`},{input:`10
student`,output:`ijk34dj`,explanation:`第一行輸入10，表示編碼時要往前10個位置
第二行輸入student表示待編碼字串為student
程式運算，將字串往前移10個位置加密
程式輸出ijk34dj`}],testCases:[{input:`12
goodmoning`,expectedOutput:`4cc1acb6b4`,score:10},{input:`29
chaiyicity`,expectedOutput:`johp5pjp05`,score:10},{input:`9
announcement`,expectedOutput:`1eefle35d5ek`,score:10},{input:`0
experimen`,expectedOutput:`experimen`,score:10}],starterXml:``,requiresGreenFlag:!0},{id:`A-13-0`,title:`二數的最大公因數`,problemTitle:`二數的最大公因數`,courseCode:`JSA00`,courseName:`基礎練習2`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`小明上學時，不太會找最大公因數，請寫個程式幫他找一下
輸入二個整數，請計算這二個數字的最大公因數`,inputDescription:`輸入2行
第一行輸入第1個整數N
第二行輸入地2個整數M
程式運算找出二數的最大公因數並輸出`,outputDescription:``,statement:{description:`小明上學時，不太會找最大公因數，請寫個程式幫他找一下
輸入二個整數，請計算這二個數字的最大公因數`,input:`輸入2行
第一行輸入第1個整數N
第二行輸入地2個整數M
程式運算找出二數的最大公因數並輸出`,output:``},examples:[{input:`9
6`,output:`3`,explanation:`第一行輸入9，
第二行輸入6，
程式輸出6、9二個數的最大公因數3`},{input:`30
72`,output:`6`,explanation:`第一行輸入30，
第二行輸入72
程式輸出30，72二個數的最大公因數6`}],testCases:[{input:`12
6`,expectedOutput:`6`,output:`6`,score:10,hidden:!1},{input:`34
52`,expectedOutput:`2`,output:`2`,score:10,hidden:!1},{input:`24
18`,expectedOutput:`6`,output:`6`,score:10,hidden:!1},{input:`1
8`,expectedOutput:`1`,output:`1`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_a">第一個數</variable>
    <variable id="var_b">第二個數</variable>
    <variable id="var_limit">較小值</variable>
    <variable id="var_gcd">最大公因數</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入第一個整數</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_a">第一個數</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入第二個整數</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_b">第二個數</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="variables_set">
                        <field name="VAR" id="var_gcd">最大公因數</field>
                        <value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value>
                        <next>
                          <block type="controls_if">
                            <mutation else="1"></mutation>
                            <value name="IF0">
                              <block type="logic_compare">
                                <field name="OP">LT</field>
                                <value name="A"><block type="variables_get"><field name="VAR" id="var_a">第一個數</field></block></value>
                                <value name="B"><block type="variables_get"><field name="VAR" id="var_b">第二個數</field></block></value>
                              </block>
                            </value>
                            <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_limit">較小值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_a">第一個數</field></block></value></block></statement>
                            <statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_limit">較小值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_b">第二個數</field></block></value></block></statement>
                            <next>
                              <block type="controls_for">
                                <field name="VAR" id="var_i">i</field>
                                <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                                <value name="TO"><block type="variables_get"><field name="VAR" id="var_limit">較小值</field></block></value>
                                <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                                <statement name="DO">
                                  <block type="controls_if">
                                    <value name="IF0">
                                      <block type="logic_operation">
                                        <field name="OP">AND</field>
                                        <value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_a">第一個數</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
                                        <value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_b">第二個數</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
                                      </block>
                                    </value>
                                    <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_gcd">最大公因數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></statement>
                                  </block>
                                </statement>
                                <next>
                                  <block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_gcd">最大公因數</field></block></value></block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`數學運算與數論`],subConcepts:[`整數性質`],algorithm:[`枚舉`,`輾轉相除`],dataStructure:[],syntax:[`取餘數`,`迴圈`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-13-1`,title:`最大公因數`,description:`小明上學時，不太會找最大公因數，請寫個程式幫他找一下
輸入一組整數，請計算這些數字的最大公因數
輸入格式：輸入2行
第一行輸入1個整數N，代表接下來要計算最大公因數的個數
第二行輸入N個整數，用空格隔開，代表要計算最大公因數的N個整數`,examples:[{input:`2
6 9`,output:`3`,explanation:`第一行輸入2，表示接下來要輸入2個數
第二行輸入6 9，表示要找出6、9的最大公因數
程式輸出最大公因數3`},{input:`3
4 6 12`,output:`2`,explanation:`第一行輸入3，表示接下來要輸入3個數
第二行輸入4 6 12，表示要找出4、6、12的最大公因數
程式輸出最大公因數2`},{input:`2
1 99`,output:`1`,explanation:`第一行輸入2，表示接下來要輸入2個數
第二行輸入1 99，表示要找出1，99的最大公因數
程式輸出最大公因數1`},{input:`1
8`,output:`8`,explanation:`第一行輸入1，表示接下來要輸入1個數
第二行輸入8，表示要找出8的最大公因數
自己的最大公因數是自己，程式輸出最大公因數8`}],testCases:[{input:`3
12 24 30`,expectedOutput:`6`,score:10},{input:`6
2 5 24 15 36 54`,expectedOutput:`1`,score:10},{input:`3
51 9 24`,expectedOutput:`3`,score:10},{input:`1
8`,expectedOutput:`8`,score:10}],starterXml:``,requiresGreenFlag:!0}]},f=s({JSB00:()=>p}),p={code:`JSB00`,title:`基礎練習1`,type:`programming`,mode:`learning`,tasks:[{id:`A-01-0`,title:`Hello world`,problemTitle:`Hello world`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`在程式設計的第一步，最重要的是能夠讀取`,inputDescription:``,outputDescription:``,statement:{description:`在程式設計的第一步，最重要的是能夠讀取`,input:``,output:``},examples:[{input:`Amy`,output:`Hello, Amy`,explanation:`第一個輸入 Amy，代表名字為 Amy
程式輸出 Hello, Amy`},{input:`Tom`,output:`Hello, Tom`,explanation:`第一個輸入 Tom，代表名字為 Tom
程式輸出 Hello, Amy`}],testCases:[{input:`Amy`,expectedOutput:`Hello, Amy`,output:`Hello, Amy`,score:50,hidden:!1},{input:`Tom`,expectedOutput:`Hello, Tom`,output:`Hello, Tom`,score:50,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_name">名字</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入名字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_name">名字</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_say">
                <value name="TEXT">
                  <block type="text_join">
                    <mutation items="2"></mutation>
                    <value name="ADD0"><block type="text"><field name="TEXT">Hello, </field></block></value>
                    <value name="ADD1"><block type="variables_get"><field name="VAR" id="var_name">名字</field></block></value>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-01-1`,title:`一起學習吧`,problemTitle:`一起學習吧`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`在程式設計的第一步，最重要的是能夠讀取`,inputDescription:``,outputDescription:``,statement:{description:`在程式設計的第一步，最重要的是能夠讀取`,input:``,output:``},examples:[{input:`Amy
John`,output:`Amy, John, 一起學習吧！`,explanation:`第一個輸入 Amy，代表朋友一名字為 Amy
第二個輸入 John，代表朋友二名字為 John
程式輸出 Amy, John, 一起學習吧！`},{input:`Tom
Susan`,output:`Tom, Susan, 一起學習吧！`,explanation:`第一個輸入 Tom，代表第一個名字為 Tom
第二個輸入 Susan，代表第二個名字為 Susan
程式輸出 Tom, Susan, 一起學習吧！`}],testCases:[{input:`Amy
John`,expectedOutput:`Amy, John, 一起學習吧！`,output:`Amy, John, 一起學習吧！`,score:50,hidden:!1},{input:`Tom
Susan`,expectedOutput:`Tom, Susan, 一起學習吧！`,output:`Tom, Susan, 一起學習吧！`,score:50,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-02-0`,title:`數字加總`,problemTitle:`數字加總`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`當我們要處理數字時，常常需要加總。

請設計一個程式，讓`,inputDescription:``,outputDescription:``,statement:{description:`當我們要處理數字時，常常需要加總。

請設計一個程式，讓`,input:``,output:``},examples:[{input:`9
4`,output:`13`,explanation:`第一個輸入9
第二個輸入4
程式輸出9+4總和13`},{input:`6
5`,output:`11`,explanation:`第一個輸入6
第二個輸入5
程式輸出6+5總和11`}],testCases:[{input:`9
4`,expectedOutput:`13`,output:`13`,score:50,hidden:!1},{input:`6
5`,expectedOutput:`11`,output:`11`,score:50,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_a">數字一</variable>
    <variable id="var_b">數字二</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入第一個數字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_a">數字一</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入第二個數字</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_b">數字二</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="interaction_say">
                        <value name="TEXT">
                          <block type="math_arithmetic">
                            <field name="OP">ADD</field>
                            <value name="A"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value>
                            <value name="B"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-02-1`,title:`數字平均`,problemTitle:`數字平均`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`當我們要處理數字時，常常需計算平均。

請設計一個程式，讓`,inputDescription:``,outputDescription:``,statement:{description:`當我們要處理數字時，常常需計算平均。

請設計一個程式，讓`,input:``,output:``},examples:[{input:`9
4`,output:`7`,explanation:`第一個輸入9
第二個輸入4
程式輸出9、4的平均四捨五入取整數7`},{input:`6
5`,output:`6`,explanation:`第一個輸入6
第二個輸入5
程式輸出6、5的平均四捨五入取整數6`}],testCases:[{input:`9
4`,expectedOutput:`7`,output:`7`,score:50,hidden:!1},{input:`6
5`,expectedOutput:`6`,output:`6`,score:50,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-03-0`,title:`比較大小`,problemTitle:`比較大小`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`在生活中常常會需要比較兩個數字誰比較大。

請寫一個程式，輸入兩個整數，輸出較大的數字。

如果兩個數字相同，就輸出「一樣大」。

這樣的練習可以訓練你使用條件判斷。`,inputDescription:``,outputDescription:``,statement:{description:`在生活中常常會需要比較兩個數字誰比較大。

請寫一個程式，輸入兩個整數，輸出較大的數字。

如果兩個數字相同，就輸出「一樣大」。

這樣的練習可以訓練你使用條件判斷。`,input:``,output:``},examples:[{input:`8
5`,output:`8`,explanation:`第一個輸入8
第二個輸入5
較大的是數字8，程式輸出8`},{input:`7
7`,output:`一樣大`,explanation:`第一個輸入7
第二個輸入7
二個數一樣大，程式輸出一樣大`}],testCases:[{input:`8
5`,expectedOutput:`8`,output:`8`,score:50,hidden:!1},{input:`7
7`,expectedOutput:`一樣大`,output:`一樣大`,score:50,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_a">數字一</variable>
    <variable id="var_b">數字二</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入第一個數字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_a">數字一</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入第二個數字</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_b">數字二</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="controls_if">
                        <mutation elseif="1" else="1"></mutation>
                        <value name="IF0">
                          <block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value></block>
                        </value>
                        <statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value></block></statement>
                        <value name="IF1">
                          <block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value></block>
                        </value>
                        <statement name="DO1"><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value></block></statement>
                        <statement name="ELSE"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">一樣大</field></block></value></block></statement>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-03-1`,title:`臺斤公斤大PK`,problemTitle:`臺斤公斤大PK`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`在生活中常常會需要比較重量，台灣常見的單位有台斤、公斤，一台斤等於0.6公斤

請寫一個程式，輸入兩個不同單位重量

第一個數字輸入M，表示重量M台斤

第二個數字輸入N，表示重量N公斤

請比較兩筆重量輸入，輸出較大重量的數字及單位。

如果兩個數字相同，就輸出「一樣重」。

這樣的練習可以訓練你使用條件判斷。`,inputDescription:``,outputDescription:``,statement:{description:`在生活中常常會需要比較重量，台灣常見的單位有台斤、公斤，一台斤等於0.6公斤

請寫一個程式，輸入兩個不同單位重量

第一個數字輸入M，表示重量M台斤

第二個數字輸入N，表示重量N公斤

請比較兩筆重量輸入，輸出較大重量的數字及單位。

如果兩個數字相同，就輸出「一樣重」。

這樣的練習可以訓練你使用條件判斷。`,input:``,output:``},examples:[{input:`10
5`,output:`10台斤`,explanation:`第一個輸入10，表示10台斤
第二個輸入5，表示5公斤
較大的重量是10台斤，輸出10台斤`},{input:`5
5`,output:`5公斤`,explanation:`第一個輸入5，表示5台斤
第二個輸入5，表示5公斤
較大的重量是5公斤，輸出5公斤`},{input:`10
6`,output:`一樣重`,explanation:`第一個輸入10，表示10台斤
第二個輸入6，表示6公斤
兩個重量一樣種，輸出一樣重`}],testCases:[{input:`10
5`,expectedOutput:`10台斤`,output:`10台斤`,score:33,hidden:!1},{input:`5
5`,expectedOutput:`5公斤`,output:`5公斤`,score:33,hidden:!1},{input:`10
6`,expectedOutput:`一樣重`,output:`一樣重`,score:33,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-04-0`,title:`判斷奇偶數`,problemTitle:`判斷奇偶數`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`程式設計中，常常需要根據數字的性質進行分類。

請你寫一個程式，輸入一個整數，如果這個數除以2的餘數為0，表示是偶數，輸出 Even，如果餘數是1，表示是奇數，輸出 Odd。

這樣的練習可以幫助你熟悉條件判斷的應用。`,inputDescription:``,outputDescription:``,statement:{description:`程式設計中，常常需要根據數字的性質進行分類。

請你寫一個程式，輸入一個整數，如果這個數除以2的餘數為0，表示是偶數，輸出 Even，如果餘數是1，表示是奇數，輸出 Odd。

這樣的練習可以幫助你熟悉條件判斷的應用。`,input:``,output:``},examples:[{input:`8`,output:`Even`,explanation:`輸入8，8除以2餘數=0
程式輸出偶數Even`},{input:`7`,output:`Odd`,explanation:`輸入7，7除以2餘數=1
程式輸出奇數數Odd`}],testCases:[{input:`3`,expectedOutput:`Odd`,output:`Odd`,score:10,hidden:!1},{input:`99`,expectedOutput:`Odd`,output:`Odd`,score:10,hidden:!1},{input:`78`,expectedOutput:`Even`,output:`Even`,score:10,hidden:!1},{input:`22`,expectedOutput:`Even`,output:`Even`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">數字</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入一個整數</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">數字</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="controls_if">
                <mutation else="1"></mutation>
                <value name="IF0">
                  <block type="logic_compare">
                    <field name="OP">EQ</field>
                    <value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_n">數字</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">2</field></block></value></block></value>
                    <value name="B"><block type="math_number"><field name="NUM">0</field></block></value>
                  </block>
                </value>
                <statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">Even</field></block></value></block></statement>
                <statement name="ELSE"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">Odd</field></block></value></block></statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-04-1`,title:`成績等第`,problemTitle:`成績等第`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`不少學校成績採用等弟制，80~100為A，70~79為B，60~69為C，50~59為D，其餘49分以下為E

請你寫一個程式，輸入一個整數(0~100)，輸出對應的成績等弟。

這樣的練習可以幫助你熟悉條件判斷的應用。`,inputDescription:``,outputDescription:``,statement:{description:`不少學校成績採用等弟制，80~100為A，70~79為B，60~69為C，50~59為D，其餘49分以下為E

請你寫一個程式，輸入一個整數(0~100)，輸出對應的成績等弟。

這樣的練習可以幫助你熟悉條件判斷的應用。`,input:``,output:``},examples:[{input:`90`,output:`A`,explanation:`輸入90，表示成績90
程式輸出A`},{input:`45`,output:`E`,explanation:`輸入45，表示成績45
程式輸出E`}],testCases:[{input:`69`,expectedOutput:`C`,output:`C`,score:10,hidden:!1},{input:`99`,expectedOutput:`A`,output:`A`,score:10,hidden:!1},{input:`78`,expectedOutput:`B`,output:`B`,score:10,hidden:!1},{input:`55`,expectedOutput:`D`,output:`D`,score:10,hidden:!1},{input:`12`,expectedOutput:`E`,output:`E`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-05-0`,title:`三科成績計算`,problemTitle:`三科成績計算`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`小明參加了數學、英文、自然三科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。

請設計程式，輸入三科的成績，計算總分與平均。

平均成績以四捨五入取到整數

如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。

這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,inputDescription:``,outputDescription:``,statement:{description:`小明參加了數學、英文、自然三科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。

請設計程式，輸入三科的成績，計算總分與平均。

平均成績以四捨五入取到整數

如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。

這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,input:``,output:``},examples:[{input:`3
80 70 90`,output:`240
80
及格`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料80 70 90，經過計算後
總分、平均、及格或不及格180 80 及格`},{input:`3
50 42 60`,output:`152
51
不及格`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料50 42 60，經過計算後
程式輸出總分、平均、及格或不及格152 51 不及格`}],testCases:[{input:`3
20 60 90`,expectedOutput:`170 57 不及格`,output:`170 57 不及格`,score:10,hidden:!1},{input:`3
80 70 90`,expectedOutput:`240 80 及格`,output:`240 80 及格`,score:10,hidden:!1},{input:`3
45 65 80`,expectedOutput:`190 63 及格`,output:`190 63 及格`,score:10,hidden:!1},{input:`3
100 100 90`,expectedOutput:`290 97 及格`,output:`290 97 及格`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_count">筆數</variable>
    <variable id="var_score">目前成績</variable>
    <variable id="var_total">總分</variable>
    <variable id="var_avg">平均</variable>
    <variable id="var_result">結果</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入筆數</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_count">筆數</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_total">總分</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="var_count">筆數</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="var_score">目前成績</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="var_total">總分</field>
                                <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_score">目前成績</field></block></value></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="variables_set">
                        <field name="VAR" id="var_avg">平均</field>
                        <value name="VALUE"><block type="math_round"><field name="OP">ROUND</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_count">筆數</field></block></value></block></value></block></value>
                        <next>
                          <block type="controls_if">
                            <mutation else="1"></mutation>
                            <value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_avg">平均</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value>
                            <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果</field><value name="VALUE"><block type="text"><field name="TEXT">及格</field></block></value></block></statement>
                            <statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果</field><value name="VALUE"><block type="text"><field name="TEXT">不及格</field></block></value></block></statement>
                            <next>
                              <block type="interaction_say">
                                <value name="TEXT"><block type="text_join"><mutation items="5"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_avg">平均</field></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="var_result">結果</field></block></value></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-05-1`,title:`第二、三件購物優惠`,problemTitle:`第二、三件購物優惠`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`practice`,blocklyFit:`高`,requiresGreenFlag:!0,description:`大南百貨進行第二、第三件優惠活動，購買3件物品，第2件9折，第3件8折。

請設計程式，依序輸入三件物品的定價，計算三件物品合計售價，以及最後優惠多少元。

每件物品打折後價格以無條件捨去取整數

程式最後輸出 定價加總總額、售價加總總額、優惠多少元`,inputDescription:``,outputDescription:``,statement:{description:`大南百貨進行第二、第三件優惠活動，購買3件物品，第2件9折，第3件8折。

請設計程式，依序輸入三件物品的定價，計算三件物品合計售價，以及最後優惠多少元。

每件物品打折後價格以無條件捨去取整數

程式最後輸出 定價加總總額、售價加總總額、優惠多少元`,input:``,output:``},examples:[{input:`3
80 70 90`,output:`240
215
25`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料80 70 90，經過計算後
第二筆70打9折再無條件捨去，共63元
第三筆90打8折再無條件捨去，共72元
程式輸出定價加總總額240元，售價加總總額215元，共優惠25元`},{input:`3
50 42 60`,output:`152
135
17`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料50 42 60，經過計算後
第二筆42打9折再無條件捨去，共37元
第三筆60打8折再無條件捨去，共48元
程式輸出定價加總總額240元，售價加總總額215元，共優惠25元`}],testCases:[{input:`3
60 65 1999`,expectedOutput:`2124 1717 407`,output:`2124 1717 407`,score:10,hidden:!1},{input:`3
70 90 965`,expectedOutput:`1125 923 202`,output:`1125 923 202`,score:10,hidden:!1},{input:`3
45 65 80`,expectedOutput:`190 167 23`,output:`190 167 23`,score:10,hidden:!1},{input:`3
90 100 284`,expectedOutput:`474 407 67`,output:`474 407 67`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-06-0`,title:`連續加總(1加到N)`,problemTitle:`連續加總(1加到N)`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`有時候我們需要計算從 1 到某個數字的總和。
請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。

例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。`,inputDescription:``,outputDescription:``,statement:{description:`有時候我們需要計算從 1 到某個數字的總和。
請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。

例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。`,input:``,output:``},examples:[{input:`5`,output:`15`,explanation:`輸入 5 → 1+2+3+4+5=15
程式輸出15`},{input:`10`,output:`55`,explanation:`輸入 10 → 1+2+3+4...+10=55
程式輸出55`}],testCases:[{input:`5`,expectedOutput:`15`,output:`15`,score:10,hidden:!1},{input:`20`,expectedOutput:`210`,output:`210`,score:10,hidden:!1},{input:`88`,expectedOutput:`3916`,output:`3916`,score:10,hidden:!1},{input:`100`,expectedOutput:`5050`,output:`5050`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_sum">總和</variable><variable id="var_i">i</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入 N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_sum">總和</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="var_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO"><block type="variables_set"><field name="VAR" id="var_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value></block></statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-06-1`,title:`連續乘積(1*2*3...*N)`,problemTitle:`連續乘積(1*2*3...*N)`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`輸入一個整數 N，計算從 1*2*3....*N 的結果。

例如 N=5 時，1*2*3*4*5=120。
這樣的練習可以訓練你使用迴圈計算。`,inputDescription:``,outputDescription:``,statement:{description:`輸入一個整數 N，計算從 1*2*3....*N 的結果。

例如 N=5 時，1*2*3*4*5=120。
這樣的練習可以訓練你使用迴圈計算。`,input:``,output:``},examples:[{input:`5`,output:`120`,explanation:`輸入 5 → 1*2*3*4*5=120
程式輸出120`},{input:`6`,output:`720`,explanation:`6 → 1*2*3*4*5*6=720
程式輸出720`}],testCases:[{input:`5`,expectedOutput:`120`,output:`120`,score:10,hidden:!1},{input:`6`,expectedOutput:`720`,output:`720`,score:10,hidden:!1},{input:`1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`8`,expectedOutput:`40320`,output:`40320`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-07-0`,title:`乘法表`,problemTitle:`乘法表`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。
例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。

程式輸出3 6 9 12 15 18 21 24 27

這樣的練習能讓你熟悉迴圈的運用。`,inputDescription:``,outputDescription:``,statement:{description:`請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。
例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。

程式輸出3 6 9 12 15 18 21 24 27

這樣的練習能讓你熟悉迴圈的運用。`,input:``,output:``},examples:[{input:`3`,output:`3 6 9 12 15 18 21 24 27`,explanation:`第一行輸入3，經過九九乘法計算後
程式輸出3 6 9 12 15 18 21 24 27`},{input:`6`,output:`6 12 18 24 30 36 42 48 54`,explanation:`第一行輸入6，經過九九乘法計算後
程式輸出6 12 18 24 30 36 42 48 54`}],testCases:[{input:`3`,expectedOutput:`3 6 9 12 15 18 21 24 27`,output:`3 6 9 12 15 18 21 24 27`,score:10,hidden:!1},{input:`6`,expectedOutput:`6 12 18 24 30 36 42 48 54`,output:`6 12 18 24 30 36 42 48 54`,score:10,hidden:!1},{input:`5`,expectedOutput:`5 10 15 20 25 30 35 40 45`,output:`5 10 15 20 25 30 35 40 45`,score:10,hidden:!1},{input:`9`,expectedOutput:`9 18 27 36 45 54 63 72 81`,output:`9 18 27 36 45 54 63 72 81`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_output">輸出文字</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入 N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_output">輸出文字</field>
                <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="var_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value>
                    <value name="TO"><block type="math_number"><field name="NUM">9</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO"><block type="variables_set"><field name="VAR" id="var_output">輸出文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_output">輸出文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value></block></value></block></value></block></statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_output">輸出文字</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-07-1`,title:`跳繩比賽`,problemTitle:`跳繩比賽`,courseCode:`JSB00`,courseName:`基礎練習1`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!0,description:`體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。

請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料

第二行輸入一串數列共N筆整數，序列的數字以空隔間格。

程式輸出小組全部人員總共跳繩幾次？`,inputDescription:``,outputDescription:``,statement:{description:`體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。

請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料

第二行輸入一串數列共N筆整數，序列的數字以空隔間格。

程式輸出小組全部人員總共跳繩幾次？`,input:``,output:``},examples:[{input:`5
20 19 36 25 30`,output:`130`,explanation:`第一行輸入5，表示小組有5人。
第二行輸入20 19 36 25 30，表示小組每人分別跳20、19、36、25、30下。
程式輸出小組累計共跳130下`},{input:`3
6 12 18`,output:`36`,explanation:`第一行輸入3，表示小組有3人。
第二行輸入6 12 18，表示小組每人分別跳6、12、18下。
程式輸出小組累計共跳36下`}],testCases:[{input:`4
18 21 24 27`,expectedOutput:`90`,output:`90`,score:10,hidden:!1},{input:`6
6 12 18 24 30 36`,expectedOutput:`126`,output:`126`,score:10,hidden:!1},{input:`5
5 10 15 20 25`,expectedOutput:`75`,output:`75`,score:10,hidden:!1},{input:`1
9`,expectedOutput:`9`,output:`9`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]},m={"SR-B01":{id:`SR-B01`,title:`SmartRing 基礎任務：按鈕控制燈光`,type:`SmartRing 互動任務`,level:`國小高年級 / 國中初階`,goal:`透過按鈕與 LED 燈光互動，理解條件判斷、輸入偵測與輸出控制。`,description:`本任務要求學生連接 SmartRingController，按下指定按鈕後，讓指定 LED 顯示指定 RGB 顏色。`,demoObserve:`觀察 SmartRing 按鈕被按下時，單顆 LED 如何被即時控制。`,practiceTask:`修改按鈕、LED 編號與 RGB 數值，完成不同按鈕對應不同顏色的互動效果。`,functionTask:`進階挑戰：整理成自己的 lightLed(index, r, g, b) 函式。`,challenge:`加入 while true 持續偵測按鈕，並使用「中止程式」按鈕停止互動程式。`,operation:`學生需要先連線 SmartRingController，再使用「SmartRing 按鈕被按下？」與「設定 SmartRing 第 N 顆 LED RGB」積木完成互動任務。`,blockLimit:`建議使用邏輯、迴圈、SmartRing 按鈕、等待與 SmartRing 基礎 LED 控制積木。`,smartRingRequirement:`需要使用 ESP8266 SmartRingController。按鈕輸入會控制 LED 輸出。`,scoring:`學習模式以觀察是否能正確觸發 LED 為主；競賽模式未來可檢查按鈕反應與 LED 狀態。`,hint:`若使用無限迴圈偵測按鈕，請保留等待 1 毫秒，並使用「中止程式」停止。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="controls_if" x="40" y="40">
    <value name="IF0">
      <block type="smartring_button_pressed">
        <field name="BUTTON">1</field>
      </block>
    </value>
    <statement name="DO0">
      <block type="smartring_set_led_rgb">
        <value name="INDEX"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
        <value name="R"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
        <value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next>
          <block type="smartring_wait_ms">
            <value name="MS"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
            <next>
              <block type="text_print">
                <value name="TEXT">
                  <block type="text"><field name="TEXT">BTN1/F 被按下，用 RGB 點亮第 1 顆 LED</field></block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

</xml>`,starterMessage:`已載入 SR-B01：按鈕控制 LED RGB 範例。`},"SR-A01":{id:`SR-A01`,title:`SmartRing 陣列任務：LED 圖樣陣列仿作`,type:`SmartRing 陣列任務`,level:`國中八年級`,goal:`透過 DEMO 觀察 LED 圖樣，再使用暫存陣列指定 LED 位置，理解陣列索引與資料顯示。`,description:`本任務先示範「中間四顆」圖樣，再要求學生不用 DEMO 積木，改用 LED 暫存陣列做出相同圖樣。`,demoObserve:`執行「示範圖樣：中間四顆藍色」，觀察哪些 LED 亮起。`,practiceTask:`使用「清除暫存陣列」「設定暫存陣列第 N 顆 LED 顏色」「顯示暫存陣列到 SmartRing」仿作相同圖樣。`,functionTask:`整理成 showCenterFour(color) 或 showPattern() 函式，讓圖樣可重複使用。`,challenge:`改做左半邊、右半邊、外側四顆或交錯燈圖樣。`,operation:`先執行 DEMO 觀察，再使用暫存陣列積木重做。DEMO 積木只作觀察，不作為任務解答。`,blockLimit:`仿作階段建議不要使用「示範圖樣」積木，改用 LED 暫存陣列群組。`,smartRingRequirement:`SmartRing 需顯示與 DEMO 相同的 LED 位置與顏色。`,scoring:`未來評分可檢查是否使用暫存陣列，並比對 LED 位置是否正確。`,hint:`把 LED 1～12 想成陣列第 1～12 格；圖樣就是一組被設定的格子。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="smartring_demo_pattern" x="40" y="40">
    <field name="PATTERN">centerFour</field>
    <field name="COLOR">blue</field>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="smartring_clear_led_buffer">
            <next>
              <block type="smartring_set_buffer_led_color">
                <value name="INDEX"><shadow type="math_number"><field name="NUM">5</field></shadow></value>
                <field name="COLOR">blue</field>
                <next>
                  <block type="smartring_set_buffer_led_color">
                    <value name="INDEX"><shadow type="math_number"><field name="NUM">6</field></shadow></value>
                    <field name="COLOR">blue</field>
                    <next>
                      <block type="smartring_set_buffer_led_color">
                        <value name="INDEX"><shadow type="math_number"><field name="NUM">7</field></shadow></value>
                        <field name="COLOR">blue</field>
                        <next>
                          <block type="smartring_set_buffer_led_color">
                            <value name="INDEX"><shadow type="math_number"><field name="NUM">8</field></shadow></value>
                            <field name="COLOR">blue</field>
                            <next>
                              <block type="smartring_show_led_buffer" />
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 SR-A01：LED 圖樣觀察與陣列仿作範例。`},"SR-A02":{id:`SR-A02`,title:`SmartRing 陣列任務：狀態顯示與進度條仿作`,type:`SmartRing 陣列任務`,level:`國中八年級`,goal:`將數值轉換為 LED 顯示數量，理解變數、比例、迴圈與陣列資料產生。`,description:`本任務先示範進度條或分數顯示，再要求學生用變數與迴圈自行設定暫存陣列。`,demoObserve:`執行「示範狀態顯示：進度條 值 6 最大 12」，觀察 LED 1～6 亮起。`,practiceTask:`使用變數 value 與 for 迴圈，讓 LED 1～value 亮起，完成進度條。`,functionTask:`整理成 showProgress(value, maxValue, color) 函式，讓不同數值都能轉成 LED 顯示。`,challenge:`將 value/maxValue 換算成 12 顆 LED 的數量，例如分數 50/100 顯示 6 顆。`,operation:`先看 DEMO，再以暫存陣列、變數與迴圈實作。`,blockLimit:`仿作階段建議使用變數、迴圈、數學與 LED 暫存陣列積木。`,smartRingRequirement:`LED 顆數需能依 value 變化。`,scoring:`未來可用不同 value 測試 LED 顆數是否正確。`,hint:`先做 value=6、max=12，再挑戰 value=50、max=100。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="value">value</field>
    <value name="VALUE"><block type="math_number"><field name="NUM">6</field></block></value>
    <next>
      <block type="smartring_demo_status_display">
        <field name="STATUS">progress</field>
        <value name="VALUE"><block type="variables_get"><field name="VAR" id="value">value</field></block></value>
        <value name="MAX"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
        <field name="COLOR">green</field>
        <next>
          <block type="smartring_wait_ms">
            <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
            <next>
              <block type="smartring_clear_led_buffer">
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="i">i</field>
                    <value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="value">value</field></block></value>
                    <value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                    <statement name="DO">
                      <block type="smartring_set_buffer_led_color">
                        <value name="INDEX"><block type="variables_get"><field name="VAR" id="i">i</field></block></value>
                        <field name="COLOR">green</field>
                      </block>
                    </statement>
                    <next>
                      <block type="smartring_show_led_buffer" />
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 SR-A02：狀態顯示與進度條仿作範例。`},"SR-F01":{id:`SR-F01`,title:`SmartRing 函式任務：填滿動畫函式仿作`,type:`SmartRing 函式仿作任務`,level:`國中八年級 / 九年級`,goal:`從填滿動畫 DEMO 回推迴圈與暫存陣列流程，並整理成可重複使用的函式。`,description:`本任務先播放填滿動畫，再要求學生用 for 迴圈逐顆設定 LED，最後整理成自訂函式。`,demoObserve:`觀察 LED 如何從第 1 顆逐步亮到第 12 顆。`,practiceTask:`用 for 迴圈、暫存陣列、顯示暫存陣列與等待，仿作填滿動畫。`,functionTask:`建立 fillAnimation(color, speed) 函式，讓顏色與速度可以變成參數。`,challenge:`改成從 LED 12 填回 LED 1，或只填滿前 N 顆。`,operation:`先執行 DEMO，再完成仿作，最後用函式積木整理程式。`,blockLimit:`仿作階段建議不要使用「播放填滿動畫」積木。`,smartRingRequirement:`LED 應逐顆增加亮起，直到 12 顆全部亮起。`,scoring:`未來可檢查是否有迴圈、等待與暫存陣列顯示。`,hint:`每次迴圈設定一顆 LED，顯示，再等待。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="smartring_play_fill_animation" x="40" y="40">
    <field name="COLOR">yellow</field>
    <value name="SPEED"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="smartring_clear_led_buffer">
            <next>
              <block type="controls_for">
                <field name="VAR" id="i">i</field>
                <value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                <value name="TO"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
                <value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                <statement name="DO">
                  <block type="smartring_set_buffer_led_color">
                    <value name="INDEX"><block type="variables_get"><field name="VAR" id="i">i</field></block></value>
                    <field name="COLOR">yellow</field>
                    <next>
                      <block type="smartring_show_led_buffer">
                        <next>
                          <block type="smartring_wait_ms">
                            <value name="MS"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 SR-F01：填滿動畫 DEMO 與仿作起始積木。`},"SR-F02":{id:`SR-F02`,title:`SmartRing 函式任務：跑馬燈函式仿作`,type:`SmartRing 函式仿作任務`,level:`國中八年級 / 九年級`,goal:`使用位置變數控制單顆 LED 移動，理解索引變化、清除、顯示與函式封裝。`,description:`本任務先播放跑馬燈 DEMO，再要求學生用位置變數與暫存陣列做出單顆 LED 移動。`,demoObserve:`觀察只有一顆 LED 亮起，並從 LED 1 移動到 LED 12。`,practiceTask:`每次迴圈先清除暫存陣列，再設定目前位置 LED，顯示後等待。`,functionTask:`建立 runningLight(color, speed) 函式，讓動畫可以重複呼叫。`,challenge:`加入方向參數，讓跑馬燈可由左到右或由右到左。`,operation:`先看 DEMO，再用暫存陣列仿作，最後整理成函式。`,blockLimit:`仿作階段建議不要使用「播放跑馬燈動畫」積木。`,smartRingRequirement:`同一時間只應有一顆 LED 亮起。`,scoring:`未來可檢查是否有清除暫存陣列、位置變數與等待。`,hint:`跑馬燈的關鍵是 position 變數。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="smartring_play_running_light_animation" x="40" y="40">
    <field name="COLOR">cyan</field>
    <value name="SPEED"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="controls_for">
            <field name="VAR" id="pos">pos</field>
            <value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <value name="TO"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
            <value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <statement name="DO">
              <block type="smartring_clear_led_buffer">
                <next>
                  <block type="smartring_set_buffer_led_color">
                    <value name="INDEX"><block type="variables_get"><field name="VAR" id="pos">pos</field></block></value>
                    <field name="COLOR">cyan</field>
                    <next>
                      <block type="smartring_show_led_buffer">
                        <next>
                          <block type="smartring_wait_ms">
                            <value name="MS"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 SR-F02：跑馬燈 DEMO 與仿作起始積木。`},"SR-F03":{id:`SR-F03`,title:`SmartRing 函式任務：按鈕觸發動畫`,type:`SmartRing 互動函式任務`,level:`國中八年級 / 九年級`,goal:`使用按鈕偵測觸發動畫函式，理解無限迴圈、條件判斷、事件反應與程式中止。`,description:`本任務使用 while true 持續偵測 SmartRing 按鈕，按下指定按鈕時播放或呼叫自製動畫。`,demoObserve:`觀察按下 BTN1/F 時，動畫才會被觸發。`,practiceTask:`將內建動畫替換成自己用暫存陣列寫出的動畫流程。`,functionTask:`把自製動畫整理成函式，按下不同按鈕呼叫不同函式。`,challenge:`讓 BTN1 播放填滿、BTN2 播放跑馬燈、BTN3 清除 LED。`,operation:`執行後會進入無限偵測，請使用「中止程式」停止。`,blockLimit:`需要使用 while true、如果、SmartRing 按鈕、等待與函式。`,smartRingRequirement:`按鈕按下時應觸發指定 LED 動畫。`,scoring:`未來可檢查不同按鈕是否觸發不同動畫。`,hint:`無限迴圈中一定要加入等待 1 毫秒，避免瀏覽器卡住。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="text_print" x="40" y="20">
    <value name="TEXT">
      <block type="text"><field name="TEXT">提示：執行後可用「中止程式」停止無限偵測。</field></block>
    </value>
  </block>

  <block type="controls_whileUntil" x="40" y="120">
    <field name="MODE">WHILE</field>
    <value name="BOOL">
      <block type="logic_boolean"><field name="BOOL">TRUE</field></block>
    </value>
    <statement name="DO">
      <block type="controls_if">
        <value name="IF0">
          <block type="smartring_button_pressed">
            <field name="BUTTON">0</field>
          </block>
        </value>
        <statement name="DO0">
          <block type="smartring_play_running_light_animation">
            <field name="COLOR">red</field>
            <value name="SPEED"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
          </block>
        </statement>
        <next>
          <block type="smartring_wait_ms">
            <value name="MS"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
          </block>
        </next>
      </block>
    </statement>
  </block>

</xml>`,starterMessage:`已載入 SR-F03：按鈕觸發動畫起始積木。`},"JS-B01":{id:`JS-B01`,title:`Blockly 解題任務：重複累加`,type:`程式解題任務`,level:`國中初階`,goal:`使用變數與迴圈完成累加，並輸出結果。`,description:`未來本任務會載入測資與標準答案，學生按下測試後由系統自動評分。`,demoObserve:`觀察變數 score 如何在迴圈中逐次增加。`,practiceTask:`修改重複次數與累加值，觀察輸出結果。`,functionTask:`進階挑戰：整理成 sumTo(n) 或 addScore(times) 函式。`,challenge:`改成累加 1 到 100，或只累加偶數。`,operation:`學生使用變數紀錄目前總和，透過迴圈重複累加，最後輸出結果。`,blockLimit:`建議使用變數、迴圈、數學與文字輸出積木。`,smartRingRequirement:`本題不需要連接 SmartRingController。`,scoring:`未來評分會比對程式輸出與標準答案，計算通過測資數。`,hint:`目前可先使用「載入範例」觀察變數、迴圈與輸出。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="score">score</field>
    <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
    <next>
      <block type="controls_repeat_ext">
        <value name="TIMES"><shadow type="math_number"><field name="NUM">5</field></shadow></value>
        <statement name="DO">
          <block type="math_change">
            <field name="VAR" id="score">score</field>
            <value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <next>
              <block type="text_print">
                <value name="TEXT">
                  <block type="text_join">
                    <mutation items="2"></mutation>
                    <value name="ADD0"><block type="text"><field name="TEXT">目前分數：</field></block></value>
                    <value name="ADD1"><block type="variables_get"><field name="VAR" id="score">score</field></block></value>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 JS-B01：重複累加範例。`}},h=s({SRA00:()=>y}),g=(e,t)=>({...e,...t}),_=({pattern:e=`centerFour`,color:t=`blue`,message:n=`LED 圖樣陣列仿作`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_demo_pattern" x="40" y="40">
    <field name="PATTERN">${e}</field>
    <field name="COLOR">${t}</field>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="text_print">
            <value name="TEXT"><block type="text"><field name="TEXT">${n}：先觀察 DEMO，再用暫存陣列仿作。</field></block></value>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,v=({status:e=`progress`,value:t=6,max:n=12,color:r=`green`,message:i=`狀態顯示仿作`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_demo_status_display" x="40" y="40">
    <field name="STATUS">${e}</field>
    <value name="VALUE"><shadow type="math_number"><field name="NUM">${t}</field></shadow></value>
    <value name="MAX"><shadow type="math_number"><field name="NUM">${n}</field></shadow></value>
    <field name="COLOR">${r}</field>
    <next>
      <block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">${i}</field></block></value></block>
    </next>
  </block>
</xml>`,y={id:`SRA00`,title:`SmartRing 陣列任務`,mode:`learning`,type:`smartring`,description:`用 LED 位置與暫存陣列完成圖樣、進度、分數與生命值顯示。`,level:`國中八年級`,defaultTaskId:`SRA00-01`,tasks:[g(m[`SR-A01`],{id:`SRA00-01`,title:`LED 圖樣陣列仿作`,taskDescription:`請先觀察內建圖樣，再用暫存陣列做出相同或相近的 LED 圖樣。`,passConditions:[`能觀察並說出圖樣亮起的位置。`,`能用暫存陣列設定多顆 LED。`,`能顯示自己仿作的 LED 圖樣。`],hints:[`先記下哪些 LED 編號亮起。`,`設定完暫存陣列後，記得顯示暫存陣列。`,`可以先仿作一個簡單圖樣，再增加變化。`],challenges:[`把圖樣換成不同顏色。`,`自己設計一個左右對稱圖樣。`],starterXml:_({pattern:`centerFour`,color:`blue`,message:`LED 圖樣陣列仿作`}),starterMessage:`已載入 SRA00-01：LED 圖樣陣列仿作。`}),g(m[`SR-A01`],{id:`SRA00-02`,title:`中間四顆圖樣`,taskDescription:`請讓 SmartRing 中間四顆 LED 亮起，做出集中在中間的圖樣。`,passConditions:[`LED 5、6、7、8 能亮起。`,`其他 LED 可以保持熄滅。`,`能修改顏色並重新顯示。`],hints:[`中間四顆是 LED 5～8。`,`可以逐一設定第 5、6、7、8 顆。`,`顯示前先清除暫存陣列，可以避免殘留舊圖樣。`],challenges:[`改做中間六顆。`,`讓中間四顆使用不同顏色。`],starterXml:_({pattern:`centerFour`,color:`blue`,message:`中間四顆圖樣`}),starterMessage:`已載入 SRA00-02：中間四顆圖樣。`}),g(m[`SR-A01`],{id:`SRA00-03`,title:`奇數燈與偶數燈`,taskDescription:`請做出奇數位置或偶數位置亮起的交錯 LED 圖樣。`,passConditions:[`能讓 LED 1、3、5、7、9、11 亮起，或讓 2、4、6、8、10、12 亮起。`,`圖樣位置要呈現交錯效果。`,`能切換奇數燈與偶數燈。`],hints:[`奇數位置每次加 2。`,`可以用迴圈，也可以先手動指定。`,`先完成奇數燈，再修改成偶數燈。`],challenges:[`讓奇數燈與偶數燈交替閃爍。`,`奇數燈用一種顏色，偶數燈用另一種顏色。`],starterXml:_({pattern:`odd`,color:`yellow`,message:`奇數燈與偶數燈`}),starterMessage:`已載入 SRA00-03：奇數燈與偶數燈。`}),g(m[`SR-A02`],{id:`SRA00-04`,title:`進度條顯示`,taskDescription:`請用 LED 顆數表示目前進度，讓進度越高時亮起越多 LED。`,passConditions:[`能設定目前值與最大值。`,`進度增加時，亮起的 LED 數量也會增加。`,`能做出至少 3 種不同進度。`],hints:[`先使用內建進度顯示觀察效果。`,`value 是目前值，max 是最大值。`,`可以用 3/12、6/12、12/12 測試。`],challenges:[`用按鈕控制進度增加或減少。`,`進度滿格時改用另一種顏色提醒。`],starterXml:v({status:`progress`,value:6,max:12,color:`green`,message:`進度條顯示：6 / 12`}),starterMessage:`已載入 SRA00-04：進度條顯示。`}),g(m[`SR-A02`],{id:`SRA00-05`,title:`分數顯示`,taskDescription:`請用 LED 顆數表示分數，讓分數越高時亮起越多 LED。`,passConditions:[`能設定分數與最高分。`,`分數不同時，LED 顯示顆數會改變。`,`能顯示 8/12 或其他指定分數。`],hints:[`先用 8/12 觀察 LED 顆數。`,`如果要顯示 0～100 分，可以先思考如何換算成 0～12 顆。`,`顏色可以用來表示分數狀態。`],challenges:[`把 0～100 分轉成 0～12 顆 LED。`,`高分顯示綠色，低分顯示紅色。`],starterXml:v({status:`score`,value:8,max:12,color:`yellow`,message:`分數顯示：8 / 12`}),starterMessage:`已載入 SRA00-05：分數顯示。`}),g(m[`SR-A02`],{id:`SRA00-06`,title:`生命值顯示`,taskDescription:`請用 LED 顆數表示生命值，生命值越高亮起越多 LED。`,passConditions:[`能設定生命值與最大生命值。`,`生命值下降時，亮起的 LED 數量會減少。`,`生命值低時能用明顯顏色提醒。`],hints:[`先用 life=3、max=5 測試。`,`生命值可以搭配遊戲角色血量或剩餘機會。`,`生命值歸零時可以清除全部 LED。`],challenges:[`生命值低於 2 時改成紅色警示。`,`用按鈕控制生命值減少。`],starterXml:v({status:`life`,value:3,max:5,color:`red`,message:`生命值顯示：3 / 5`}),starterMessage:`已載入 SRA00-06：生命值顯示。`})]},b=s({SRB00:()=>E}),x=(e,t)=>({...e,...t}),S=({index:e=1,color:t=`red`,r:n=30,g:r=0,b:i=0,message:a=`SmartRing 基礎任務`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_set_led_rgb" x="40" y="40">
    <value name="INDEX"><shadow type="math_number"><field name="NUM">${e}</field></shadow></value>
    <value name="R"><shadow type="math_number"><field name="NUM">${n}</field></shadow></value>
    <value name="G"><shadow type="math_number"><field name="NUM">${r}</field></shadow></value>
    <value name="B"><shadow type="math_number"><field name="NUM">${i}</field></shadow></value>
    <next>
      <block type="text_print">
        <value name="TEXT"><block type="text"><field name="TEXT">${a}：第 ${e} 顆 LED 顯示 ${t}</field></block></value>
      </block>
    </next>
  </block>
</xml>`,C=({color:e=`blue`,message:t=`全部 LED 顏色控制`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_set_all_leds" x="40" y="40">
    <field name="COLOR">${e}</field>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">500</field></shadow></value>
        <next>
          <block type="smartring_clear_leds">
            <next>
              <block type="text_print">
                <value name="TEXT"><block type="text"><field name="TEXT">${t}：先全亮，再清除。</field></block></value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,w=({button:e=1,index:t=1,r:n=30,g:r=0,b:i=0,message:a=`按鈕控制 LED`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="controls_if" x="40" y="40">
    <value name="IF0">
      <block type="smartring_button_pressed"><field name="BUTTON">${e}</field></block>
    </value>
    <statement name="DO0">
      <block type="smartring_set_led_rgb">
        <value name="INDEX"><shadow type="math_number"><field name="NUM">${t}</field></shadow></value>
        <value name="R"><shadow type="math_number"><field name="NUM">${n}</field></shadow></value>
        <value name="G"><shadow type="math_number"><field name="NUM">${r}</field></shadow></value>
        <value name="B"><shadow type="math_number"><field name="NUM">${i}</field></shadow></value>
        <next>
          <block type="text_print">
            <value name="TEXT"><block type="text"><field name="TEXT">${a}</field></block></value>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`,T=m[`SR-B01`],E={id:`SRB00`,title:`SmartRing 基礎互動任務`,mode:`learning`,type:`smartring`,description:`完成 SmartRingController 連線、LED 顯示與按鈕互動的基本任務。`,level:`國小高年級 / 國中初階`,defaultTaskId:`SRB00-01`,tasks:[x(T,{id:`SRB00-01`,title:`SmartRing 連線檢查`,taskDescription:`請檢查 SmartRingController 是否已成功連線，並在畫面輸出連線狀態。`,passConditions:[`按下「連線 SmartRing」後，平台顯示已連線。`,`執行程式時，可以判斷「SmartRing 已連線？」。`,`連線成功時，輸出明確的提示文字。`],hints:[`先使用「SmartRing 已連線？」積木做判斷。`,`可以搭配「如果……那麼」積木顯示不同訊息。`,`若沒有反應，先確認瀏覽器是否允許 WebSerial 連線。`],challenges:[`連線成功時，讓第 1 顆 LED 閃一下。`,`未連線時，輸出「請先連線 SmartRing」。`],starterXml:`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="controls_if" x="40" y="40">
    <value name="IF0"><block type="smartring_is_connected"></block></value>
    <statement name="DO0">
      <block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">SmartRing 已連線，可以開始任務。</field></block></value></block>
    </statement>
  </block>
</xml>`,starterMessage:`已載入 SRB00-01：SmartRing 連線檢查。`}),x(T,{id:`SRB00-02`,title:`單顆 LED RGB 控制`,taskDescription:`請指定一顆 LED，設定紅、綠、藍三個亮度值，觀察 LED 顏色變化。`,passConditions:[`可以指定 LED 編號 1～12。`,`可以設定 RGB 數值，讓指定 LED 顯示顏色。`,`至少成功做出一顆紅色 LED。`],hints:[`LED 編號從 1 開始，不是從 0 開始。`,`RGB 亮度建議使用 0～30。`,`紅色可先設定 R=30、G=0、B=0。`],challenges:[`讓第 1、2、3 顆分別顯示紅、綠、藍。`,`嘗試調整 RGB 數值，做出自己喜歡的顏色。`],starterXml:S({index:1,color:`紅色`,r:30,g:0,b:0,message:`單顆 LED RGB 控制`}),starterMessage:`已載入 SRB00-02：單顆 LED RGB 控制。`}),x(T,{id:`SRB00-03`,title:`全部 LED 顏色控制`,taskDescription:`請讓 12 顆 LED 同時顯示同一種顏色，再把 LED 全部清除。`,passConditions:[`全部 LED 能同時亮起同一種顏色。`,`等待一段時間後，可以清除全部 LED。`,`可以修改顏色或等待時間。`],hints:[`先使用「設定全部顏色」類型的積木。`,`使用等待積木可以讓顏色停留一段時間。`,`最後使用清除 LED 積木讓燈熄滅。`],challenges:[`做出紅、黃、綠三段顏色變化。`,`設計一個開始提示燈效果。`],starterXml:C({color:`blue`,message:`全部 LED 顏色控制`}),starterMessage:`已載入 SRB00-03：全部 LED 顏色控制。`}),x(T,{id:`SRB00-04`,title:`按鈕控制 LED`,taskDescription:`請使用 SmartRingController 的按鈕控制 LED，讓按下按鈕時出現指定燈光效果。`,passConditions:[`程式能偵測至少一個按鈕是否被按下。`,`按下按鈕時，LED 會出現明確變化。`,`沒有按下按鈕時，程式不會出現錯誤。`],hints:[`可以使用「按鈕是否按下？」積木。`,`把按鈕判斷放進「如果……那麼」。`,`先完成一個按鈕，再增加其他按鈕。`],challenges:[`讓不同按鈕控制不同 LED。`,`加入一個按鈕用來清除全部 LED。`],starterXml:w({button:1,index:1,r:30,g:0,b:0,message:`BTN1 被按下，LED 變紅。`}),starterMessage:`已載入 SRB00-04：按鈕控制 LED。`}),x(T,{id:`SRB00-05`,title:`按鈕觸發顏色變化`,taskDescription:`請讓不同按鈕觸發不同顏色，做出一個按鍵燈光控制器。`,passConditions:[`至少有兩個按鈕能觸發不同顏色。`,`每個按鈕對應的顏色要能清楚分辨。`,`程式可以重複執行與測試。`],hints:[`每一個按鈕可以用一個「如果」來判斷。`,`先規劃按鈕與顏色的對應表。`,`如果燈光沒有改變，檢查是否有正確設定 LED 顏色。`],challenges:[`設計 BTN1 紅、BTN2 綠、BTN3 藍、BTN4 清除。`,`讓按鈕觸發全部 LED 變色，而不是只改單顆 LED。`],starterXml:w({button:1,index:1,r:30,g:0,b:0,message:`BTN1 被按下，LED 變紅。`}),starterMessage:`已載入 SRB00-05：按鈕觸發顏色變化。`})]},D=s({SRC00:()=>F}),O=(e={},t)=>({...e,...t}),k=(e,t)=>`
    <value name="${e}"><shadow type="math_number"><field name="NUM">${t}</field></shadow></value>`,A=e=>`
    <next>
      <block type="text_print">
        <value name="TEXT"><block type="text"><field name="TEXT">${e}</field></block></value>
      </block>
    </next>`,j=({blockType:e,fields:t={},values:n={},message:r=`請先觀察示範動畫，再用暫存陣列復刻。`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="${e}" x="40" y="40">${Object.entries(t).map(([e,t])=>`
    <field name="${e}">${t}</field>`).join(``)}${Object.entries(n).map(([e,t])=>k(e,t)).join(``)}${A(r)}
  </block>
</xml>`,M=({pattern:e=`all`,color:t=`red`,message:n=`SRC00 示範圖樣觀察`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_demo_pattern" x="40" y="40">
    <field name="PATTERN">${e}</field>
    <field name="COLOR">${t}</field>${A(n)}
  </block>
</xml>`,N=({status:e=`score`,value:t=50,max:n=100,color:r=`red`,message:i=`SRC00 狀態顯示觀察`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_demo_status_display" x="40" y="40">
    <field name="STATUS">${e}</field>
    ${k(`VALUE`,t)}
    ${k(`MAX`,n)}
    <field name="COLOR">${r}</field>${A(i)}
  </block>
</xml>`,P=({baseKey:e=`SR-F01`,id:t,title:n,taskDescription:r,passConditions:i,hints:a,challenges:o,starterXml:s,starterMessage:c})=>O(m[e],{id:t,title:n,taskDescription:r,passConditions:i,hints:a,challenges:o,starterXml:s,starterMessage:c}),F={id:`SRC00`,title:`SmartRing 動畫解析密室課程`,mode:`learning`,type:`smartring`,description:`搭配 SRC AI 伴學 GPT，完成 12 個 SmartRing 示範動畫的觀察、規則解析、流程設計、Blockly 復刻與創意改造。`,level:`國中七年級 / 八年級`,defaultTaskId:`SRC00-01`,tasks:[P({baseKey:`SR-A01`,id:`SRC00-01`,title:`全亮圖樣密室`,taskDescription:`請先載入示範積木觀察「全亮圖樣」，再到 SRC AI 伴學 GPT 輸入 SRC，選擇第 1 個密室，完成觀察動畫、解析規則與設計流程。最後回到 Blockly Lab，用 LED 暫存陣列復刻全亮圖樣。`,passConditions:[`能說出全部 LED 會同時亮起指定顏色。`,`能用流程說明從第 1 顆到第 12 顆 LED 都要設定顏色。`,`能使用清除暫存陣列、設定暫存陣列、顯示暫存陣列完成復刻。`],hints:[`先觀察這個動畫是穩定顯示，還是會移動或閃爍。`,`用 SRC 助教完成第 1～3 關後，再回來實作。`,`不要用高階示範積木當作復刻答案，請改用 LED 暫存陣列。`],challenges:[`改成不同顏色的開場畫面。`,`設計一個完成任務提示燈。`],starterXml:M({pattern:`all`,color:`red`,message:`SRC00-01：先觀察全亮圖樣，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-01：全亮圖樣密室示範積木。`}),P({baseKey:`SR-A02`,id:`SRC00-02`,title:`狀態顯示密室`,taskDescription:`請觀察狀態顯示如何把「值與最大值」轉成亮燈比例，再到 SRC AI 伴學 GPT 選擇第 2 個密室完成解析。最後用暫存陣列復刻分數條或進度條效果。`,passConditions:[`能說出亮燈數量代表值與最大值的比例。`,`能寫出計算亮燈數量的流程。`,`能依照計算結果設定指定數量的 LED。`],hints:[`觀察 value=50、max=100 時，大約會亮幾顆 LED。`,`思考：亮燈顆數 = 值 / 最大值 × LED 總數。`,`設定完暫存陣列後，記得顯示暫存陣列。`],challenges:[`做出血量條、能量條或任務進度條。`,`低於一半時改用紅色警示。`],starterXml:N({status:`score`,value:50,max:100,color:`red`,message:`SRC00-02：先觀察狀態顯示，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-02：狀態顯示密室示範積木。`}),P({baseKey:`SR-F01`,id:`SRC00-03`,title:`閃爍動畫密室`,taskDescription:`請觀察紅色閃爍 3 次的示範動畫，再到 SRC AI 伴學 GPT 選擇第 3 個密室。完成觀察、規則解析與流程設計後，用暫存陣列復刻「亮、等、滅、等、重複 3 次」的效果。`,passConditions:[`能說出全部 LED 一起亮紅色再熄滅。`,`能拆解出亮、等待、滅、等待、重複 3 次。`,`能用暫存陣列顯示亮燈與熄燈兩種狀態。`],hints:[`閃爍一定要有亮與滅兩個狀態。`,`亮與滅之後都要等待，眼睛才看得出變化。`,`清除暫存陣列後，也要顯示暫存陣列，LED 才會真的熄滅。`],challenges:[`改成藍色閃 5 次。`,`設計紅黃雙色警示燈。`],starterXml:j({blockType:`smartring_play_blink_animation`,fields:{COLOR:`red`},values:{TIMES:3},message:`SRC00-03：先觀察閃爍動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-03：閃爍動畫密室示範積木。`}),P({baseKey:`SR-F01`,id:`SRC00-04`,title:`填滿動畫密室`,taskDescription:`請觀察填滿動畫如何從第 1 顆開始依序點亮，直到 12 顆 LED 全部亮起。到 SRC 助教選擇第 4 個密室完成解析後，再用暫存陣列復刻。`,passConditions:[`能說出 LED 由少到多依序亮起。`,`能用迴圈或計數表示第 1 顆到第 12 顆。`,`能在每次新增亮燈後顯示暫存陣列並等待。`],hints:[`填滿動畫的重點是累積狀態：已亮的燈會保留。`,`每次多設定一顆 LED 後，都要顯示暫存陣列。`,`速度可用等待時間控制。`],challenges:[`改成從第 12 顆往第 1 顆填滿。`,`做出左右兩側同時往中間填滿。`],starterXml:j({blockType:`smartring_play_fill_animation`,fields:{COLOR:`red`},values:{SPEED:100},message:`SRC00-04：先觀察填滿動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-04：填滿動畫密室示範積木。`}),P({baseKey:`SR-F01`,id:`SRC00-05`,title:`清除動畫密室`,taskDescription:`請觀察清除動畫如何從已亮狀態依序熄滅，直到全部清除。到 SRC 助教選擇第 5 個密室完成解析後，再用暫存陣列復刻。`,passConditions:[`能先建立全亮或已亮狀態。`,`能說出 LED 會依序熄滅。`,`能在每次清除後顯示暫存陣列並等待。`],hints:[`清除動畫通常要先有一個已亮起的初始狀態。`,`依序熄滅時，要注意 LED 編號順序。`,`每清除一顆後都要顯示，才能看到動畫。`],challenges:[`改成從後往前清除。`,`清除完成後顯示綠色完成提示。`],starterXml:j({blockType:`smartring_play_clear_animation`,values:{SPEED:100},message:`SRC00-05：先觀察清除動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-05：清除動畫密室示範積木。`}),P({baseKey:`SR-F02`,id:`SRC00-06`,title:`跑馬燈動畫密室`,taskDescription:`請觀察跑馬燈動畫中亮點如何依序移動。到 SRC 助教選擇第 6 個密室完成解析後，用 position 變數與暫存陣列復刻單點移動效果。`,passConditions:[`能說出同一時間主要只有一顆 LED 亮起。`,`能用 position 表示目前亮燈位置。`,`能每次清除舊位置、設定新位置、顯示並等待。`],hints:[`跑馬燈的核心是位置變數 position。`,`每一步要先清除暫存陣列，再設定目前位置。`,`position 可以從 1 數到 12。`],challenges:[`做出兩顆一起移動的跑馬燈。`,`讓跑馬燈繞一圈後自動停止。`],starterXml:j({blockType:`smartring_play_running_light_animation`,fields:{COLOR:`red`},values:{SPEED:100},message:`SRC00-06：先觀察跑馬燈動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-06：跑馬燈動畫密室示範積木。`}),P({baseKey:`SR-F02`,id:`SRC00-07`,title:`左移動畫密室`,taskDescription:`請觀察左移動畫：動畫一開始會先亮起第 5、6、7、8 顆 LED，接著整段四顆連續圖樣一起往左移動。到 SRC 助教選擇第 7 個密室完成解析後，思考「整段圖樣」如何用 startPosition 與 length 表示，並用位置更新完成左移。`,passConditions:[`能說出左移動畫不是單顆跑馬燈，而是第 5～8 顆形成的整段圖樣往左移動。`,`能用 startPosition 表示圖樣起點，length=4 表示連續四顆 LED。`,`能說出左移時 startPosition 每次減 1，並且需要處理第 1 顆邊界。`],hints:[`先觀察起始圖樣：第 5、6、7、8 顆 LED 會亮起。`,`左移一次後，圖樣應變成第 4、5、6、7 顆；再左移一次變成第 3、4、5、6 顆。`,`這個任務重點是圖樣整體位移，不是只讓一顆亮點移動。`],challenges:[`用 startPosition 與 length 自己做出四顆連續 LED 的左移。`,`讓圖樣左移到邊界後改成清除、停止或循環。`],starterXml:j({blockType:`smartring_play_shift_left_animation`,fields:{COLOR:`red`},values:{TIMES:4,SPEED:100},message:`SRC00-07：先觀察第 5～8 顆連續圖樣左移，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-07：左移動畫密室示範積木。`}),P({baseKey:`SR-F02`,id:`SRC00-08`,title:`右移動畫密室`,taskDescription:`請觀察右移動畫：動畫一開始會先亮起第 5、6、7、8 顆 LED，接著整段四顆連續圖樣一起往右移動。到 SRC 助教選擇第 8 個密室完成解析後，思考右移與左移在 position 更新方向上的差異。`,passConditions:[`能說出右移動畫不是單顆跑馬燈，而是第 5～8 顆形成的整段圖樣往右移動。`,`能用 startPosition 表示圖樣起點，length=4 表示連續四顆 LED。`,`能比較右移與左移：右移時 startPosition 每次加 1，左移時每次減 1。`],hints:[`先觀察起始圖樣：第 5、6、7、8 顆 LED 會亮起。`,`右移一次後，圖樣應變成第 6、7、8、9 顆；再右移一次變成第 7、8、9、10 顆。`,`這個任務重點是整段圖樣的起始位置改變，不是只讓一顆亮點移動。`],challenges:[`用 startPosition 與 length 自己做出四顆連續 LED 的右移。`,`整合左移與右移，改用 direction 控制 startPosition 加 1 或減 1。`],starterXml:j({blockType:`smartring_play_shift_right_animation`,fields:{COLOR:`red`},values:{TIMES:4,SPEED:100},message:`SRC00-08：先觀察第 5～8 顆連續圖樣右移，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-08：右移動畫密室示範積木。`}),P({baseKey:`SR-F02`,id:`SRC00-09`,title:`來回移動動畫密室`,taskDescription:`請觀察來回移動動畫中亮點如何碰到邊界後改變方向。到 SRC 助教選擇第 9 個密室完成解析後，用 position、direction 與邊界判斷復刻。`,passConditions:[`能說出亮點會左右來回移動。`,`能指出碰到邊界後需要改變方向。`,`能用 position 與 direction 描述流程。`],hints:[`direction 可以用 1 與 -1 表示方向。`,`到第 1 顆或第 12 顆時，需要切換方向。`,`每次更新位置前後要想清楚顯示順序。`],challenges:[`到邊界時改變顏色。`,`設計兩個亮點同時來回移動。`],starterXml:j({blockType:`smartring_play_bounce_animation`,fields:{COLOR:`red`},values:{TIMES:1,SPEED:100},message:`SRC00-09：先觀察來回移動動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-09：來回移動動畫密室示範積木。`}),P({baseKey:`SR-F02`,id:`SRC00-10`,title:`交錯閃爍動畫密室`,taskDescription:`請觀察交錯閃爍動畫如何把 LED 分成兩組顯示。建議觀察時使用不同顏色較容易看出奇偶分組。到 SRC 助教選擇第 10 個密室完成解析後，用奇偶判斷復刻。`,passConditions:[`能說出 LED 被分成兩組。`,`能用奇數與偶數描述分組方式。`,`能使用如果／否則或餘數判斷設定不同顏色。`],hints:[`LED 編號除以 2 的餘數可以判斷奇偶。`,`奇數一組，偶數一組。`,`交錯效果通常需要交換兩組顏色或亮滅狀態。`],challenges:[`做出紅藍交錯警示燈。`,`改成三組顏色規則。`],starterXml:j({blockType:`smartring_play_alternate_blink_animation`,fields:{COLOR1:`red`,COLOR2:`blue`},values:{TIMES:3},message:`SRC00-10：先觀察交錯閃爍動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-10：交錯閃爍動畫密室示範積木。`}),P({baseKey:`SR-F02`,id:`SRC00-11`,title:`呼吸燈動畫密室`,taskDescription:`請觀察呼吸燈動畫中亮度如何逐漸增加再逐漸降低。到 SRC 助教選擇第 11 個密室完成解析後，用 brightness 變數與 RGB 數值復刻漸變效果。`,passConditions:[`能說出亮度不是突然改變，而是逐漸變亮再變暗。`,`能用 brightness 變數描述亮度變化。`,`能說出需要遞增與遞減兩段流程。`],hints:[`呼吸燈的核心不是位置，而是亮度。`,`亮度增加與亮度減少可以看成兩個迴圈。`,`每個亮度階段都要更新所有 LED 並顯示。`],challenges:[`改成不同顏色的呼吸燈。`,`設計像心跳一樣的快慢節奏。`],starterXml:j({blockType:`smartring_play_breathing_animation`,fields:{COLOR:`purple`},values:{TIMES:1},message:`SRC00-11：先觀察呼吸燈動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-11：呼吸燈動畫密室示範積木。`}),P({baseKey:`SR-F02`,id:`SRC00-12`,title:`彩虹動畫密室`,taskDescription:`請觀察彩虹動畫中多種顏色如何依序排列並循環流動。到 SRC 助教選擇第 12 個密室完成解析後，用顏色清單、索引與 offset 變數設計彩虹流動流程。`,passConditions:[`能說出彩虹動畫包含多種顏色。`,`能說出顏色會依序排列並流動。`,`能用顏色清單、colorIndex 或 offset 描述循環位移。`],hints:[`彩虹動畫的核心是顏色序列。`,`每顆 LED 對應顏色清單中的一個索引。`,`offset 改變後，就會產生顏色流動效果。`],challenges:[`自訂自己的彩虹顏色順序。`,`改成慢速彩虹或雙向彩虹。`],starterXml:j({blockType:`smartring_play_rainbow_animation`,values:{SPEED:60},message:`SRC00-12：先觀察彩虹動畫，再到 SRC 助教完成密室解析。`}),starterMessage:`已載入 SRC00-12：彩虹動畫密室示範積木。`})]},I=s({SRF00:()=>z}),L=(e,t)=>({...e,...t}),R=({blockType:e,color:t=`cyan`,speed:n=100,times:r=null,message:i=`動畫函式仿作`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="${e}" x="40" y="40">
    <field name="COLOR">${t}</field>
    ${r===null?``:`<value name="TIMES"><shadow type="math_number"><field name="NUM">${r}</field></shadow></value>`}
    <value name="SPEED"><shadow type="math_number"><field name="NUM">${n}</field></shadow></value>
    <next>
      <block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">${i}：先觀察 DEMO，再用暫存陣列與函式仿作。</field></block></value></block>
    </next>
  </block>
</xml>`,z={id:`SRF00`,title:`SmartRing 函式仿作任務`,mode:`learning`,type:`smartring`,description:`觀察 LED 動畫效果，嘗試用積木流程重做，並整理成可重複使用的函式。`,level:`國中八年級 / 九年級`,defaultTaskId:`SRF00-01`,tasks:[L(m[`SR-F01`],{id:`SRF00-01`,title:`填滿動畫函式仿作`,taskDescription:`請觀察填滿動畫，讓 LED 由少到多逐步亮起，並嘗試做出相同效果。`,passConditions:[`LED 能依序逐顆亮起。`,`亮起速度可以調整。`,`能把流程整理成可重複使用的函式。`],hints:[`先觀察 DEMO 動畫的順序。`,`可以用迴圈控制 LED 編號。`,`每亮一顆後加一個等待時間。`],challenges:[`改變填滿方向。`,`讓填滿顏色由參數決定。`],starterXml:R({blockType:`smartring_play_fill_animation`,color:`cyan`,speed:100,message:`填滿動畫函式仿作`}),starterMessage:`已載入 SRF00-01：填滿動畫函式仿作。`}),L(m[`SR-F01`],{id:`SRF00-02`,title:`清除動畫函式仿作`,taskDescription:`請觀察清除動畫，讓已亮起的 LED 依序熄滅，並嘗試做出相同效果。`,passConditions:[`LED 能依序逐顆熄滅。`,`清除速度可以調整。`,`能把清除流程整理成函式。`],hints:[`可以先讓全部 LED 亮起，再開始清除。`,`若要反向清除，可以讓 LED 編號由 12 逐步到 1。`,`每清除一顆後加入等待時間。`],challenges:[`只清除前 N 顆或後 N 顆。`,`清除完成後顯示另一種提示顏色。`],starterXml:`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_play_clear_animation" x="40" y="40">
    <value name="SPEED"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
  </block>
</xml>`,starterMessage:`已載入 SRF00-02：清除動畫函式仿作。`}),L(m[`SR-F02`],{id:`SRF00-03`,title:`跑馬燈函式仿作`,taskDescription:`請讓一顆或一段 LED 沿著 SmartRing 移動，做出跑馬燈效果。`,passConditions:[`LED 亮點能依序移動。`,`移動速度可以調整。`,`能重複播放跑馬燈效果。`],hints:[`用位置變數表示目前亮起的 LED 編號。`,`每次移動後，先清除舊位置，再顯示新位置。`,`注意 LED 編號超過 12 時要如何處理。`],challenges:[`做出兩顆一起移動的跑馬燈。`,`讓跑馬燈繞一圈後自動停止。`],starterXml:R({blockType:`smartring_play_marquee_animation`,color:`cyan`,speed:100,times:2,message:`跑馬燈函式仿作`}),starterMessage:`已載入 SRF00-03：跑馬燈函式仿作。`}),L(m[`SR-F02`],{id:`SRF00-04`,title:`左移動畫函式仿作`,taskDescription:`請觀察第 5、6、7、8 顆 LED 形成的四顆連續圖樣如何整段往左移動，並嘗試用 startPosition 與 length 自己寫出左移流程。`,passConditions:[`一開始能呈現第 5、6、7、8 顆 LED 亮起。`,`能讓整段四顆連續圖樣往左移動，而不是只移動單一亮點。`,`能用 startPosition 每次減 1 說明左移流程。`],hints:[`起始圖樣是第 5～8 顆連續亮起。`,`左移一次後應變成第 4～7 顆；再左移一次變成第 3～6 顆。`,`每次更新圖樣後都要顯示暫存陣列。`],challenges:[`讓移動次數由變數控制。`,`移動到邊界後改成清除、停止或循環。`],starterXml:R({blockType:`smartring_play_shift_left_animation`,color:`purple`,speed:80,times:4,message:`左移動畫函式仿作`}),starterMessage:`已載入 SRF00-04：左移動畫函式仿作。`}),L(m[`SR-F02`],{id:`SRF00-05`,title:`右移動畫函式仿作`,taskDescription:`請觀察第 5、6、7、8 顆 LED 形成的四顆連續圖樣如何整段往右移動，並比較右移與左移的 position 更新方向。`,passConditions:[`一開始能呈現第 5、6、7、8 顆 LED 亮起。`,`能讓整段四顆連續圖樣往右移動，而不是只移動單一亮點。`,`能說出右移是 startPosition 每次加 1，左移是每次減 1。`],hints:[`可以先完成左移，再把 startPosition 更新方向改成加 1。`,`右移一次後應變成第 6～9 顆；再右移一次變成第 7～10 顆。`,`每次更新圖樣後都要顯示暫存陣列。`],challenges:[`做出先右移再左移的組合動畫。`,`加入 direction 變數控制移動方向。`],starterXml:R({blockType:`smartring_play_shift_right_animation`,color:`blue`,speed:80,times:4,message:`右移動畫函式仿作`}),starterMessage:`已載入 SRF00-05：右移動畫函式仿作。`}),L(m[`SR-F02`],{id:`SRF00-06`,title:`來回移動動畫函式仿作`,taskDescription:`請讓 LED 圖樣在左右方向之間來回移動，移到邊界後改變方向。`,passConditions:[`LED 圖樣能往一個方向移動。`,`到達邊界後能反向。`,`能連續完成來回移動。`],hints:[`可以用 position 表示位置，用 direction 表示方向。`,`到達邊界時，把方向改成相反。`,`每次移動後更新位置並顯示。`],challenges:[`自訂左右邊界。`,`按下按鈕後才開始來回移動。`],starterXml:R({blockType:`smartring_play_bounce_animation`,color:`green`,speed:80,times:2,message:`來回移動動畫函式仿作`}),starterMessage:`已載入 SRF00-06：來回移動動畫函式仿作。`}),L(m[`SR-F03`],{id:`SRF00-07`,title:`按鈕觸發動畫函式`,taskDescription:`請使用按鈕觸發你設計的 LED 動畫，做出可互動的燈光效果。`,passConditions:[`能偵測至少一個按鈕。`,`按下按鈕時會播放指定動畫。`,`動畫播放後可以再次觸發。`],hints:[`先完成一個動畫函式。`,`再用「如果按鈕被按下」呼叫動畫函式。`,`若連續觸發太快，可以加入等待時間。`],challenges:[`不同按鈕播放不同動畫。`,`加入清除按鈕，停止後清空 LED。`],starterXml:R({blockType:`smartring_play_marquee_animation`,color:`cyan`,speed:100,times:1,message:`按鈕觸發動畫函式`}),starterMessage:`已載入 SRF00-07：按鈕觸發動畫函式。`})]},B=Object.assign({"./JSA00.js":u,"./JSB00.js":f,"./SRA00.js":h,"./SRB00.js":b,"./SRC00.js":D,"./SRF00.js":I});function V(e){return String(e||``).trim().toUpperCase()}function H(e){return V((String(e||``).split(`/`).pop()||``).replace(/\.js$/i,``))}function U(e){return!!(e&&typeof e==`object`&&!Array.isArray(e)&&Array.isArray(e.tasks)&&(e.id||e.code||e.title))}function W(e,t,n){return!e||typeof e!=`object`?{id:`${t}-${String(n+1).padStart(2,`0`)}`,title:`題目 ${n+1}`}:{...e,id:e.id||`${t}-${String(n+1).padStart(2,`0`)}`,title:e.title||e.problemTitle||`題目 ${n+1}`}}function G(e,t){if(!U(e))return null;let n=V(t),r=V(e.code||e.id),i=r||n;if(!i)return null;n&&r&&n!==r&&console.warn(`[Blockly Lab] 課程檔名與課程代碼不一致：檔名 ${n}.js，course.code/id 為 ${r}。建議題庫轉換器輸出時保持一致。`);let a=(e.tasks||[]).map((e,t)=>W(e,i,t)),o=e.defaultTaskId||a[0]?.id||``;return{...e,id:i,code:e.code||i,title:e.title||i,mode:e.mode||`learning`,type:e.type||(i.startsWith(`SR`)?`smartring`:`programming`),tasks:a,defaultTaskId:o,sourceFileCode:n}}function K(e,t){let n=H(t),r=[e?.default,e?.[n],...Object.values(e||{})];for(let e of r){let t=G(e,n);if(t)return t}return null}function q(){let e={};return Object.entries(B).forEach(([t,n])=>{let r=K(n,t);r&&(e[r.id]=r,r.sourceFileCode&&!e[r.sourceFileCode]&&(e[r.sourceFileCode]=r))}),e}var J=q();function Y(e){return J[V(e)]||null}function X(){let e=new Map;return Object.values(J).forEach(t=>{t?.id&&e.set(t.id,t)}),Array.from(e.values()).sort((e,t)=>String(e.id).localeCompare(String(t.id),`en-US`,{numeric:!0}))}function Z(e){let t=[],n=[];return e?(!e.id&&!e.code&&n.push(`缺少 code 或 id。`),e.title||t.push(`缺少課程名稱 title。`),[`programming`,`smartring`].includes(e.type)||t.push(`type 應為 programming 或 smartring，目前為 ${e.type||`空值`}。`),[`learning`,`contest`,`competition`].includes(e.mode)||t.push(`mode 應為 learning 或 contest，目前為 ${e.mode||`空值`}。`),!Array.isArray(e.tasks)||e.tasks.length===0?n.push(`tasks 為空或不是陣列。`):e.tasks.forEach((n,r)=>{let i=n?.id||`第 ${r+1} 題`;n?.id||t.push(`${i} 缺少 id。`),!n?.title&&!n?.problemTitle&&t.push(`${i} 缺少 title。`),e.type===`programming`&&(!Array.isArray(n?.testCases)||n.testCases.length===0?t.push(`${i} 缺少 testCases。`):n.testCases.forEach((e,n)=>{let r=`${i} 測資 ${n+1}`;typeof e?.input!=`string`&&t.push(`${r} 缺少 input。`),typeof e?.expectedOutput!=`string`&&t.push(`${r} 缺少 expectedOutput。`)}))}),n.length>0?{status:`error`,label:`錯誤`,messages:n.concat(t)}:t.length>0?{status:`warning`,label:`警告`,messages:t}:{status:`ok`,label:`正常`,messages:[`課程格式檢查正常。`]}):{status:`error`,label:`錯誤`,messages:[`課程資料不存在。`]}}function Q(e){return e===`programming`?`程式解題`:`SmartRing`}var $=[{category:`SmartRing 課程`,codes:[`SRB00`,`SRA00`,`SRF00`,`SRC00`]},{category:`程式解題課程`,codes:[`JSB00`,`JSA00`]}],ee={SRB00:`SmartRing 基礎互動任務`,SRA00:`SmartRing 陣列任務`,SRF00:`SmartRing 函式仿作任務`,SRC00:`SmartRing 動畫解析密室課程`,JSB00:`Blockly 解題基礎一`,JSA00:`Blockly 解題陣列基礎`};function te(){return $.map(e=>{let t=e.codes.map(e=>`<li><code>${e}</code>${J[e]?.title||ee[e]||`課程內容尚未建立`}</li>`).join(``);return`
        <section class="modal-section">
          <h3>${e.category}</h3>
          <ul class="public-course-list">${t}</ul>
        </section>
      `}).join(``)}function ne(e){return e?.tasks?.length?e.tasks.find(t=>t.id===e.defaultTaskId)||e.tasks[0]:null}function re(e,t){return e?.tasks?.length&&e.tasks.find(e=>e.id===t)||null}export{te as a,o as c,ne as i,s as l,Y as n,re as o,Q as r,Z as s,X as t,l as u};