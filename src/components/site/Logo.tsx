export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-brand/40 blur-md" aria-hidden />
        <div className="relative h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
          <span className="text-brand-foreground font-display font-black text-sm">4</span>
        </div>
      </div>
      <span className="font-display font-black tracking-tight text-foreground text-xl">
        4SPORT
      </span>
    </div>
  );
}
