import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { scrollPageToTop } from "@/lib/scroll-to-top";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Integrated geoscience, engineering and exploration services from the surface signal to
              the seventh stratum.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-shimmer" />
              Operating across India, the GCC, and Africa
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Site
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={scrollPageToTop}
                  className="text-foreground/80 hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollPageToTop}
                  className="text-foreground/80 hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={scrollPageToTop}
                  className="text-foreground/80 hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={scrollPageToTop}
                  className="text-foreground/80 hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  onClick={scrollPageToTop}
                  className="text-foreground/80 hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollPageToTop}
                  className="text-foreground/80 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>Geohydrology</li>
              <li>Geotechnical</li>
              <li>Geophysical</li>
              <li>Mining</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2 text-sm text-foreground/80 leading-relaxed">
              <div>rajmigeoexploration@gmail.com</div>
              <div>0731-2434588</div>
              <div className="text-muted-foreground">
                106-109, M.L. Tower, Plot No. 292-A, Scheme No. 91, Near Malwa Mill Square
                <br />
                Indore, Madhya Pradesh - 452003.
              </div>
              <div className="text-muted-foreground">Mon–Sat · 10:00 – 19:00 IST</div>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Rajmi Geoexploration & Engineering Pvt. Ltd. All rights
            reserved.
          </div>
          <div className="font-mono uppercase tracking-[0.18em]">·N 22.72° ·E 75.86° ·Indore</div>
        </div>
      </div>
    </footer>
  );
}
