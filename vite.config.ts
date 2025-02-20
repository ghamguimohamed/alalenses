import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Use this instead of `path.resolve`
    },
  },
  build: {
    rollupOptions: {
      // Remove `external` option unless you're explicitly using it for dependencies
    },
  },
  base: './', // This ensures correct asset paths on Netlify
});
