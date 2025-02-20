import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensure correct imports
    },
  },
  build: {
    rollupOptions: {
      external: ['/src/main.tsx'], // Explicitly marking main.tsx as external
    },
  },
  base: './', // Fixes asset loading issues on Netlify
});
