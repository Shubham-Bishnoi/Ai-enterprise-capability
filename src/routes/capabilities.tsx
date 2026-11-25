import { createFileRoute, Link } from "@tanstack/react-router";
import robot from "@/assets/robot.jpg";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { capabilities } from "@/lib/capabilities";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "AI Capabilities — Evolve AI" },
      {
        name: "description",
        content:
          "A complete map of what AI can do today: language, vision, generation, voice, code, agents, science and robotics.",
      },
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
    <div>
      <SiteNav />
      <section className="section-wide pt-16 pb-14 md:pt-20">
        <h1 className="type-headline max-w-[760px]">
          Capabilities. <span className="text-ink-2">Everything AI can do, today.</span>
        </h1>
      </section>
      <section className="section-wide pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <div key={c.title} className="card-shadow rounded-[18px] bg-white p-8">
              <span className="type-caption font-semibold text-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="type-card-title mt-3">{c.title}</h2>
              <p className="mt-2 text-ink-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-wide pb-24">
        <div className="grid overflow-hidden rounded-[28px] bg-night text-white md:grid-cols-2">
          <div className="flex flex-col justify-center p-10 md:p-14">
            <h2 className="type-section">Put them to work for India.</h2>
            <p className="type-intro mt-4 text-[#a1a1a6]">
              See how these capabilities become proposals for fifteen national priorities.
            </p>
            <div className="mt-8">
              <Link to="/proposals" className="btn-primary">
                Explore proposals
              </Link>
            </div>
          </div>
          <img
            src={robot}
            alt="A robot hand reaching toward a human hand"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full max-h-[480px] w-full object-cover"
          />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
