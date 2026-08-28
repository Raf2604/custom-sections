import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://raf2604.github.io/custom-sections/
// Local dev still works at http://localhost:5173/custom-sections/
const repoBase = '/custom-sections/'

export default defineConfig({
  plugins: [react()],
  base: repoBase,
})
