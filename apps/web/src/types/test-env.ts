// Test environment types for analytics mocking
import type { AnalyticsData } from '@shared/types';

declare global {
  interface Window {
    __ENV_ANALYTICS_ENABLED__?: boolean;
    __MOCK_ANALYTICS_DATA__?: AnalyticsData;
  }
}

export {};