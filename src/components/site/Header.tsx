import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { scrollPageToTop } from "@/lib/scroll-to-top";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={scrollPageToTop}
              className="px-3.5 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors rounded-sm"
              activeProps={{
                className:
                  "px-3.5 py-2 text-sm font-medium text-foreground rounded-sm bg-secondary",
              }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            onClick={scrollPageToTop}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
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

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm text-foreground hover:bg-secondary"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => {
                  scrollPageToTop();
                  setOpen(false);
                }}
                className="px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary rounded-sm"
                activeProps={{
                  className:
                    "px-3 py-3 text-base font-medium text-foreground bg-secondary rounded-sm",
                }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => {
                scrollPageToTop();
                setOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
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
          </nav>
        </div>
      )}
    </header>
  );
}
