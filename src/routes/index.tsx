import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Eyebrow } from "@/components/site/Section";
import { CrossSection } from "@/components/site/CrossSection";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES, SECTORS } from "@/components/site/services-data";
import heroImg from "@/assets/hero-terrain.jpg";
import strataImg from "@/assets/strata.jpg";
import nablCertImg from "@/assets/certifications/nabl-official.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajmi Geo Exploration — Geoscience, Engineering & Drilling" },
      {
        name: "description",
        content:
          "From surface mapping to bedrock — integrated geohydrology, geotechnical, geophysical, surveying, structural, mining and drilling services.",
      },
      { property: "og:title", content: "Rajmi Geo Exploration" },
      {
        property: "og:description",
        content:
          "Integrated geoscience and engineering, from the surface signal to the seventh stratum.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

/** PNGs with real alpha (reprocessed from flat/checker art); no CSS multiply tint */
const CLIENT_LOGO_TRUE_ALPHA = new Set([
  "/logos/egis.png",
  "/logos/meinhardt.png",
  "/logos/tata-power.png",
  "/logos/up-gov.png",
]);

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Stratified geological cliff face at golden hour"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-fade" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.18 0.02 45 / 0.65) 0%, oklch(0.18 0.02 45 / 0.25) 60%, transparent 100%)",
            }}
          />
        </div>

        {/* NABL accreditation badge — top right */}
        <div className="pointer-events-none absolute top-22 right-4 sm:top-26 sm:right-8 z-10 flex w-max max-w-[calc(100vw-2rem)] flex-col items-center text-center">
          <img
            src={nablCertImg}
            alt="Logo of National Accreditation Board for Testing and Calibration Laboratories (NABL) India"
            width={240}
            height={240}
            className="hero-accreditation-mark mx-auto block h-14 w-auto sm:h-20 lg:h-24 object-contain"
          />
          <div className="mt-0.5 flex w-max max-w-full flex-col items-center gap-0 font-mono uppercase leading-none tracking-[0.1em] text-bone/80 drop-shadow-sm [font-size:clamp(0.26rem,2.2vw,0.45rem)] sm:tracking-[0.14em]">
            <span className="block whitespace-nowrap">Certificate number: TC-9848</span>
            <span className="block whitespace-nowrap">NABL - ISO/IEC 17025</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-32 sm:pt-36 sm:pb-44 min-h-[88vh] flex flex-col justify-end">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 mb-7">
              <span className="h-px w-10 bg-accent" />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-bone/85">
                Est. 2008 · Geoscience & Engineering
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-bone text-balance">
              From the surface signal to the seventh&nbsp;stratum.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-bone/80 leading-relaxed">
              Rajmi Geo Exploration delivers integrated geohydrology, geotechnical and geophysical
              services grounded in field rigour, refined by data.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Explore services
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-bone/30 bg-bone/5 backdrop-blur px-6 py-3.5 text-sm font-medium text-bone hover:bg-bone/10 transition-colors"
              >
                Request a survey
              </Link>
            </div>
          </div>

          {/* coordinates strip */}
          <div className="mt-20 hidden sm:flex items-end justify-between font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone/70">
            <span>N 13°04′48″ · E 80°16′12″</span>
            <span>Datum WGS-84</span>
            <span>Scroll to descend ↓</span>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {[
            { k: "16+", v: "Years in the field" },
            { k: "320", v: "Projects delivered" },
            { k: "11", v: "States & emirates" },
            { k: "8", v: "Geoscience disciplines" },
          ].map((s) => (
            <div key={s.v} className="flex flex-col">
              <div className="font-display text-4xl sm:text-5xl text-foreground tracking-tight">
                {s.k}
              </div>
              <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-section */}
      <Section>
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Interactive cross-section</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              Every project begins with a clear picture of what lies beneath.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Hover any stratum to reveal the methods, instruments and analyses we deploy at that
              depth. Each layer is a chapter in a project's subsurface story.
            </p>
          </div>
        </div>
        <CrossSection />
      </Section>

      {/* Services */}
      <Section className="bg-card border-y border-border">
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Disciplines</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              Integrated disciplines under one roof.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              View all services
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </Section>

      {/* Method strip with strata image */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Eyebrow>Field method</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              Rigorous in the field. Precise in the lab. Honest in the report.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We treat every borehole as a proposition to be tested. Our workflows pair traditional
              geological observation with calibrated instrumentation and reproducible analysis so
              the numbers we deliver are the numbers a structure can be built upon.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Calibrated instruments, traceable standards",
                "Independent QA / QC on every dataset",
                "Reports written for engineers, not archives",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-sm overflow-hidden shadow-elevated grain">
              <img
                src={strataImg}
                alt="Macro photograph of stratified sandstone layers"
                width={1600}
                height={1000}
                loading="lazy"
                className="block w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bone bg-basalt/70 backdrop-blur px-2.5 py-1.5 rounded-sm">
                Sandstone · Sample 1147-A
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sectors served */}
      <Section className="bg-card border-y border-border">
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Sectors served</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              Many industries. One subsurface discipline.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              From solar farms in Maharashtra to off-shore foundations on the Konkan coast, our work
              threads through the projects that move power, water, people and goods across the
              country.
            </p>
          </div>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 rounded-sm overflow-hidden">
          {SECTORS.map((s) => (
            <div
              key={s.name}
              className="bg-card p-7 flex flex-col gap-3 hover:bg-background transition-colors"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-accent">
                {s.tag}
              </span>
              <div className="font-display text-xl text-foreground tracking-tight">{s.name}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why choose us / standards */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Why teams choose Rajmi</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              Compliance, capacity and care built into every deliverable.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We work to the codes your engineers already trust IS, ASTM, IRC and MoRTH and
              document every step so reports are defensible from tender through commissioning.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              {
                t: "Compliance assurance",
                d: "Reports written to IS codes, ASTM standards and global benchmarks. Trusted by government and private clients.",
              },
              {
                t: "End-to-end management",
                d: "Single point of accountability from feasibility and field investigation to laboratory testing and final report.",
              },
              {
                t: "Time & cost efficiency",
                d: "Optimised workflows, mobilised crews and modern instrumentation translate to faster turnaround and fewer surprises.",
              },
              {
                t: "Pan-India reach",
                d: "Operations across metros and remote sites, with mobile labs and certified field crews ready to deploy.",
              },
            ].map((p) => (
              <div key={p.t} className="border border-border bg-card rounded-sm p-7">
                <div className="font-display text-lg text-foreground tracking-tight">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* standards strip */}
        <div className="mt-14 border-t border-border pt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
            Conforms to
          </span>
          {[
            "IS 1892",
            "IS 2720",
            "ASTM D1586",
            "ASTM D2487",
            "IRC 37",
            "MoRTH",
            "BIS 10500",
            "JORC",
          ].map((c) => (
            <span
              key={c}
              className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* Certifications & NABL */}
      <Section className="bg-card border-y border-border">
        <div className="mb-12 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Certifications & accreditations</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              An NABL-accredited laboratory you can audit.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Our laboratory operates under NABL accreditation (ISO/IEC 17025) (Certificate TC-9848)
              for testing in soil, rock, aggregate, cement and water backed by ISO 9001 quality
              management and BIS-aligned field workflows.
            </p>
          </div>
        </div>

        {/* NABL feature block */}
        <div className="mb-10 grid lg:grid-cols-12 gap-0 rounded-sm border border-border bg-background overflow-hidden">
          <div className="lg:col-span-5 relative bg-card flex items-center justify-center p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-border">
            <img
              src={nablCertImg}
              alt="Logo of National Accreditation Board for Testing and Calibration Laboratories (NABL) India"
              width={448}
              height={448}
              loading="lazy"
              className="block w-full max-w-[10rem] h-auto object-contain sm:max-w-[11rem]"
            />
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-accent">
              National Accreditation · ISO/IEC 17025
            </div>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-foreground text-balance">
              NABL-accredited testing laboratory
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              RGEPL operates an NABL-accredited laboratory for testing in soil, rock, aggregate,
              cement and water with traceable calibration, documented chain-of-custody and
              audit-ready test reports for every commission.
            </p>
            <dl className="mt-6 max-w-md space-y-3">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Certificate number
                </dt>
                <dd className="mt-1 text-muted-foreground leading-relaxed">TC-9848</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Scope
                </dt>
                <dd className="mt-1 text-muted-foreground leading-relaxed">
                  In testing soil, rock, aggregate, cement, water.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 rounded-sm overflow-hidden">
          {[
            {
              tag: "Accreditation",
              title: "NABL",
              sub: ["ISO/IEC 17025", "Certificate TC-9848"] as const,
              desc: "In testing soil, rock, aggregate, cement, water.",
            },
            {
              tag: "Quality system",
              title: "ISO 9001:2015",
              sub: "Quality Management",
              desc: "Documented procedures, calibration logs, audit-ready reports.",
            },
            {
              tag: "Standards",
              title: "BIS · IS Codes",
              sub: "Bureau of Indian Standards",
              desc: "Tests conducted to IS 1892, IS 2720, IS 4031, IS 383 and family.",
            },
            {
              tag: "Registration",
              title: "MSME · Udyam",
              sub: "Govt. of India",
              desc: "Registered MSME — eligible for tendering with PSUs and govt. departments.",
            },
          ].map((c) => (
            <div key={c.title} className="bg-card p-7 flex flex-col gap-3">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-accent">
                {c.tag}
              </div>
              <div className="flex items-baseline gap-3">
                <div className="h-12 w-12 rounded-full border-2 border-accent/30 bg-background grid place-items-center">
                  <svg
                    className="h-5 w-5 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="font-display text-2xl text-foreground tracking-tight">{c.title}</div>
              <div
                className={`font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground ${
                  Array.isArray(c.sub) ? "flex flex-col gap-0.5" : ""
                }`}
              >
                {Array.isArray(c.sub) ? c.sub.map((line) => <span key={line}>{line}</span>) : c.sub}
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* standards strip moved here */}
        <div className="mt-12 border-t border-border pt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
            Reports conform to
          </span>
          {[
            "IS 1892",
            "IS 2720",
            "ASTM D1586",
            "ASTM D2487",
            "IRC 37",
            "MoRTH",
            "BIS 10500",
            "JORC",
          ].map((c) => (
            <span
              key={c}
              className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* Trusted clients */}
      <Section className="bg-bone">
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <Eyebrow>Our trusted clients in India</Eyebrow>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
            Partnered with leading companies and institutions.
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            RGEPL is proud to have partnered with leading companies and institutions across India
            for soil investigation, foundation engineering and geotechnical consultancy. Our clients
            trust us for quality, innovation and reliable project delivery.
          </p>
        </div>

        {(() => {
          type ClientLogo = { name: string; src: string };
          const rowOne: ClientLogo[] = [
            { name: "Adani Green Energy", src: "/logos/adani-green.jpeg" },
            { name: "Defence & allied organization", src: "/logos/afwho.png" },
            { name: "AKVN Indore", src: "/logos/akvn-indore.png" },
            { name: "Bharat Petroleum", src: "/logos/bharat-petroleum.png" },
            { name: "BVG", src: "/logos/bvg.jpeg" },
            { name: "Egis", src: "/logos/egis.png" },
            { name: "Genesys", src: "/logos/genesys.jpeg" },
            { name: "IIT Indore", src: "/logos/iit-indore.png" },
            { name: "India Post", src: "/logos/india-post.png" },
            { name: "Indian Railways", src: "/logos/indian-railways.png" },
            { name: "John Deere", src: "/logos/john-deer.png" },
            { name: "KTIPL", src: "/logos/ktipl.png" },
            { name: "Larsen & Toubro", src: "/logos/larsen-toubro.jpeg" },
            { name: "MEIL", src: "/logos/meil.jpeg" },
          ];
          const rowTwo: ClientLogo[] = [
            { name: "Meinhardt Group", src: "/logos/meinhardt.png" },
            { name: "MP Public Service Commission", src: "/logos/mppsc.png" },
            { name: "Madhya Pradesh PWD", src: "/logos/mppwd.jpeg" },
            { name: "Madhya Pradesh PWD", src: "/logos/mp-pwd.png" },
            { name: "MPRDC", src: "/logos/mprdc.jpeg" },
            { name: "MSEDCL", src: "/logos/msedc.jpeg" },
            { name: "NHAI", src: "/logos/nhai.jpeg" },
            { name: "RRCAT", src: "/logos/rrcat.png" },
            { name: "Sadbhav Engineering", src: "/logos/sadbhav-engineering.png" },
            { name: "Suzlon", src: "/logos/suzlon.png" },
            { name: "Tata Power", src: "/logos/tata-power.png" },
            { name: "Tesla Transformers", src: "/logos/tesla-transformers.png" },
            { name: "Uttar Pradesh Government", src: "/logos/up-gov.png" },
            { name: "Vikram Solar", src: "/logos/vikram-solar.png" },
            { name: "Welspun", src: "/logos/welspun.png" },
          ];

          const Row = ({ items, dir }: { items: ClientLogo[]; dir: "left" | "right" }) => (
            <div className="marquee-mask overflow-hidden">
              <div
                className={`flex w-max gap-4 ${dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
              >
                {[...items, ...items].map((c, i) => (
                  <div
                    key={`${c.src}-${c.name}-${i}`}
                    className="shrink-0 flex h-24 w-24 items-center justify-center overflow-hidden rounded-sm bg-bone p-1.5 sm:h-32 sm:w-32 isolate"
                  >
                    {/* isolate + bg-bone: blend runs against a real bone layer (marquee `transform` otherwise breaks mix-blend against the page) */}
                    <img
                      src={c.src}
                      alt={c.name}
                      width={128}
                      height={128}
                      className={cn(
                        "block h-full w-full min-h-0 min-w-0 object-contain object-center",
                        !CLIENT_LOGO_TRUE_ALPHA.has(c.src) && "mix-blend-multiply",
                      )}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          );

          return (
            <div className="space-y-4">
              <Row items={rowOne} dir="left" />
              <Row items={rowTwo} dir="right" />
            </div>
          );
        })()}

        <p className="mt-8 text-center font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          And 40+ more across PSUs, infrastructure, energy and water sectors
        </p>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Eyebrow>
              <span className="text-bone/70">Start a project</span>
            </Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-bone text-balance">
              Tell us about your site. We'll bring the instruments.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Request a survey
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
