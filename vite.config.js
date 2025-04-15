import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    historyApiFallback: true,
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  },
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
        const filesToCopy = ['robots.txt', 'sitemap.xml', 'sitemap.xsl', '_headers', '.htaccess', '_redirects'];
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
  preview: {
    port: 3000,
    strictPort: true,
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    assetsDir: 'assets',
    // Ensure clean URLs work
    copyPublicDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
