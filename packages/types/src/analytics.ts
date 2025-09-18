export interface AnalyticsEvent {
  id: string;
  type: 'page_view' | 'click' | 'session_start' | 'session_end';
  path: string;
  timestamp: number;
  metadata?: Record<string, string | number>;
}

export interface AnalyticsData {
  events: AnalyticsEvent[];
  sessionId: string;
  createdAt: number;
  lastUpdated: number;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartData {
  title: string;
  type: 'bar' | 'line' | 'pie';
  data: ChartDataPoint[];
  timeframe?: 'week' | 'month' | 'quarter';
}

export interface AnalyticsMetrics {
  totalPageViews: number;
  uniquePages: number;
  totalClicks: number;
  averageSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  clicksByComponent: Array<{ component: string; clicks: number }>;
}