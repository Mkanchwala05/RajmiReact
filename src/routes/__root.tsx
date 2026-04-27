import { useEffect } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
  useLocation,
} from "@tanstack/react-router";

import { scrollPageToTop } from "@/lib/scroll-to-top";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          Error 404
        </div>
        <h1 className="mt-3 font-display text-7xl text-foreground">Off the map</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't appear in our survey grid.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Return to base camp
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rajmi Geo Exploration — Geoscience & Engineering" },
      {
        name: "description",
        content:
          "Integrated geohydrology, geotechnical, geophysical and exploration services for industry, infrastructure and government.",
      },
      { name: "author", content: "Rajmi Geo Exploration" },
      { property: "og:title", content: "Rajmi Geo Exploration — Geoscience & Engineering" },
      {
        property: "og:description",
        content:
          "Integrated geoscience, engineering and exploration — from the surface signal to the seventh stratum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation({
    select: (location) => ({
      pathname: location.pathname,
      hash: location.hash,
    }),
  });

  useEffect(() => {
    if (hash) return;

    scrollPageToTop();
  }, [pathname, hash]);

  return null;
}
