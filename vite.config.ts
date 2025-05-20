import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), tailwindcss(), vueDevTools()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
