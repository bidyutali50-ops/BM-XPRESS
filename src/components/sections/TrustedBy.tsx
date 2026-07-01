import { trustedBy } from "@/lib/data";

export function TrustedBy() {
  const doubled = [...trustedBy, ...trustedBy];

  return (
    <section className="border-y border-border/70 bg-ink-950/60 py-10">
      <div className="container">
        <p className="mb-6 text-center text-[11px] uppercase tracking-widest text-muted-foreground">
          Trusted by teams shipping at scale
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track gap-16 py-2">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-display text-2xl font-semibold text-foreground/30 transition-colors duration-300 hover:text-primary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
