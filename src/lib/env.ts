// src/lib/env.ts
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * IMPORTANT:
 * - Anything needed in the browser must start with NEXT_PUBLIC_ and be listed under `client`.
 * - Server secrets go under `server` and are NEVER available to the client bundle.
 * - Start optional now; mark as .min(1) / .url() later when you wire a service.
 */
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

    // Databases / vendors (optional for now; make required per project)
    DATABASE_URL: z.string().url().optional(),
    SUPABASE_URL: z.string().url().optional(),
    SUPABASE_ANON_KEY: z.string().min(1).optional(),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
  },

  client: {
    NEXT_PUBLIC_APP_NAME: z.string().default('DL Starter'),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,

    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  },

  /**
   * Treat empty strings as "unset" so CI/Vercel don't pass validation with "".
   * Leave validation ON in CI; everything here is optional right now anyway.
   */
  emptyStringAsUndefined: true,
});
