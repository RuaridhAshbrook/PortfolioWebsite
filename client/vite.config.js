import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In development, requests to /api are forwarded to the Express server,
// so the React app never needs to know the server's address.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5001',
    },
  },
})
