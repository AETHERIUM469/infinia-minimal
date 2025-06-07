import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',              // Ensure this is set
  publicDir: 'public',    // This tells Vite where to find index.html
})
