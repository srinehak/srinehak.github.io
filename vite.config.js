import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'handle-html-files',
      closeBundle: () => {
        // Copy index.html to 404.html after build
        const indexPath = path.resolve(__dirname, 'dist/index.html');
        const notFoundPath = path.resolve(__dirname, 'dist/404.html');
        fs.copyFileSync(indexPath, notFoundPath);
      }
    }
  ],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    historyApiFallback: true
  },
  preview: {
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    assetsDir: 'assets',
    // Ensure clean URLs work
    copyPublicDir: true
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
