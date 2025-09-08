import { Button } from '@/components/Button';

export default function Marketing() {
  return (
    <main className="min-h-dvh grid place-items-center p-8 bg-[hsl(var(--bg))]">
      <section className="max-w-2xl space-y-4 bg-[hsl(var(--surface))] rounded-[var(--radius-lg)] p-8 border border-[hsl(var(--border))]">
        <h1 className="text-3xl font-semibold text-[hsl(var(--text))]">Your Starter</h1>
        <p className="text-[hsl(var(--text-muted))]">
          Lightweight, LLM-friendly baseline. Add features by recipe.
        </p>
        <div className="flex gap-3">
          <Button>Get Started</Button>
          <Button variant="ghost">Learn more</Button>
        </div>
      </section>
    </main>
  );
}
