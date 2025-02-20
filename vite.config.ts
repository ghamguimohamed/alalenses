import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure correct import paths
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
export default {
  build: {
    rollupOptions: {
      external: ['/src/main.tsx']
    }
  }
}
