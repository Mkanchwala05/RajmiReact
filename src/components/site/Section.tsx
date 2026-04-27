import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-5">
      <span className="h-px w-8 bg-accent" />
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}
