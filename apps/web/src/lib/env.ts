// src/lib/env.ts
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const isProduction = process.env.NODE_ENV === 'production';
const zBool = z.coerce.boolean();

/**
 * IMPORTANT:
 * - Anything needed in the browser must start with NEXT_PUBLIC_ and be listed under `client`.
 * - Server secrets go under `server` and are NEVER available to the client bundle.
 * - Start optional now; mark as .min(1) / .url() later when you wire a service.
 */
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

    // Sentry server-side configuration (optional for now)
    SENTRY_DSN: z.string().url().optional(),
    SENTRY_ORG: z.string().optional(),
    SENTRY_PROJECT: z.string().optional(),

    // Database (optional for now; make required per project)
    DATABASE_URL: z.string().url().optional(),
    
    // Stripe server configuration
    STRIPE_SECRET_KEY: z.string().optional().refine(val => !isProduction || !val?.startsWith('sk_test_'), 'Test secret key forbidden in production'),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
    
    // Feature toggles
    AUTH_ENABLED: zBool.default(false),
  },

  client: {
    NEXT_PUBLIC_APP_NAME: z.string().default('DL Starter'),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
    NEXT_PUBLIC_FLAG_BETA_FEATURE: zBool.default(false),
    
    // Supabase (public - needed for browser client)
    NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10).optional(),
    
    // Stripe public key
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional().refine(val => !isProduction || !val?.startsWith('pk_test_'), 'Test publishable key forbidden in production'),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,

    DATABASE_URL: process.env.DATABASE_URL,
    
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    AUTH_ENABLED: process.env.AUTH_ENABLED,

    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_FLAG_BETA_FEATURE: process.env.NEXT_PUBLIC_FLAG_BETA_FEATURE,
    
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },

  /**
   * Treat empty strings as "unset" so CI/Vercel don't pass validation with "".
   * Leave validation ON in CI; everything here is optional right now anyway.
   */
  emptyStringAsUndefined: true,
});
