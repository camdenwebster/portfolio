import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.md'],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      // This handles the Buffer polyfill
      buffer: 'buffer/',
    },
  },
  define: {
    // This ensures Buffer is available globally
    global: 'globalThis',
  },
});
