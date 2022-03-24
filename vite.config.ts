import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        lang: 'ja',
        name: 'らんだまいざ',
        background_color: '#ffffff',
        theme_color: '#ca9ebb',
        display: 'standalone',
        orientation: 'landscape',
        icons: [
          {
            src: 'favicon.png',
            sizes: '256x256',
          },
        ],
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
