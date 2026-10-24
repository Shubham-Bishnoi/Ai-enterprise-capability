import { Link } from "@tanstack/react-router";

export function SiteNav({ onImage = false }: { onImage?: boolean }) {
  const text = onImage ? "text-on-image" : "text-foreground";
  return (
    <header className={`absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 md:px-10 ${text}`}>
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <span className="inline-block h-4 w-4 rounded-full border-2 border-current border-r-transparent" />
          evolve<span className="text-accent">.</span>ai
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link to="/capabilities" className="opacity-90 hover:opacity-100">Capabilities</Link>
          <Link to="/contact" className="opacity-90 hover:opacity-100">Contact</Link>
        </nav>
      </div>
      <Link to="/contact" className="rounded-xl bg-card px-5 py-2.5 text-sm font-semibold text-card-foreground shadow-soft transition hover:-translate-y-0.5">
        Talk to Evolve
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-10 text-sm text-muted-foreground md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row">
        <span className="font-display font-semibold text-foreground">evolve.ai</span>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/capabilities">Capabilities</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <span>© {new Date().getFullYear()} Evolve AI</span>
      </div>
    </footer>
  );
}
