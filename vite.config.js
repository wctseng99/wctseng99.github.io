import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/react-icons/.test(id)) return 'icons';
          if (/@mapbox[\\/]vector-tile|[\\/]pbf[\\/]/.test(id)) return 'map-vendor';
          if (/[\\/]d3-/.test(id)) return 'd3-vendor';
          if (/react|scheduler/.test(id)) return 'react-vendor';
        },
      },
    },
  },
})
