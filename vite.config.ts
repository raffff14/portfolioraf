import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolioraf/',  // Must match your repository name
  build: {
    outDir: 'docs',  // Output to docs folder
    emptyOutDir: true,  // Clean the output directory before build
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
