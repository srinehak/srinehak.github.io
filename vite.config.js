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
        // Copy necessary files after build
        const distDir = path.resolve(__dirname, 'dist');
        const publicDir = path.resolve(__dirname, 'public');
        
        // Copy index.html to 404.html
        fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
        
        // Copy other necessary files
        const filesToCopy = ['robots.txt', 'sitemap.xml', 'sitemap.xsl', '_headers', '.htaccess'];
        filesToCopy.forEach(file => {
          const sourcePath = path.join(publicDir, file);
          const targetPath = path.join(distDir, file);
          if (fs.existsSync(sourcePath)) {
            fs.copyFileSync(sourcePath, targetPath);
          }
        });
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
  base: '',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
