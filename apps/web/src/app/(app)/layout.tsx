import { AnalyticsProvider } from '@/components/AnalyticsProvider';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnalyticsProvider>
      {children}
    </AnalyticsProvider>
  );
}