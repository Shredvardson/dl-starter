export default function AnalyticsStubPage() {
  return (
    <div className="min-h-dvh p-8 bg-[hsl(var(--bg))]">
      <h1 className="text-2xl font-semibold text-[hsl(var(--text))] mb-6">Analytics</h1>
      
      <div className="bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-[var(--radius-lg)] p-8">
        <div className="text-center">
          <h2 className="text-lg font-medium text-[hsl(var(--text))] mb-4">
            📊 Analytics Example (Template)
          </h2>
          <p className="text-[hsl(var(--text-muted))] mb-6">
            This analytics module is disabled by default in the starter template.
            It serves as a working example of the spec-driven development workflow.
          </p>
          
          <div className="bg-[hsl(var(--muted))] rounded-[var(--radius)] p-4 mb-6">
            <p className="text-sm text-[hsl(var(--text-muted))]">
              <strong>To enable:</strong> Set <code>NEXT_PUBLIC_ENABLE_ANALYTICS=true</code> in your <code>.env.local</code>
            </p>
          </div>

          <div className="text-left bg-[hsl(var(--bg))] border border-[hsl(var(--border))] rounded-[var(--radius)] p-4">
            <h3 className="font-medium text-[hsl(var(--text))] mb-2">Example includes:</h3>
            <ul className="text-sm text-[hsl(var(--text-muted))] space-y-1">
              <li>• Complete React analytics provider and hooks</li>
              <li>• SVG-based chart components</li>
              <li>• Local storage data persistence</li>
              <li>• Sentry telemetry integration</li>
              <li>• Comprehensive e2e test suite</li>
              <li>• Feature flag architecture</li>
            </ul>
          </div>

          <p className="text-xs text-[hsl(var(--text-muted))] mt-6">
            See <code>examples/analytics/</code> for the full implementation
          </p>
        </div>
      </div>
    </div>
  );
}