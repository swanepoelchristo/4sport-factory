import { CalendarCheck, Mail, LifeBuoy } from "lucide-react";
import { buildMailto } from "@/lib/mailto";

export function ContactStrip({ persona }: { persona: string }) {
  const buttons = [
    {
      label: "Book demo",
      icon: CalendarCheck,
      href: buildMailto("demo", persona),
      variant: "primary" as const,
    },
    {
      label: "Sales",
      icon: Mail,
      href: buildMailto("sales", persona),
      variant: "ghost" as const,
    },
    {
      label: "Support",
      icon: LifeBuoy,
      href: buildMailto("support", persona),
      variant: "ghost" as const,
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <div className="rounded-2xl glass border border-border/60 px-6 py-5 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-1">Get in touch</p>
          <p className="text-sm text-muted-foreground">
            Reach the 4SPORT team directly — demo, sales, or support.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              className={
                b.variant === "primary"
                  ? "inline-flex items-center gap-2 rounded-xl bg-gradient-brand text-brand-foreground px-4 py-2.5 text-sm font-semibold shadow-glow hover:opacity-90 transition"
                  : "inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10 transition"
              }
            >
              <b.icon className="h-4 w-4" />
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
