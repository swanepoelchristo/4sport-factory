import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Logo className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground max-w-md">
              Real sports admin. Real fixtures. Real people. 4SPORT brings schools,
              coaches, clubs, athletes, umpires and guardians into one place.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
              Explore
            </p>
            <Link to="/schools" className="text-muted-foreground hover:text-foreground">Schools</Link>
            <Link to="/coaches" className="text-muted-foreground hover:text-foreground">Coaches</Link>
            <Link to="/clubs" className="text-muted-foreground hover:text-foreground">Clubs</Link>
            <Link to="/athletes" className="text-muted-foreground hover:text-foreground">Athletes</Link>
            <Link to="/umpires" className="text-muted-foreground hover:text-foreground">Umpires</Link>
            <Link to="/guardians" className="text-muted-foreground hover:text-foreground">Guardians</Link>
            <Link to="/sports" className="text-muted-foreground hover:text-foreground">Sports</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">
              Contact
            </p>
            <a href="mailto:info@4sport.co.za" className="text-muted-foreground hover:text-foreground">
              Demo: info@4sport.co.za
            </a>
            <a href="mailto:sales@4sport.co.za" className="text-muted-foreground hover:text-foreground">
              Sales: sales@4sport.co.za
            </a>
            <a href="mailto:support@4sport.co.za" className="text-muted-foreground hover:text-foreground">
              Support: support@4sport.co.za
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © 2026 4SPORT. All rights reserved.
            <span className="mx-2 text-border">·</span>
            <span className="text-muted-foreground/80">
              Created by <span className="text-foreground/90 font-medium">Milk Box AI</span>
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <Link to="/terms-and-conditions" className="hover:text-foreground">Terms</Link>
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/refund-cancellation-policy" className="hover:text-foreground">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
