import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [
      '../../tests/**/*.test.ts',
      '../../tests/**/*.test.tsx',
      'src/**/*.test.ts',
      'src/**/*.test.tsx',
    ],
    exclude: ['e2e/**', 'node_modules/**', '.next/**', 'dist/**', '.git/**'],
  },
});
