// This file configures the initialization of Sentry on the server.
import * as Sentry from '@sentry/nextjs';
import { env } from '@/lib/env';

if (env.SENTRY_DSN || env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: env.SENTRY_DSN || env.NEXT_PUBLIC_SENTRY_DSN,

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    tracesSampleRate: env.NODE_ENV === 'production' ? 0.1 : 1.0,

    // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: process.env.NODE_ENV === 'development',

    // Filter out development noise
    beforeSend(event, hint) {
      // Don't send events for expected development errors
      if (env.NODE_ENV === 'development') {
        // Filter out common development errors
        const error = hint.originalException;
        if (error instanceof Error) {
          if (
            error.message.includes('ENOTFOUND') ||
            error.message.includes('connect ECONNREFUSED')
          ) {
            return null;
          }
        }
      }
      return event;
    },
  });
}
