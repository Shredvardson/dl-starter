'use client';

import { monitoring } from '@/lib/adapters/sentry';
import { appConfig } from '../../../../app.config';

export default function TestMonitoringPage() {
  const testClientError = () => {
    try {
      throw new Error('Test client-side error');
    } catch (error) {
      monitoring.captureException(error as Error, {
        tags: { source: 'test-page', type: 'client' },
        level: 'error',
      });
    }
  };

  const testMessage = () => {
    monitoring.captureMessage('Test monitoring message', {
      tags: { source: 'test-page', type: 'info' },
      level: 'info',
    });
  };

  const testUncaughtError = () => {
    // This will be caught by Sentry automatically
    throw new Error('Uncaught test error');
  };

  if (!appConfig.features.monitoring) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Monitoring Disabled</h1>
        <p>Enable monitoring in app.config.ts to test error reporting.</p>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-2xl font-bold">Test Monitoring</h1>
      <p className="text-muted-foreground">Test error reporting and monitoring functionality.</p>

      <div className="space-y-4">
        <button
          onClick={testClientError}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Test Handled Error
        </button>

        <button
          onClick={testMessage}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Test Info Message
        </button>

        <button
          onClick={testUncaughtError}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Test Uncaught Error
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded">
        <h2 className="font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Set NEXT_PUBLIC_SENTRY_DSN in your .env.local</li>
          <li>Click the buttons above to test error reporting</li>
          <li>Check your Sentry dashboard for captured events</li>
        </ol>
      </div>
    </div>
  );
}
