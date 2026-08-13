import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // 用相對路徑而不是寫死repo名稱：這份範本會被複製成任意repo名稱（例如Blockly-Start-V2），
  // 寫死絕對路徑會讓複製出來的網站資源全部404、整個頁面沒有樣式。相對路徑不管部署在
  // 哪個子路徑底下都能正確載入，不需要每個複製的人自己改這個設定。
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manage: resolve(__dirname, 'manage.html'),
      },
    },
  },
});