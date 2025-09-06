export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center p-8 bg-[hsl(var(--bg))]">
      <div>
        <h1 className="text-2xl font-semibold text-[hsl(var(--text))] mb-2">404</h1>
        <p className="text-[hsl(var(--text-muted))]">This page could not be found.</p>
      </div>
    </main>
  );
}