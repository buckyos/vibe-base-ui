import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
    include: [
      'packages/**/*.{test,spec}.{js,ts,tsx}',
      'apps/**/*.{test,spec}.{js,ts,tsx}'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        'build/',
        '.next/',
        'storybook-static/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/vite.config.*'
      ]
    }
  }
})