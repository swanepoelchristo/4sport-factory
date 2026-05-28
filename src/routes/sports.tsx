import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ContactStrip } from "@/components/site/ContactStrip";
import rugby from "@/assets/sport-rugby.jpg";
import hockey from "@/assets/sport-hockey.jpg";
import cricket from "@/assets/sport-cricket.jpg";
import athletics from "@/assets/sport-athletics.jpg";
import netball from "@/assets/sport-netball.jpg";
import swimming from "@/assets/sport-swimming.jpg";

type SportCard = {
  name: string;
  to?: "/rugby" | "/hockey" | "/cricket" | "/athletics" | "/netball" | "/swimming";
  image?: string;
  tagline?: string;
};

const liveSports: SportCard[] = [
  { name: "Rugby", to: "/rugby", image: rugby, tagline: "Eyes on every away game." },
  { name: "Hockey", to: "/hockey", image: hockey, tagline: "Tournament-grade coordination." },
  { name: "Cricket", to: "/cricket", image: cricket, tagline: "From nets to national tours." },
  { name: "Athletics", to: "/athletics", image: athletics, tagline: "Every athlete. Every event." },
  { name: "Netball", to: "/netball", image: netball, tagline: "Every team. Every guardian." },
  { name: "Swimming", to: "/swimming", image: swimming, tagline: "Gala day, without the chaos." },
];

const upcomingSports = [
  "Soccer",
  "Tennis",
  "Water Polo",
  "Basketball",
  "Squash",
  "Golf",
  "Cycling",
  "Rowing",
  "Padel",
  "Badminton",
  "Volleyball",
  "Karate",
  "Judo",
  "Taekwondo",
  "Boxing",
  "Wrestling",
  "Cross Country",
  "Triathlon",
];

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports we power — 4SPORT" },
      { name: "description", content: "Every sport in the 4SPORT ecosystem — from rugby and cricket to swimming and athletics." },
      { property: "og:title", content: "Sports we power — 4SPORT" },
      { property: "og:description", content: "One platform. Every sport. Eyes on the game." },
    ],
  }),
  component: SportsPage,
});

function SportsPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-brand mb-6">
              <Eye className="h-3.5 w-3.5" /> Eyes on every sport
            </div>
            <div className="mb-6 flex items-center gap-3">
              <Logo className="h-12 w-auto sm:h-14" />
              <span className="text-muted-foreground text-sm">sports directory</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight">
              One platform. Every sport.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              4SPORT powers the operational backbone of school and club sport — so coaches, athletes, guardians and officials can focus on the game, not the admin.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-brand">
              <ShieldCheck className="h-4 w-4" /> Focus on sport. Not admin.
            </div>
          </div>
        </div>
      </section>

      {/* LIVE SPORTS GRID */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-10">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">Live sport pages</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Sport-specific. Built for the real season.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {liveSports.map((s) => (
            <Link
              key={s.name}
              to={s.to!}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:border-brand/50 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image!}
                  alt={`4SPORT for ${s.name}`}
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" aria-hidden />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.tagline}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-gradient-brand text-brand-foreground px-3 py-2 text-xs font-semibold shadow-glow shrink-0">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* COMING SOON */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-gradient-surface border border-border p-8 sm:p-12 shadow-card">
          <div className="max-w-2xl mb-8">
            <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">More sports — coming soon</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              The 4SPORT ecosystem is growing.
            </h2>
            <p className="mt-3 text-muted-foreground">
              These sports already live inside the 4SPORT operational platform — dedicated story pages are on the way.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {upcomingSports.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand/70" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip persona="Sports" />
    </main>
  );
}
