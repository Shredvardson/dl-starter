import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'apps/web/tests',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  use: { baseURL: 'http://localhost:3000' },
  webServer: {
    command: 'pnpm -C apps/web start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
