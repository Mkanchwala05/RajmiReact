import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Eyebrow } from "@/components/site/Section";
import bridgesImg from "@/assets/projects/bridges.jpg";
import damsImg from "@/assets/projects/dams.jpg";
import aqueductsImg from "@/assets/projects/aqueducts.jpg";
import canalImg from "@/assets/projects/canal.jpg";
import robImg from "@/assets/projects/rob.jpg";
import superCorridorImg from "@/assets/projects/super-corridor.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rajmi Geo Exploration" },
      {
        name: "description",
        content:
          "A selection of geotechnical investigations, foundation approvals and material testing projects delivered for bridges, dams, aqueducts, canals and highways across Madhya Pradesh and central India.",
      },
      { property: "og:title", content: "Our Projects — Rajmi Geo Exploration" },
      {
        property: "og:description",
        content:
          "Bridges, dams, aqueducts, canals, ROBs and the Indore super corridor — a track record of safe-bearing-capacity studies and foundation approvals.",
      },
      { property: "og:image", content: bridgesImg },
      { name: "twitter:image", content: bridgesImg },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  num: string;
  title: string;
  client: string;
  scope: string;
  image: string;
  tag: string;
};

const PROJECTS: Project[] = [
  {
    num: "01",
    tag: "Bridges · BIS",
    title:
      "Geotechnical investigation of 23 minor and 7 major bridges",
    client: "Highway authorities, Madhya Pradesh",
    scope:
      "Founding-depth studies and safe bearing capacity of soil/rock at the founding stratum for 30 bridge structures, executed and reported as per BIS codes.",
    image: bridgesImg,
  },
  {
    num: "02",
    tag: "Dams · BIS",
    title:
      "Geotechnical investigation of 13 minor and 3 medium dam projects",
    client: "Water Resources Department, MP",
    scope:
      "Foundation investigations to determine founding depth and safe bearing capacity, paired with soil testing and construction-material tests for 16 dam sites.",
    image: damsImg,
  },
  {
    num: "03",
    tag: "Aqueducts · Narmada Phase 4",
    title:
      "Aqueduct investigations & core drilling: Narmada Phase 4",
    client: "Narmada Valley Development Authority",
    scope:
      "Geotechnical investigations for the Nani, Karam, Man, Chiri, Khuj and Ghatwal aqueducts including drilling of core holes from RD 16.175 m to RD 102.500 m.",
    image: aqueductsImg,
  },
  {
    num: "04",
    tag: "Canals & dam stability",
    title:
      "Rising mains, Omkareshwar Right Bank Canal & Sasliya Dam stability",
    client: "Narmada Valley Development Authority",
    scope:
      "Geotechnical investigation for rising mains along the Omkareshwar Right Bank Canal, plus stability analysis of the Sasliya earth-fill dam.",
    image: canalImg,
  },
  {
    num: "05",
    tag: "Railway over-bridges",
    title:
      "ROB & 15 minor bridges: Sausar, Chhindwara, Nagpur",
    client: "Public Works Department & Railways",
    scope:
      "Investigation and foundation approval for a Railway Over Bridge at Sausar (Chhindwara district) and 15 minor bridges along the Nagpur–Chhindwara road and Chhindwara Ring Road.",
    image: robImg,
  },
  {
    num: "06",
    tag: "Urban infrastructure · Indore",
    title:
      "8-lane ROB at the Indore Super Corridor",
    client: "Indore Development Authority",
    scope:
      "Geotechnical investigations and foundation approval for the 8-lane Road Over Bridge at the Super Corridor area, Indore, Madhya Pradesh.",
    image: superCorridorImg,
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-16">
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tight text-foreground text-balance max-w-4xl">
            Foundations approved. Founding strata identified.
          </h1>
          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-lg text-foreground/80 leading-relaxed">
              From bridges and dams to aqueducts, canals and the urban
              corridors of Indore, a representative cross-section of the
              investigations Rajmi Geoexploration has delivered for public and
              private clients across Madhya Pradesh and central India.
            </p>
            <ul className="lg:col-span-5 space-y-2.5 text-sm text-muted-foreground">
              {[
                "30+ bridge foundations cleared",
                "16 dams investigated to BIS",
                "Aqueduct core-drilling Narmada Phase 4",
                "8-lane ROB approval Indore Super Corridor",
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

      {/* Project list */}
      <Section>
        <div className="space-y-20 sm:space-y-28">
          {PROJECTS.map((p, i) => (
            <article
              key={p.num}
              className="grid lg:grid-cols-12 gap-10 items-start"
            >
              <div
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative rounded-sm overflow-hidden grain shadow-elevated">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={832}
                    loading="lazy"
                    className="block w-full h-auto aspect-[16/10] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bone bg-basalt/70 backdrop-blur px-2.5 py-1.5 rounded-sm">
                    {p.num} · {p.tag}
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent">
                  {p.tag}
                </div>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-foreground text-balance">
                  {p.title}
                </h2>
                <div className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Client · {p.client}
                </div>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  {p.scope}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Eyebrow>
              <span className="text-bone/70">Have a similar site?</span>
            </Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-bone text-balance">
              From bore-log to founding-strata approval, we'll get you there.
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
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
