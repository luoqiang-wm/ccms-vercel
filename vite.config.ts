import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
  },
  plugins: [react()],
})
