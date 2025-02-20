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
      input: 'index.html', // Ensures Vite starts from index.html
    },
  },
  base: './', // Ensures correct asset paths
});
