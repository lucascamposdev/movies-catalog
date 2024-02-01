import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'types': "/src/types",
      '@utils': "/src/utils",
      '@components': "/src/components",
      '@context': "/src/context",
      '@pages': "/src/pages",
      '@styles': "/src/styles",
      '@hooks': "/src/hooks",
      '@services': "/src/services",
    },
  },
})
