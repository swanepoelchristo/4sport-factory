import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { buildMailto } from "@/lib/mailto";

const links = [
  { to: "/schools", label: "Schools" },
  { to: "/coaches", label: "Coaches" },
  { to: "/clubs", label: "Clubs" },
  { to: "/athletes", label: "Athletes" },
  { to: "/umpires", label: "Umpires" },
  { to: "/guardians", label: "Guardians" },
  { to: "/sports", label: "Sports" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="shrink-0" aria-label="4SPORT home">
            <Logo className="h-9 w-auto sm:h-10" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                activeProps={{
                  className:
                    "px-3 py-2 rounded-md text-sm font-semibold text-foreground bg-white/5",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={buildMailto("demo", "General")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Book demo
            </a>

            <a
              href={buildMailto("sales", "General")}
              className="px-4 py-2 rounded-lg bg-gradient-brand text-brand-foreground text-sm font-semibold shadow-glow hover:opacity-90 transition-opacity"
            >
              Get started
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/60 px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
                activeProps={{
                  className:
                    "block px-3 py-2 rounded-md text-sm font-semibold text-foreground bg-white/5",
                }}
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-2 flex gap-2">
              <a
                href={buildMailto("demo", "General")}
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2 rounded-lg border border-border text-sm font-medium"
              >
                Book demo
              </a>

              <a
                href={buildMailto("sales", "General")}
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-brand text-brand-foreground text-sm font-semibold"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
