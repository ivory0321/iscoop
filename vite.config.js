import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/iscoop/",
  // base: "/",
  //todo: enable proxy below for local testing(avoid CORS)
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://serpapi.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
