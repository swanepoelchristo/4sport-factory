import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Trophy, Flag, CheckCircle2 } from "lucide-react";
import { buildMailto } from "@/lib/mailto";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "4SPORT Pricing — School, Athlete & Umpire Plans" },
      {
        name: "description",
        content:
          "Simple yearly pricing for schools, clubs, athletes and umpires using 4SPORT.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const plans = [
    {
      title: "School / Club License",
      price: "R2,500",
      period: "per year",
      icon: Building2,
      features: [
        "School or club access",
        "Team and fixture visibility",
        "Coach and athlete coordination",
        "Guardian communication support",
      ],
    },
    {
      title: "Athlete Access",
      price: "R150",
      period: "per athlete / year",
      icon: Trophy,
      features: [
        "Athlete profile access",
        "Fixtures and team visibility",
        "Guardian-linked communication",
        "Season participation tracking",
      ],
    },
    {
      title: "Umpire Access",
      price: "R120",
      period: "per umpire / year",
      icon: Flag,
      features: [
        "Umpire profile access",
        "Match appointment visibility",
        "Availability coordination",
        "Fixture and payment workflow support",
      ],
    },
  ];

  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20 text-center">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
            4SPORT pricing
          </p>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight">
            Simple yearly pricing.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built for South African schools, clubs, athletes and umpires who need visibility,
            safety and trackability without admin chaos.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-3xl bg-gradient-surface border border-border p-8 shadow-card"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow">
                <plan.icon className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                {plan.title}
              </h2>

              <div className="mb-6">
                <span className="text-5xl font-display font-black text-foreground">
                  {plan.price}
                </span>
                <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl border border-brand/30 bg-gradient-surface p-8 sm:p-12 text-center shadow-glow">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">
            Need a walkthrough?
          </p>

          <h2 className="text-4xl sm:text-5xl font-display font-black text-foreground mb-6">
            See how 4SPORT fits your school or club.
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Book a demo or speak to the sales team before choosing the right setup.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={buildMailto("demo", "Pricing")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand text-brand-foreground px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-90 transition"
            >
              Book demo <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={buildMailto("sales", "Pricing")}
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
