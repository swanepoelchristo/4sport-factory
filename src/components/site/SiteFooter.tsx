import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <Logo className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground max-w-md">
              Real sports admin. Real fixtures. Real people. 4SPORT brings schools, coaches,
              athletes, umpires and guardians into one place.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/schools" className="text-muted-foreground hover:text-foreground">Schools</Link>
            <Link to="/coaches" className="text-muted-foreground hover:text-foreground">Coaches</Link>
            <Link to="/clubs" className="text-muted-foreground hover:text-foreground">Clubs</Link>
            <Link to="/athletes" className="text-muted-foreground hover:text-foreground">Athletes</Link>
            <Link to="/umpires" className="text-muted-foreground hover:text-foreground">Umpires</Link>
            <Link to="/guardians" className="text-muted-foreground hover:text-foreground">Guardians</Link>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © 2026 4SPORT. All rights reserved.
            <span className="mx-2 text-border">·</span>
            <span className="text-muted-foreground/80">
              Created by <span className="text-foreground/90 font-medium">Milk Box AI</span>
            </span>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
