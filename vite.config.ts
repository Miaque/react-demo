import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      '/socket.io': {
        target: 'ws://localhost:8080',
        changeOrigin: true,
        ws: true,
        rewriteWsOrigin: true
      }
    },
    allowedHosts: ['c75c-120-41-66-245.ngrok-free.app', 'localhost']
  }
})
