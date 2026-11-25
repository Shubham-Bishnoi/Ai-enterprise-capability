import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Evolve AI" },
      {
        name: "description",
        content: "Talk to Evolve AI about bringing AI into your department, district or programme.",
      },
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
    <div className="bg-paper-2">
      <SiteNav />
      <section className="mx-auto w-[89.33%] max-w-[560px] pb-24 pt-16 md:pt-20">
        <h1 className="type-headline text-center">Let's talk.</h1>
        <p className="type-intro mt-3 text-center text-ink-2">
          Tell us about your department, district or programme.
        </p>
        {sent ? (
          <p className="mt-10 rounded-[18px] bg-white p-8 text-center text-[19px]">
            Thank you. We'll be in touch soon.
          </p>
        ) : (
          <form
            className="mt-10 space-y-3 rounded-[28px] bg-white p-7 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required placeholder="Name" aria-label="Name" className="field" />
            <input required type="email" placeholder="Email" aria-label="Email" className="field" />
            <input
              placeholder="Department or organisation"
              aria-label="Department or organisation"
              className="field"
            />
            <textarea
              required
              rows={5}
              placeholder="What would you like AI to do?"
              aria-label="Message"
              className="field"
            />
            <button className="btn-primary mt-3 w-full">Send</button>
          </form>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
