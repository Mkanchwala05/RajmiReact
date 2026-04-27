import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Eyebrow } from "@/components/site/Section";
import { CrossSection } from "@/components/site/CrossSection";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES } from "@/components/site/services-data";
import type { SubService } from "@/components/site/ServiceCard";
import { getDetailImage } from "@/components/site/detail-images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rajmi Geo Exploration Pvt. Ltd." },
      {
        name: "description",
        content:
          "Geotechnical investigation, lab testing, pile load testing, NDT, pavement testing, geophysical testing, land survey and piling — to IS, ASTM, IRC and MoRTH standards.",
      },
      { property: "og:title", content: "Services — Rajmi Geo Exploration" },
      {
        property: "og:description",
        content:
          "Integrated geoscience, engineering and exploration services from the surface signal to the seventh stratum.",
      },
    ],
  }),
  component: ServicesPage,
});

function groupSubServices(sub: SubService[]): { group: string; items: SubService[] }[] {
  const map = new Map<string, SubService[]>();
  sub.forEach((s) => {
    const g = s.group ?? "";
    if (!map.has(g)) map.set(g, []);
    map.get(g)!.push(s);
  });
  return Array.from(map.entries()).map(([group, items]) => ({ group, items }));
}

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-16">
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tight text-foreground text-balance max-w-4xl">
            An integrated geoscience practice, end to end.
          </h1>
          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-lg text-foreground/80 leading-relaxed">
              From soil investigation and laboratory testing to geophysical imaging, drilling,
              structural NDT and piling, Rajmi Geo Exploration Pvt. Ltd. delivers the full
              subsurface stack under one accountable practice. Every report is written to IS, ASTM,
              IRC and MoRTH standards, and every dataset travels with its calibration certificate.
            </p>
            <ul className="lg:col-span-5 space-y-2.5 text-sm text-muted-foreground">
              {[
                "Geotechnical Factual Reports (GFR)",
                "Pile load & non-destructive testing",
                "Pavement design & subgrade evaluation",
                "Aquifer studies & well-field design",
                "JORC-compliant resource reporting",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service overview cards (link to sections below) */}
      <Section>
        <Eyebrow>Service index</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground mb-12 text-balance">
          Jump to any discipline.
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </Section>

      {/* Detailed sections per service */}
      {SERVICES.map((service) => {
        const grouped = groupSubServices(service.subServices);
        const hasGroups = grouped.length > 1 || (grouped[0]?.group ?? "") !== "";

        return (
          <section
            key={service.slug}
            id={service.slug}
            className="border-t border-border scroll-mt-24"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
              {/* Section header */}
              <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-accent">
                      {service.num} · Discipline
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
                    {service.title}
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.summary}
                  </p>
                </div>
              </div>

              {/* Hero image for the discipline */}
              <div className="relative rounded-sm overflow-hidden grain shadow-elevated mb-12">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="block w-full h-auto aspect-[21/9] object-cover"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bone bg-basalt/70 backdrop-blur px-2.5 py-1.5 rounded-sm">
                  {service.num} · {service.title}
                </div>
              </div>

              {/* Capabilities chips */}
              <div className="mb-12 flex flex-wrap gap-2">
                {service.capabilities.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {c}
                  </span>
                ))}
              </div>

              {/* Explore details */}
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl tracking-tight text-foreground">
                  Explore details
                </h3>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {service.subServices.length} services
                </span>
              </div>
              {grouped.map((g) => (
                <div key={g.group || "default"} className="mt-10 first:mt-0">
                  {hasGroups && g.group && (
                    <div className="mb-6 flex items-center gap-3">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                        {g.group} tests
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="font-mono text-[0.7rem] text-muted-foreground">
                        {g.items.length}
                      </span>
                    </div>
                  )}
                  <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden">
                    {g.items.map((sub, i) => {
                      const img = getDetailImage(service.slug, sub.name);
                      return (
                        <div
                          key={`${sub.name}-${i}`}
                          className="bg-card flex flex-col hover:bg-background transition-colors overflow-hidden"
                        >
                          <div className="aspect-[16/10] overflow-hidden bg-secondary">
                            <img
                              src={img}
                              alt={sub.name}
                              loading="lazy"
                              width={800}
                              height={500}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                            />
                          </div>
                          <div className="p-7 flex flex-col gap-2.5">
                            <div className="flex items-baseline gap-3">
                              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <h3 className="font-display text-base text-foreground tracking-tight leading-snug">
                                {sub.name}
                              </h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {sub.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Cross-section visual */}
      <Section className="bg-card border-y border-border">
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              The subsurface, layer by layer.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Each project follows the same disciplined descent, surface reconnaissance to bedrock
              interpretation, adapted to the unique geology of your site.
            </p>
          </div>
        </div>
        <CrossSection />
      </Section>

      <Footer />
    </div>
  );
}
