// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ally: resolve(__dirname, 'ally.html'),
        ekam: resolve(__dirname, 'ekam.html'),
        ryan: resolve(__dirname, 'ryan.html'),
        victor: resolve(__dirname, 'victor.html'),
      },
    },
  },
});
