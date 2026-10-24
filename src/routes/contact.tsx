import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Evolve AI" },
      { name: "description", content: "Talk to Evolve AI about bringing AI capabilities into your work." },
      { property: "og:title", content: "Contact — Evolve AI" },
      { property: "og:description", content: "Start a conversation with Evolve AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative">
      <SiteNav />
      <section className="mx-auto max-w-xl px-6 pb-24 pt-36">
        <h1 className="text-5xl font-medium">Let's talk.</h1>
        <p className="mt-3 text-muted-foreground">Tell us what you'd like AI to do for you.</p>
        {sent ? (
          <p className="mt-10 rounded-2xl bg-card p-6 shadow-soft">Thanks — we'll be in touch soon.</p>
        ) : (
          <form className="mt-10 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Name" className="w-full rounded-xl border bg-card px-4 py-3" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl border bg-card px-4 py-3" />
            <textarea required rows={5} placeholder="What do you want to build?" className="w-full rounded-xl border bg-card px-4 py-3" />
            <button className="w-full rounded-xl bg-primary py-3 font-semibold text-primary-foreground">Send</button>
          </form>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
