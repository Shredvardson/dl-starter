// This file configures the initialization of Sentry for edge runtime.
import * as Sentry from '@sentry/nextjs';
import { env } from '@/lib/env';

if (env.SENTRY_DSN || env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: env.SENTRY_DSN || env.NEXT_PUBLIC_SENTRY_DSN,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    tracesSampleRate: env.NODE_ENV === 'production' ? 0.1 : 1.0,
  });
}
