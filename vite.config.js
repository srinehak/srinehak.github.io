import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    // Handle client-side routing
    historyApiFallback: true
  },
  preview: {
    // Handle client-side routing in preview mode
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    // Generate 404.html for GitHub Pages SPA support
    assetsDir: 'assets',
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
