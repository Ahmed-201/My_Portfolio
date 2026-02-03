import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @tailwindcss/vite plugin HATA DEN

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.png', '**/*.jpeg', '**/*.svg']
})
