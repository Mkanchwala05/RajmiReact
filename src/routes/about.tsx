import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Eyebrow } from "@/components/site/Section";
import drillingImg from "@/assets/drilling.jpg";
import surveyImg from "@/assets/survey.jpg";
import founderImg from "@/assets/team/founder.jpg";
import directorImg from "@/assets/team/director.jpg";
import geophysicistImg from "@/assets/team/geophysicist.jpg";
import hydrologistImg from "@/assets/team/hydrologist.jpg";
import adminDirectorImg from "@/assets/team/admin-director.jpg";
import architectDirectorImg from "@/assets/team/architect-director.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rajmi Geoexploration & Engineering Pvt. Ltd." },
      {
        name: "description",
        content:
          "Rajmi Geoexploration & Engineering Pvt. Ltd. (RGEPL) is a one-stop firm for Geology, Mining, Hydrology, Geohydrology, Geotechnics, Geophysics and water-quality investigations across India. Operating since 2007.",
      },
      { property: "og:title", content: "About Rajmi Geoexploration & Engineering" },
      {
        property: "og:description",
        content:
          "A one-stop geoscience and engineering firm — geology, mining, hydrology, geotechnics, geophysics and water-quality investigations since 2007.",
      },
      { property: "og:image", content: drillingImg },
    ],
  }),
  component: AboutPage,
});

// Linked-in icon
function LinkedInIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.356V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-16">
          <Eyebrow>About RGEPL</Eyebrow>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tight text-foreground text-balance max-w-4xl">
            A one-stop geoscience practice for India.
          </h1>
          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-6 text-lg text-foreground/80 leading-relaxed">
              At Rajmi Geoexploration &amp; Engineering Pvt. Ltd. (RGEPL), we feel privileged to be
              the single firm where every kind of geoscience investigation can be commissioned at
              one place from geological surveys to mining studies, from geotechnical drilling to
              water-quality testing.
            </p>
            <p className="lg:col-span-6 text-base text-muted-foreground leading-relaxed">
              Operating since 2007, we offer cutting-edge solutions for geology, mining, hydrology,
              geohydrology, geotechnics, geophysics, water-quality testing, artificial recharge
              studies and project reporting. Our group of professionals brings deep field experience
              and intensive expertise in the most modern technologies of each sphere and we commit
              to accurate, timely and secure fulfilment of every order.
            </p>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {[
            { k: "2007", v: "Operating since" },
            { k: "8", v: "Geoscience disciplines" },
            { k: "60+", v: "Projects delivered" },
            { k: "40+", v: "Institutional clients" },
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

      {/* Image split */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="relative rounded-sm overflow-hidden grain shadow-elevated">
            <img
              src={drillingImg}
              alt="Drilling rig silhouetted against a dusk sky"
              width={1600}
              height={1000}
              loading="lazy"
              className="block w-full h-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bone bg-basalt/70 backdrop-blur px-2.5 py-1.5 rounded-sm">
              Field rig
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden grain shadow-elevated">
            <img
              src={surveyImg}
              alt="Topographic contours rendered in warm tones"
              width={1600}
              height={1000}
              loading="lazy"
              className="block w-full h-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bone bg-basalt/70 backdrop-blur px-2.5 py-1.5 rounded-sm">
              Survey grid · 5 m contours
            </div>
          </div>
        </div>
      </Section>

      {/* Your Solution Starts Here */}
      <Section className="bg-card border-y border-border">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Your solution starts here</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              Reliable, well-planned and personalised, the way RGEPL has worked since day one.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Since we started, we have offered customers good and well-planned services. We give
              personalised solutions that suit your needs and get the job done on time at affordable
              prices. Our open business strategy, customer-focus approach, easy payment terms and
              fair pricing have helped us win the confidence of many customers.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              {
                t: "Reliable services",
                d: "A two-decade record of delivering investigations our clients can defend in front of regulators and design engineers.",
              },
              {
                t: "Affordable pricing",
                d: "Transparent, fair pricing with no surprises and easy payment options for long projects.",
              },
              {
                t: "Timely execution",
                d: "Mobilised crews and well-maintained equipment mean schedules we can actually meet.",
              },
              {
                t: "Strict quality norms",
                d: "Strict adherence to BIS and IS standards, with documented chain-of-custody for every sample.",
              },
              {
                t: "Customisation options",
                d: "Every site is different. We tailor scope, depth and methodology to your project's risk profile.",
              },
              {
                t: "Experienced team",
                d: "Senior geologists, geophysicists, geotechnical and water-resources engineers in-house.",
              },
            ].map((p) => (
              <div key={p.t} className="border border-border bg-background rounded-sm p-7">
                <div className="font-display text-lg text-foreground tracking-tight">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Operating principles */}
      <Section>
        <Eyebrow>Operating principles</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance max-w-3xl">
          Three things we refuse to compromise.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Field truth over desk fiction",
              d: "Every interpretation is anchored in observed evidence boreholes, samples, instrument traces. We don't infer what we can measure.",
            },
            {
              n: "02",
              t: "Instruments under calibration",
              d: "Each piece of field kit travels with its certificate. We log drift, document corrections and publish the chain of custody for every dataset.",
            },
            {
              n: "03",
              t: "Reports that build things",
              d: "We write for the engineer who will design the foundation, not the archive. Recommendations are specific, defensible and actionable.",
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

      {/* Leadership */}
      <Section className="bg-card border-y border-border">
        <div className="mb-12 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              The leaders who sign every report.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              RGEPL is led by a working team of geologists, engineers and architects the founder,
              directors and discipline heads who built the practice and still run its field
              operations.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Mr. Khuzaima Najmi",
              role: "Founder & Managing Director | Chief Geologist",
              bio: "Founder of the practice. Worked with NVDA & WRD for 27 years and has been associated with geotechnical, geological, geophysical and hydrogeological investigations for 40 years.",
              edu: "M.Sc. (Geology)",
              img: founderImg,
              linkedin: "https://www.linkedin.com/in/khuzaima-najmi-38a2244a//",
            },
            {
              name: "Mrs. Rajni Hemant Mahiyar",
              role: "Director · Administration & Finance",
              bio: "Leads general administration, finance and accounting for the practice.",
              edu: "M.A. (Sociology)",
              img: adminDirectorImg,
              linkedin: "https://www.linkedin.com/in/rajni-mahiyar/",
            },
            {
              name: "Mr. Madhur Mahiyar",
              role: "Head · Structural engineering",
              bio: "Heads structural engineering leading design, analysis and review across foundations, bridges and superstructure projects.",
              edu: "MS (Structural Engineering)",
              img: geophysicistImg,
              linkedin: "https://www.linkedin.com/in/madhur-mahiyar/",
            },
            // {
            //   name: "Mr. Abbas Najmi",
            //   role: "Head · Geotechnical engineering & surveying · GIS",
            //   bio: "Heads geotechnical engineering along with surveying and GIS. Looks after all field operations, execution of fieldwork and remote-sensing deliverables.",
            //   edu: "MS (Remote Sensing & Geoinformatics)",
            //   img: directorImg,
            //   linkedin: "https://www.linkedin.com/in/abbas-najmi/",
            // },
            // {
            //   name: "Ms. Ayushi Mahiyar",
            //   role: "Head · Operations",
            //   bio: "Heads operations proof-checking, report preparation and office management across all commissions.",
            //   edu: "B. Arch, MS (Construction Management)",
            //   img: architectDirectorImg,
            //   linkedin: "https://www.linkedin.com/in/ayushi-mahiyar/",
            // },
          ].map((m) => (
            <article
              key={m.name}
              className="rounded-sm border border-border bg-background overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7 flex flex-col gap-2">
                <h3 className="font-display text-xl text-foreground tracking-tight">{m.name}</h3>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                  {m.role}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {m.edu}
                  </span>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="inline-flex items-center justify-center h-7 w-7 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Wider team */}
      <Section>
        <div className="mb-12 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Our team</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground text-balance">
              Skilled professionals across every discipline.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Our extended team of advisors, geologists, engineers and project managers ensures that
              every commission gets named technical ownership from start to sign-off.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden">
          {[
            {
              name: "Dr. Hemant Mahiyar",
              role: "Geotechnical advisor",
              edu: "Ph.D (Geotechnical Engg)",
              exp: "40+ years",
              linkedin: "https://www.linkedin.com/in/hemant-mahiyar/",
            },
            {
              name: "Dr. A. N. Patel",
              role: "Geotechnical advisor",
              edu: "Ph.D (Geotechnical Engg)",
              exp: "40+ years",
              linkedin: "https://www.linkedin.com/in/a-n-patel/",
            },
            {
              name: "Mr. Rameshwar Kanel",
              role: "Principal geologist & geohydrology specialist",
              edu: "M.Sc. (Geology)",
              exp: "25+ years",
              linkedin: "https://www.linkedin.com/in/rameshwar-kanel/",
            },
            {
              name: "Mr. Mustafa Hotelwala",
              role: "Project engineer",
              edu: "B.E. (Civil)",
              exp: "7 years",
              linkedin: "",
            },
          ].map((p) => (
            <div key={p.name} className="bg-card p-7 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                  {p.role}
                </div>
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on LinkedIn`}
                  className="inline-flex items-center justify-center h-6 w-6 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors shrink-0"
                >
                  <LinkedInIcon className="h-3 w-3" />
                </a>
              </div>
              <h3 className="font-display text-lg text-foreground tracking-tight">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.edu}</p>
              <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                Experience · {p.exp}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-card border-y border-border">
        <Eyebrow>Strata of the practice</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground max-w-3xl text-balance">
          From a small Indore consultancy, layer by layer.
        </h2>
        <div className="mt-14 relative max-w-4xl">
          {/* vertical guide line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
          <ol className="space-y-12">
            {[
              {
                y: "2007",
                t: "Founded in Indore",
                d: "Established as a one-stop geoscience and engineering consultancy serving central India.",
              },
              {
                y: "2012",
                t: "Geotechnical scale-up",
                d: "Bridge and dam investigations for Madhya Pradesh PWD and Water Resources Department.",
              },
              {
                y: "2016",
                t: "Geophysics & geohydrology",
                d: "Added resistivity, seismic and borehole logging capability — and a dedicated water-resources practice.",
              },
              {
                y: "2020",
                t: "Highway corridor work",
                d: "Foundation approvals for ROBs and the 8-lane Indore Super Corridor.",
              },
              {
                y: "2024",
                t: "One-stop discipline",
                d: "Integrated geoscience disciplines, NABL/ISO-aligned lab workflows, and a senior team that signs every report.",
              },
            ].map((e) => (
              <li key={e.y} className="pl-10 relative">
                <span
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-forest ring-4 ring-card"
                  aria-hidden
                />
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {e.y.split("").join(" ")}
                </div>
                <div className="mt-2 font-display text-2xl text-foreground tracking-tight">
                  {e.t}
                </div>
                <p className="mt-2 text-[0.95rem] text-muted-foreground leading-relaxed max-w-2xl">
                  {e.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Eyebrow>
              <span className="text-bone/70">Work with us</span>
            </Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-bone text-balance">
              Bring us your hardest sites.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
