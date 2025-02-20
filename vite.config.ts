import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensures correct import paths
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Ensure Vite starts from index.html
    },
  },
  base: './', // Fixes asset loading issues on Netlify
});
