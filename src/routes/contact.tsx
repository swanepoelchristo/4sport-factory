import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Mail, LifeBuoy } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { buildMailto } from "@/lib/mailto";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact 4SPORT — Demo, Sales & Support" },
      {
        name: "description",
        content:
          "Contact 4SPORT for demo bookings, sales enquiries, or support help.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      title: "Book a demo",
      text: "See how 4SPORT helps schools, clubs, coaches, guardians, athletes and umpires stay coordinated.",
      icon: CalendarCheck,
      href: buildMailto("demo", "General"),
      button: "Book demo",
    },
    {
      title: "Talk to sales",
      text: "Ask about school, club, athlete and umpire subscription options.",
      icon: Mail,
      href: buildMailto("sales", "General"),
      button: "Contact sales",
    },
    {
      title: "Get support",
      text: "Need help with access, setup, onboarding or a 4SPORT question? Contact support directly.",
      icon: LifeBuoy,
      href: buildMailto("support", "General"),
      button: "Contact support",
    },
  ];

  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20 text-center">
          <div className="flex justify-center mb-8">
            <div className="rounded-2xl bg-white shadow-glow ring-1 ring-brand/30 p-5 sm:p-7">
              <Logo variant="card" className="h-20 sm:h-28 w-auto" />
            </div>
          </div>

          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
            Contact 4SPORT
          </p>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight">
            Let’s get you to the right team.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you want a demo, pricing information, or support, choose the right path below.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-3xl bg-gradient-surface border border-border p-8 shadow-card hover:border-brand/50 hover:shadow-glow transition-all"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow">
                <card.icon className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                {card.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {card.text}
              </p>

              <span className="inline-flex rounded-xl bg-gradient-brand text-brand-foreground px-4 py-2.5 text-sm font-semibold group-hover:opacity-90 transition">
                {card.button}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
