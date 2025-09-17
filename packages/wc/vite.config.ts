import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3002
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'umd'],
      name: 'VibeBaseUI'
    }
  }
})