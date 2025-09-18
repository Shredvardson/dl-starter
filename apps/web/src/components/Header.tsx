export function Header() {
  return (
    <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-[hsl(var(--text))]">
              Your Starter
            </span>
          </div>
          <nav className="flex items-center space-x-4">
            <a
              href="https://github.com/Shredvardson/dl-starter/wiki/Home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors"
              data-testid="help-link"
            >
              Help
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}