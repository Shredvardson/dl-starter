import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: 'e2e',
  timeout: 30_000,
  retries: isCI ? 2 : 0,
  use: { baseURL: 'http://localhost:3000' },
  webServer: {
    command: isCI ? 'pnpm start' : 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !isCI,
    timeout: 120_000,
  },
});
