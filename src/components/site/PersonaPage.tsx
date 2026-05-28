import { ArrowRight, Check, Eye, ShieldCheck, type LucideIcon } from "lucide-react";
import { Logo } from "./Logo";
import { PersonaVideoSection, type PersonaVideo } from "./PersonaVideoSection";
import { ContactStrip } from "./ContactStrip";
import { buildMailto, ctaKind } from "@/lib/mailto";

export type PersonaConfig = {
  persona: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  watermark: string;
  pains: { icon: LucideIcon; title: string; body: string }[];
  steps: { title: string; body: string }[];
  features: { icon: LucideIcon; title: string; body: string }[];
  pillars?: { icon: LucideIcon; title: string; body: string }[];
  focusLine?: string;
  video?: PersonaVideo & { heading?: string; description?: string };
};

export function PersonaPage({ config }: { config: PersonaConfig }) {
  const primaryHref = buildMailto(ctaKind(config.primaryCta), config.persona);
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <img
          src={config.watermark}
          alt=""
          aria-hidden
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-brand mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-glow" />
              {config.eyebrow}
            </div>

            <div className="mb-6 flex items-center gap-3">
              <Logo className="h-12 w-auto sm:h-14" />
              <span className="text-muted-foreground text-sm">for {config.persona}</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.95] tracking-tight">
              {config.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {config.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand text-brand-foreground px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-90 transition"
              >
                {config.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition"
              >
                {config.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">What we fix</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Built for the way {config.persona.toLowerCase()} actually work.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.pains.map((p) => (
            <div key={p.title} className="rounded-2xl glass p-6 hover:border-brand/40 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-brand/15 text-brand flex items-center justify-center mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-gradient-surface border border-border p-8 sm:p-12 shadow-card">
          <div className="max-w-2xl mb-12">
            <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">Three steps. That's it.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="text-7xl font-display font-black text-gradient-brand leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKABILITY & SAFETY */}
      {config.pillars && config.pillars.length > 0 && (
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mb-10">
            <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3 inline-flex items-center gap-2">
              <Eye className="h-4 w-4" /> Eyes on the game
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
              Trackability, safety and visibility — built in.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              {config.focusLine ?? `So ${config.persona.toLowerCase()} can focus on sport, not admin.`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {config.pillars.map((p) => (
              <div key={p.title} className="rounded-2xl glass p-6 hover:border-brand/40 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-brand/15 text-brand flex items-center justify-center mb-4">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-brand">
            <ShieldCheck className="h-4 w-4" /> Focus on sport. Not admin.
          </div>
        </section>
      )}

      {/* VIDEO */}
      <PersonaVideoSection
        persona={config.persona}
        heading={config.video?.heading}
        description={config.video?.description}
        video={config.video}
      />

      {/* FEATURES */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Everything {config.persona.toLowerCase()} need. Nothing they don't.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.features.map((f) => (
            <div key={f.title} className="rounded-2xl glass p-6 flex gap-4 hover:border-brand/40 transition-colors">
              <div className="shrink-0 h-11 w-11 rounded-xl bg-brand/15 text-brand flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
          <img src={config.watermark} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/95" aria-hidden />
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative p-10 sm:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
              Ready to run {config.persona.toLowerCase()}-grade sport?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the 4SPORT ecosystem and connect every part of your sporting program.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={primaryHref} className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand text-brand-foreground px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-90 transition">
                {config.primaryCta} <ArrowRight className="h-4 w-4" />
              </a>
              <a href={buildMailto("support", config.persona)} className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition">
                <Check className="h-4 w-4" /> Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip persona={config.persona} />
    </main>
  );
}
