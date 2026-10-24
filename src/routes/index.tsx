import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Mic, Plus, Sparkles, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import neural from "@/assets/neural.jpg";
import robot from "@/assets/robot.jpg";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { capabilities } from "@/lib/capabilities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolve AI — Every AI capability, in one place" },
      { name: "description", content: "Evolve AI showcases what artificial intelligence can do today: language, vision, video, voice, code, agents and more." },
      { property: "og:title", content: "Evolve AI — Every AI capability, in one place" },
      { property: "og:description", content: "Explore what AI can do today, from reasoning to robotics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const prompts = ["write a launch plan for my startup", "turn this photo into a video", "summarize 200 pages in a minute", "build me a booking app"];

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function useTyped() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  useEffect(() => {
    const full = prompts[i] ?? "";
    const t = setTimeout(() => {
      if (n < full.length) setN(n + 1);
      else { setN(0); setI((i + 1) % prompts.length); }
    }, n < full.length ? 70 : 1800);
    return () => clearTimeout(t);
  }, [i, n]);
  return (prompts[i] ?? "").slice(0, n);
}

function Index() {
  const now = useClock();
  const typed = useTyped();
  const time = now ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }) : "00:00";
  const date = now ? now.toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" }) : "";

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden text-on-image">
        <img src={hero} alt="Person wearing AI glasses looking at the sky" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-foreground/50" />
        <SiteNav onImage />

        <div className="relative z-10 flex flex-col items-center pt-24">
          <div className="glass fade-up rounded-full px-6 py-1.5 text-lg">{date}</div>
          <div className="glass fade-up mt-3 rounded-3xl px-10 font-display text-[22vw] font-extralight leading-none tracking-tighter text-on-image/70 md:text-[12rem]">
            {time}
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 grid max-w-7xl gap-10 px-6 pb-40 md:grid-cols-2 md:px-10">
          <div className="fade-up">
            <h1 className="text-5xl font-medium leading-[1.05] md:text-7xl">Ask once.<br />AI does the rest.</h1>
            <p className="mt-5 max-w-md text-lg text-on-image-muted">
              Evolve AI maps every capability of modern artificial intelligence — and shows you how to put it to work.
            </p>
          </div>
          <div className="glass fade-up hidden self-end justify-self-end rounded-2xl p-5 text-sm md:block md:w-80">
            <div className="flex justify-between text-xs uppercase tracking-wider"><span>Evolve agent</span><span>live</span></div>
            <p className="mt-4 line-through opacity-70">Draft quarterly report</p>
            <p className="text-on-image-muted">done · 14 sources cited</p>
            <div className="my-4 h-px bg-glass-border" />
            <p className="text-on-image-muted">next: design the slides</p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3 px-4">
          <div className="hidden flex-wrap justify-center gap-2 md:flex">
            {["Text", "Image", "Video", "Voice", "Code"].map((c) => (
              <span key={c} className="glass rounded-full px-4 py-1.5 text-sm">{c}</span>
            ))}
          </div>
          <div className="glass flex w-full max-w-xl items-center gap-3 rounded-2xl p-2 pl-4">
            <Plus className="h-4 w-4 opacity-70" />
            <span className="flex-1 truncate">{typed}<span className="animate-pulse">|</span></span>
            <span className="glass rounded-lg p-2"><Mic className="h-4 w-4" /></span>
            <Link to="/capabilities" className="flex items-center gap-1 rounded-xl bg-card px-4 py-2 text-sm font-semibold text-card-foreground">
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="flex items-center gap-2 text-sm text-on-image-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Evolve right now: tracking 12 frontier capabilities
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <h2 className="max-w-3xl text-3xl font-medium md:text-5xl">
          Words, images, video, voice and code — <span className="text-muted-foreground">everything AI can create, live and ready to use.</span>
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl md:row-span-2">
            <img src={neural} alt="Glowing neural network over the ocean" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 top-0 p-6 text-on-image">
              <p className="text-sm opacity-80">Every modality</p>
              <h3 className="mt-1 text-2xl font-medium">One model, many senses.</h3>
            </div>
          </div>

          <div className="rounded-3xl bg-card p-6 shadow-soft md:col-span-2">
            <p className="text-sm text-muted-foreground">One line in</p>
            <h3 className="mt-1 text-2xl font-medium">Describe it once, get finished work back.</h3>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary p-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <span>a 60-second product video with voiceover and captions</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center text-sm">
              {[["Script", "12s"], ["Voice", "4s"], ["Video", "48s"]].map(([k, v]) => (
                <div key={k} className="rounded-xl border p-3"><div className="font-display text-xl">{v}</div><div className="text-muted-foreground">{k}</div></div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img src={robot} alt="Robot hand touching a human hand" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-on-image">
              <h3 className="text-xl font-medium">Robots that learn by watching.</h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-primary p-6 text-primary-foreground">
            <ShieldCheck className="h-8 w-8 text-accent" />
            <div>
              <p className="text-sm opacity-70">Responsible by design</p>
              <h3 className="mt-1 text-xl font-medium">Safe, private and transparent AI.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-medium md:text-4xl">What AI can do today</h2>
          <Link to="/capabilities" className="text-sm font-semibold">See all →</Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.slice(0, 8).map((c, i) => (
            <div key={c.title} className="rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-28 max-w-6xl px-6 md:px-10">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-4xl font-medium md:text-6xl">Evolve with AI.</h2>
          <p className="mx-auto mt-4 max-w-md opacity-70">Tell us what you want to build — we'll show you the AI that does it.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 font-semibold text-card-foreground">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
