import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    federation({
      name: 'main_app',
      remotes: {
        music_library: 'https://music-library-microfrontend-1usk.vercel.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
