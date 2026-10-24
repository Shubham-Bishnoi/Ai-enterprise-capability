import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { capabilities } from "@/lib/capabilities";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "AI Capabilities — Evolve AI" },
      { name: "description", content: "A complete map of what AI can do today: language, vision, generation, voice, code, agents, science and robotics." },
      { property: "og:title", content: "AI Capabilities — Evolve AI" },
      { property: "og:description", content: "Every major AI capability explained simply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="relative">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:px-10">
        <p className="text-sm text-accent">Capabilities</p>
        <h1 className="mt-2 max-w-3xl text-5xl font-medium md:text-6xl">Everything AI can do, today.</h1>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <div key={c.title} className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-xl font-medium">{c.title}</h2>
              <p className="mt-2 text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
