import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, ClipboardList, Trophy, Flag, Users } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import schoolImg from "@/assets/watermark-school.jpg";
import coachImg from "@/assets/watermark-coach.jpg";
import athleteImg from "@/assets/watermark-athlete.jpg";
import umpireImg from "@/assets/watermark-umpire.jpg";
import guardianImg from "@/assets/watermark-guardian.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4SPORT — One ecosystem for school sport" },
      { name: "description", content: "Choose your path: 4SPORT for Schools, Coaches, Athletes, Umpires and Guardians." },
    ],
  }),
  component: Index,
});

const personas = [
  { to: "/schools" as const, label: "School", icon: GraduationCap, image: schoolImg, blurb: "Run fixtures, venues, teams and reporting from one command center." },
  { to: "/coaches" as const, label: "Coach", icon: ClipboardList, image: coachImg, blurb: "Plan sessions, track squads and message players in seconds." },
  { to: "/athletes" as const, label: "Athlete", icon: Trophy, image: athleteImg, blurb: "Your fixtures, your stats, your team — all in your pocket." },
  { to: "/umpires" as const, label: "Umpire", icon: Flag, image: umpireImg, blurb: "Accept matches, get paid, manage your availability with zero admin." },
  { to: "/guardians" as const, label: "Guardian", icon: Users, image: guardianImg, blurb: "Know what's on, where it is and how it ended — without chasing." },
];

function Index() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-brand mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-glow" />
            One ecosystem. Five roles. Real sport.
          </div>
          <div className="flex justify-center mb-10">
            <div className="rounded-2xl bg-white shadow-glow ring-1 ring-brand/30 p-5 sm:p-7">
              <Logo variant="card" className="h-24 sm:h-32 w-auto" />
            </div>
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl text-foreground leading-[0.95] tracking-tight max-w-5xl mx-auto">
            School sport, finally <span className="text-gradient-brand">connected.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fixtures, bookings, coaching, officiating, and family updates — running on the same
            platform. Choose your role and step in.
          </p>
        </div>
      </section>

      {/* PERSONA CARDS */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">Pick your path</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Who are you here as?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:border-brand/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.label} watermark`}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 glass rounded-full px-3 py-1.5">
                  <p.icon className="h-3.5 w-3.5 text-brand" />
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider">{p.label}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  4SPORT for {p.label}s
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.blurb}</p>
                <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm group-hover:gap-3 transition-all">
                  Enter as {p.label}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY 4SPORT */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl bg-gradient-surface border border-border shadow-card p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">One platform</p>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-5">
                Built for the people who actually run school sport.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No more spreadsheets, no more group chats, no more chasing umpires the night before.
                4SPORT brings everyone — and everything — onto the same page.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Real-time fixtures and venues",
                "One source of truth for teams and squads",
                "Officials matched and paid automatically",
                "Guardians always informed",
                "Coaches focus on coaching, not admin",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl glass p-4">
                  <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gradient-brand flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-brand-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
