// src/lib/adapters/sentry.ts
import * as Sentry from "@sentry/nextjs";
import { env } from "@/lib/env";

export interface ErrorContext {
  user?: { id: string; email?: string };
  tags?: Record<string, string | number | boolean>;
  level?: "error" | "warning" | "info" | "debug";
  extra?: Record<string, unknown>;
}

export interface MonitoringAdapter {
  captureException: (error: Error | string, context?: ErrorContext) => void;
  captureMessage: (message: string, context?: ErrorContext) => void;
  setUser: (user: { id: string; email?: string }) => void;
  addBreadcrumb: (message: string, category?: string, level?: string) => void;
  startTransaction: (name: string, op?: string) => any;
}

class SentryAdapter implements MonitoringAdapter {
  captureException(error: Error | string, context?: ErrorContext) {
    Sentry.withScope((scope) => {
      if (context?.user) scope.setUser(context.user);
      if (context?.tags) scope.setTags(context.tags);
      if (context?.level) scope.setLevel(context.level);
      if (context?.extra) scope.setExtras(context.extra);
      
      if (typeof error === "string") {
        Sentry.captureException(new Error(error));
      } else {
        Sentry.captureException(error);
      }
    });
  }

  captureMessage(message: string, context?: ErrorContext) {
    Sentry.withScope((scope) => {
      if (context?.user) scope.setUser(context.user);
      if (context?.tags) scope.setTags(context.tags);
      if (context?.level) scope.setLevel(context.level);
      if (context?.extra) scope.setExtras(context.extra);
      
      Sentry.captureMessage(message, context?.level || "info");
    });
  }

  setUser(user: { id: string; email?: string }) {
    Sentry.setUser(user);
  }

  addBreadcrumb(message: string, category = "custom", level = "info") {
    Sentry.addBreadcrumb({
      message,
      category,
      level: level as any,
      timestamp: Date.now() / 1000,
    });
  }

  startTransaction(name: string, op = "navigation") {
    return Sentry.startSpan({ name, op }, () => {});
  }
}

// Default no-op adapter for when monitoring is disabled
class NoOpAdapter implements MonitoringAdapter {
  captureException() {}
  captureMessage() {}
  setUser() {}
  addBreadcrumb() {}
  startTransaction() {
    return { finish: () => {} };
  }
}

export const monitoring: MonitoringAdapter = 
  (env.SENTRY_DSN || env.NEXT_PUBLIC_SENTRY_DSN)
    ? new SentryAdapter()
    : new NoOpAdapter();