import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Eye,
  ShieldCheck,
  Users,
  MessageSquare,
  ClipboardCheck,
  Calendar,
  Trophy,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { buildMailto } from "@/lib/mailto";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 4SPORT — Eyes on the game" },
      {
        name: "description",
        content:
          "4SPORT helps schools, clubs, coaches, athletes, guardians and umpires reduce admin chaos and focus on sport.",
      },
      { property: "og:title", content: "About 4SPORT" },
      {
        property: "og:description",
        content: "Focus on sport. Not admin.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pains = [
    "Coaches drowning in admin instead of coaching.",
    "Guardians chasing fixtures, venues and results.",
    "Schools relying on spreadsheets and scattered messages.",
    "Umpires managing availability and bookings manually.",
    "Athletes disconnected from fixtures, teams and updates.",
  ];

  const solves = [
    { icon: Eye, title: "Visibility", body: "Everyone sees the same fixture, team and event information." },
    { icon: ShieldCheck, title: "Safety", body: "Consent, medical info and key details stay connected to the athlete." },
    { icon: ClipboardCheck, title: "Accountability", body: "Fixtures, teams, officials and actions are easier to track." },
    { icon: MessageSquare, title: "Communication", body: "Less noise, fewer missed messages, clearer updates." },
    { icon: Calendar, title: "Trackability", body: "Sport operations become easier to follow, review and improve." },
    { icon: Trophy, title: "Focus", body: "Coaches, athletes and schools get back to the actual game." },
  ];

  const users = ["Schools", "Clubs", "Coaches", "Athletes", "Guardians", "Umpires"];

  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-brand mb-8">
            <Eye className="h-3.5 w-3.5" />
            Eyes on the game.
          </div>

          <div className="flex justify-center mb-10">
            <div className="rounded-2xl bg-white shadow-glow ring-1 ring-brand/30 p-5 sm:p-7">
              <Logo variant="card" className="h-24 sm:h-32 w-auto" />
            </div>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl text-foreground leading-[0.95] tracking-tight max-w-5xl mx-auto">
            Focus on sport.{" "}
            <span className="text-gradient-brand">Not admin.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            4SPORT exists because school and club sport should not be buried under spreadsheets,
            WhatsApp chaos, missing information and last-minute panic.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-surface border border-border shadow-card p-8 sm:p-12">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
            Why 4SPORT exists
          </p>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-8">
            Sport is already hard. Admin should not be the opponent.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pains.map((pain) => (
              <div key={pain} className="flex items-start gap-3 rounded-xl glass p-4">
                <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gradient-brand flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-brand-foreground" />
                </div>
                <span className="text-foreground font-medium">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-2xl mb-10">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
            What 4SPORT solves
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            One source of truth for the people who make sport happen.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solves.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-card border border-border p-6 shadow-card"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow">
                <item.icon className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-surface border border-border shadow-card p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
                Who uses 4SPORT
              </p>

              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-5">
                Built for the full sport ecosystem.
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                4SPORT connects the people who plan, play, support, manage and officiate sport.
                Everyone gets the right information at the right time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {users.map((user) => (
                <span
                  key={user}
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground"
                >
                  <Users className="h-4 w-4 text-brand" />
                  {user}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl border border-brand/30 bg-gradient-surface p-8 sm:p-12 text-center shadow-glow">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
            The mission
          </p>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-foreground mb-6">
            Eyes on the game.
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            4SPORT helps schools and clubs reduce admin chaos, improve visibility and give sport
            the operational backbone it deserves.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={buildMailto("demo", "General")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand text-brand-foreground px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-90 transition"
            >
              Book demo <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={buildMailto("sales", "General")}
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
