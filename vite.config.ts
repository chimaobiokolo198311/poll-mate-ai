import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  esbuild: {
    // Skip TypeScript checking during build
    tsconfigRaw: {
      compilerOptions: {
        skipLibCheck: true,
        noEmit: true
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})