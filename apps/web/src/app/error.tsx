'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <main className="min-h-dvh grid place-items-center p-8 bg-[hsl(var(--bg))]">
          <div className="max-w-xl">
            <h1 className="text-2xl font-semibold text-[hsl(var(--text))] mb-3">
              Something went wrong
            </h1>
            <pre className="text-sm text-[hsl(var(--text-muted))] whitespace-pre-wrap">
              {error.message}
            </pre>
          </div>
        </main>
      </body>
    </html>
  );
}
