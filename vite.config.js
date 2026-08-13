import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Blockly-Start/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manage: resolve(__dirname, 'manage.html'),
      },
    },
  },
});