import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://camdenwebster.com', // Update with your actual domain
  integrations: [
    react(),
    tailwind({
      // Apply Tailwind base styles to Astro components
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  },
});
