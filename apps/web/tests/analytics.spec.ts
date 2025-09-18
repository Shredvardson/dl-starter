import { test, expect } from '@playwright/test';

test.describe('Analytics Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Enable analytics for tests
    await page.addInitScript(() => {
      localStorage.setItem('NEXT_PUBLIC_ENABLE_ANALYTICS', 'true');
    });
  });

  test('should navigate to analytics dashboard', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Navigate to analytics page
    await page.goto('/dashboard/analytics');
    
    // Should render analytics dashboard
    await expect(page).toHaveURL('/dashboard/analytics');
    await expect(page.getByRole('heading', { name: /analytics/i })).toBeVisible();
  });

  test('should display analytics metrics with feature flag enabled', async ({ page }) => {
    // Set feature flag environment variable simulation
    await page.addInitScript(() => {
      (window as any).__ENV_ANALYTICS_ENABLED__ = true;
    });

    await page.goto('/dashboard/analytics');

    // Should show analytics content when enabled
    await expect(page.getByTestId('analytics-dashboard')).toBeVisible();
    
    // Should display key metrics
    await expect(page.getByTestId('page-views-metric')).toBeVisible();
    await expect(page.getByTestId('unique-pages-metric')).toBeVisible();
    await expect(page.getByTestId('total-clicks-metric')).toBeVisible();
    await expect(page.getByTestId('session-duration-metric')).toBeVisible();
  });

  test('should display disabled message when feature flag is off', async ({ page }) => {
    // Disable analytics
    await page.addInitScript(() => {
      (window as any).__ENV_ANALYTICS_ENABLED__ = false;
    });

    await page.goto('/dashboard/analytics');

    // Should show disabled message
    await expect(page.getByText(/analytics is currently disabled/i)).toBeVisible();
    await expect(page.getByTestId('analytics-dashboard')).not.toBeVisible();
  });

  test('should render charts for analytics data', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).__ENV_ANALYTICS_ENABLED__ = true;
      // Mock some analytics data
      const mockData = {
        events: [
          { id: '1', type: 'page_view', path: '/dashboard', timestamp: Date.now() },
          { id: '2', type: 'page_view', path: '/dashboard/analytics', timestamp: Date.now() },
          { id: '3', type: 'click', path: '/dashboard', timestamp: Date.now(), metadata: { component: 'header' } }
        ],
        sessionId: 'test-session',
        createdAt: Date.now(),
        lastUpdated: Date.now()
      };
      localStorage.setItem('dl-analytics', JSON.stringify(mockData));
    });

    await page.goto('/dashboard/analytics');

    // Should render charts
    await expect(page.getByTestId('page-views-chart')).toBeVisible();
    await expect(page.getByTestId('clicks-chart')).toBeVisible();
    
    // Charts should have data
    const pageViewsChart = page.getByTestId('page-views-chart');
    await expect(pageViewsChart).toContainText('/dashboard');
    await expect(pageViewsChart).toContainText('/dashboard/analytics');
  });

  test('should handle empty analytics data gracefully', async ({ page }) => {
    await page.addInitScript(() => {
      (window as any).__ENV_ANALYTICS_ENABLED__ = true;
      localStorage.removeItem('dl-analytics');
    });

    await page.goto('/dashboard/analytics');

    // Should show zero state
    await expect(page.getByTestId('analytics-dashboard')).toBeVisible();
    await expect(page.getByText(/no analytics data/i)).toBeVisible();
    
    // Metrics should show zeros
    await expect(page.getByTestId('page-views-metric')).toContainText('0');
    await expect(page.getByTestId('unique-pages-metric')).toContainText('0');
  });
});

test.describe('Analytics Tracking', () => {
  test.beforeEach(async ({ page }) => {
    // Enable analytics and clear existing data
    await page.addInitScript(() => {
      (window as any).__ENV_ANALYTICS_ENABLED__ = true;
      localStorage.removeItem('dl-analytics');
    });
  });

  test('should track page views across dashboard navigation', async ({ page }) => {
    // Visit multiple pages
    await page.goto('/dashboard');
    await page.goto('/dashboard/analytics');
    await page.goto('/dashboard');

    // Check that events were tracked
    const analyticsData = await page.evaluate(() => {
      const data = localStorage.getItem('dl-analytics');
      return data ? JSON.parse(data) : null;
    });

    expect(analyticsData).toBeTruthy();
    expect(analyticsData.events).toHaveLength(4); // 3 page views + 1 session start
    
    const pageViewEvents = analyticsData.events.filter((e: any) => e.type === 'page_view');
    expect(pageViewEvents).toHaveLength(3);
    expect(pageViewEvents[0].path).toBe('/dashboard');
    expect(pageViewEvents[1].path).toBe('/dashboard/analytics');
    expect(pageViewEvents[2].path).toBe('/dashboard');
  });

  test('should track click events on components', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Click on a tracked component (assuming we'll add tracking)
    await page.click('[data-analytics="header-help"]');

    // Check that click event was tracked
    const analyticsData = await page.evaluate(() => {
      const data = localStorage.getItem('dl-analytics');
      return data ? JSON.parse(data) : null;
    });

    const clickEvents = analyticsData.events.filter((e: any) => e.type === 'click');
    expect(clickEvents.length).toBeGreaterThan(0);
    expect(clickEvents[0].metadata.component).toBe('header-help');
  });

  test('should not track events when analytics is disabled', async ({ page }) => {
    // Disable analytics
    await page.addInitScript(() => {
      (window as any).__ENV_ANALYTICS_ENABLED__ = false;
    });

    await page.goto('/dashboard');
    await page.goto('/dashboard/analytics');

    // Check that no events were tracked
    const analyticsData = await page.evaluate(() => {
      const data = localStorage.getItem('dl-analytics');
      return data ? JSON.parse(data) : null;
    });

    expect(analyticsData).toBeNull();
  });
});