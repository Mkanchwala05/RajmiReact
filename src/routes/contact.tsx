import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, Eyebrow } from "@/components/site/Section";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rajmi Geo Exploration" },
      {
        name: "description",
        content:
          "Request a site survey, technical proposal or general enquiry. Our geoscience team responds within one business day.",
      },
      { property: "og:title", content: "Contact Rajmi Geo Exploration" },
      {
        property: "og:description",
        content: "Tell us about your site. We'll bring the instruments.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-16">
          <Eyebrow>Start a project</Eyebrow>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tight text-foreground text-balance max-w-4xl">
            Tell us about your site.
          </h1>
          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-lg text-foreground/80 leading-relaxed">
              Share a few details and one of our principal geoscientists will be in touch within one
              business day. For urgent matters, please call the office directly.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-sm border border-border bg-card p-10 text-center animate-fade-up">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="mt-5 font-display text-3xl text-foreground">
                  Survey request received
                </h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Thank you. A principal will reach out within one business day with next steps and
                  a preliminary scope.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required />
                  <Field label="Organisation" name="org" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div>
                  <Label>Service of interest</Label>
                  <select
                    name="service"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  >
                    <option>Geohydrological</option>
                    <option>Geological & Geotechnical</option>
                    <option>Geophysical</option>
                    <option>Surveying & Mapping</option>
                    <option>Structural & Engineering</option>
                    <option>Mining & Exploration</option>
                    <option>Water Resource & Drilling</option>
                    <option>Multi-disciplinary / unsure</option>
                  </select>
                </div>
                <div>
                  <Label>Tell us about your site</Label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Location, scope, timelines, anything we should know…"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Send request
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 lg:pl-6">
            <div className="rounded-sm border border-border bg-card p-8">
              <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                Direct lines
              </h2>
              <ul className="mt-6 space-y-5">
                <ContactLine
                  icon={<Mail className="h-4 w-4" />}
                  title="Email"
                  value="rajmigeoexploration@gmail.com"
                  href="mailto:rajmigeoexploration@gmail.com"
                />
                <ContactLine
                  icon={<Phone className="h-4 w-4" />}
                  title="Phone"
                  value="0731-2434588"
                  href="tel:+917312434588"
                />
                <ContactLine
                  icon={<MapPin className="h-4 w-4" />}
                  title="Office"
                  value="106-109, M.L. Tower, Plot No. 292-A, Scheme No. 91, Near Malwa Mill Square, Indore, Madhya Pradesh 452003"
                />
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                  Hours
                </div>
                <div className="text-sm text-foreground/80">Monday – Saturday</div>
                <div className="text-sm text-muted-foreground">10:00 – 19:00 IST</div>
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-border p-7 bg-secondary">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                Coverage
              </div>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Active across India and the GCC. We mobilise field teams within 72 hours for
                time-critical investigations.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <Label>
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
      />
    </label>
  );
}

function ContactLine({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="h-9 w-9 shrink-0 rounded-sm bg-secondary flex items-center justify-center text-foreground">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </div>
        <div className="mt-0.5 text-sm text-foreground leading-snug">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-start gap-4 hover:text-accent transition-colors">
          {inner}
        </a>
      ) : (
        <div className="flex items-start gap-4">{inner}</div>
      )}
    </li>
  );
}
