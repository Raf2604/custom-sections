import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://raf2604.github.io/custom-sections/
// Local dev uses / — production build uses /custom-sections/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/custom-sections/' : '/',
}))
