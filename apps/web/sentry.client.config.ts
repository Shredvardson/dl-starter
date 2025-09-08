// This file configures the initialization of Sentry on the browser.
import * as Sentry from "@sentry/nextjs";
import { env } from "@/lib/env";

if (env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: env.NEXT_PUBLIC_SENTRY_DSN,

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true,

    integrations: [
      // Replay may only be enabled for the client-side
      Sentry.replayIntegration(),
      // User feedback integration
      Sentry.feedbackIntegration({
        colorScheme: "system",
        autoInject: false, // We'll control when to show it
      }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    tracesSampleRate: env.NODE_ENV === "production" ? 0.1 : 1.0,

    // Set session replay sample rates
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // Filter out development/local errors
    beforeSend(event, hint) {
      // Don't send events for localhost in development
      if (env.NODE_ENV === "development" && 
          (event.request?.url?.includes("localhost") || 
           event.request?.url?.includes("127.0.0.1"))) {
        return null;
      }
      return event;
    },
  });
}