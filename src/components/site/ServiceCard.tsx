import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export type SubService = {
  name: string;
  desc: string;
  group?: string;
};

export type Service = {
  num: string;
  slug: string;
  title: string;
  summary: string;
  capabilities: string[];
  icon: ReactNode;
  image: string;
  subServices: SubService[];
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services"
      hash={service.slug}
      className="group relative block overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-basalt/70 via-basalt/10 to-transparent" />
        <span className="absolute top-3 left-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone bg-basalt/70 backdrop-blur px-2 py-1 rounded-sm">
          {service.num}
        </span>
        <div className="absolute top-3 right-3 h-9 w-9 rounded-sm bg-bone/90 backdrop-blur flex items-center justify-center text-foreground">
          {service.icon}
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl text-foreground tracking-tight">{service.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
        <ul className="mt-6 space-y-1.5">
          {service.capabilities.map((c) => (
            <li key={c} className="flex items-start gap-2 text-[0.82rem] text-foreground/75">
              <span className="mt-[0.55rem] h-px w-3 bg-accent shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-accent">
          Explore details
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
