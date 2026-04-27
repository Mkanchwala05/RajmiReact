import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Eyebrow } from "@/components/site/Section";
import drillingImg from "@/assets/drilling.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Rajmi Geoexploration & Engineering Pvt. Ltd." },
      {
        name: "description",
        content:
          "Join Rajmi Geoexploration in Indore — open roles for geologists, geotechnical engineers, geophysicists, lab chemists, drillers and surveyors across India.",
      },
      { property: "og:title", content: "Careers at Rajmi Geoexploration" },
      {
        property: "og:description",
        content:
          "Field-first geoscience careers across geology, geotechnics, geophysics, hydrology and surveying. Apply from Indore and beyond.",
      },
      { property: "og:image", content: drillingImg },
    ],
  }),
  component: CareersPage,
});

const OPENINGS = [
  {
    title: "Geotechnical Engineer",
    type: "Full-time · Indore",
    exp: "2–5 years",
    desc: "Plan and supervise geotechnical investigations for highways, bridges, dams and high-rise foundations. Author GFRs to IS / IRC standards.",
    skills: ["Soil & rock mechanics", "SPT / SCPT supervision", "Foundation recommendations"],
  },
  {
    title: "Senior Geologist",
    type: "Full-time · Indore / Field",
    exp: "5–10 years",
    desc: "Lead geological mapping, core logging and hydrogeological investigations across Madhya Pradesh and central India.",
    skills: ["Core logging", "Hydrogeology", "JORC reporting"],
  },
  {
    title: "Geophysicist",
    type: "Full-time · Indore",
    exp: "3–7 years",
    desc: "Design and run resistivity (ERT), seismic refraction (SRT/MASW), cross-hole, down-hole and borehole-logging surveys; interpret results for engineering teams.",
    skills: ["ERT", "Seismic refraction & MASW", "Borehole logging"],
  },
  {
    title: "NDT Engineer",
    type: "Full-time · Pan-India travel",
    exp: "2–6 years",
    desc: "Carry out PIT, CHSL, UPV, rebound hammer, half-cell and rebar mapping on bridges, deep foundations and concrete structures.",
    skills: ["PIT / CHSL", "UPV & rebound hammer", "Reinforcement scanning"],
  },
  {
    title: "Laboratory Chemist / Technician",
    type: "Full-time · Indore",
    exp: "1–4 years",
    desc: "Run BIS / ASTM tests on soil, rock, cement, aggregate and concrete; maintain calibration records and QA / QC documentation.",
    skills: ["IS / ASTM testing", "Calibration & QA/QC", "Lab safety"],
  },
  {
    title: "Driller / Rig Operator",
    type: "Full-time · Site-based",
    exp: "3+ years",
    desc: "Operate rotary, auto-SPT and DMC rigs on geotechnical and water-well projects; mentor crew on safe drilling practice.",
    skills: ["Rotary & DMC rigs", "Auto-SPT operation", "Site safety"],
  },
  {
    title: "Land Surveyor (Total Station / GPS / UAV)",
    type: "Full-time · Field",
    exp: "2–6 years",
    desc: "Topographic, cadastral, bathymetric and drone surveys for road, water-resource and urban-planning clients.",
    skills: ["Total Station & DGPS", "UAV photogrammetry", "AutoCAD / Civil 3D"],
  },
  {
    title: "Internships — Geology / Civil",
    type: "6 months · Indore",
    exp: "Final-year students",
    desc: "Field and lab internship across all eight RGEPL disciplines. Mentored by senior practitioners; structured project rotation.",
    skills: ["Field exposure", "Report writing", "Lab procedures"],
  },
];

const APPLY_EMAIL = "careers@rajmigeoexploration.com";

function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-16">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tight text-foreground text-balance max-w-4xl">
            Build your career on solid ground.
          </h1>
          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-lg text-foreground/80 leading-relaxed">
              At RGEPL we hire people who like the field as much as the report. Geologists,
              engineers, geophysicists, drillers and surveyors — work alongside senior practitioners
              on the most demanding projects in central India.
            </p>
            <ul className="lg:col-span-5 space-y-2.5 text-sm text-muted-foreground">
              {[
                "Field-first practice every engineer goes to site",
                "Mentored by 30+ year practitioners",
                "Calibrated kit, BIS / ASTM-grade workflows",
                "Indore HQ with pan-India project rotation",
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

      {/* Why work with us */}
      <Section>
        <Eyebrow>Why RGEPL</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance max-w-3xl">
          A practice that grows people, not just headcount.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Real responsibility, fast",
              d: "Junior engineers run real boreholes and write real reports — under named senior review, not behind a desk.",
            },
            {
              n: "02",
              t: "Many disciplines, one team",
              d: "Move between geotech, geophysics, hydrogeology, NDT and survey work as your interests grow.",
            },
            {
              n: "03",
              t: "Equipment that works",
              d: "Calibrated rigs, modern geophysics kit and a proper laboratory — you spend time doing engineering, not fixing tools.",
            },
          ].map((p) => (
            <div key={p.n}>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                {p.n}
              </div>
              <h3 className="mt-3 font-display text-2xl text-foreground tracking-tight">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Openings */}
      <Section className="bg-card border-y border-border">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <div>
            <Eyebrow>Open positions</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              We're hiring across every discipline.
            </h2>
          </div>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground hidden sm:inline">
            {OPENINGS.length} roles
          </span>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-2 rounded-sm overflow-hidden">
          {OPENINGS.map((o, i) => (
            <article key={o.title} className="bg-background p-7 flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-foreground tracking-tight">{o.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-sm border border-border bg-card px-2 py-1">{o.type}</span>
                <span className="rounded-sm border border-border bg-card px-2 py-1">
                  Exp · {o.exp}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              <ul className="space-y-1.5">
                {o.skills.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[0.82rem] text-foreground/75">
                    <span className="mt-[0.55rem] h-px w-3 bg-accent shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${APPLY_EMAIL}?subject=Application — ${encodeURIComponent(o.title)}`}
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-accent hover:text-accent/80"
              >
                Apply for this role
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* Don't see your role */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>Don't see your role?</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              We always read good CVs. Send yours.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              If you're a geoscientist, engineer or technician who wants to work in a serious field
              practice, get in touch. Tell us what you do best, share a CV and link any reports or
              projects you're proud of.
            </p>
          </div>
          <div className="lg:col-span-5 rounded-sm border border-border bg-card p-7">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              Apply
            </div>
            <div className="mt-3 font-display text-2xl text-foreground tracking-tight break-all">
              {APPLY_EMAIL}
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Subject line: <span className="font-mono">Application — &lt;role&gt;</span>. Attach CV
              (PDF), portfolio if relevant, and your earliest start date.
            </p>
            <a
              href={`mailto:${APPLY_EMAIL}?subject=Application — General`}
              className="mt-5 inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send application
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Eyebrow>
              <span className="text-bone/70">Talk to us</span>
            </Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-bone text-balance">
              Questions about a role?
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
