import { useState } from "react";
import crossSectionImg from "@/assets/cross-section.png";

type Layer = {
  id: string;
  label: string;
  depth: string;
  description: string;
  color: string;
  pattern?: "dots" | "dashes" | "bricks" | "waves" | "grain";
};

// Hex colors below are sampled directly from the cross-section image so the
// legend swatches and active highlight match the artwork exactly.
const LAYERS: Layer[] = [
  {
    id: "topsoil",
    label: "Topsoil & Overburden",
    depth: "0 – 3 m",
    description:
      "Surface mapping, geomorphology, and soil sampling establish the project envelope.",
    color: "#e8c89a",
    pattern: "grain",
  },
  {
    id: "clay",
    label: "Weathered Clay",
    depth: "3 – 12 m",
    description: "Resistivity profiling and SPT tests characterise the active foundation zone.",
    color: "#c8814b",
    pattern: "dots",
  },
  {
    id: "sandstone",
    label: "Sandstone Aquifer",
    depth: "12 – 38 m",
    description: "Hydrogeological modelling tracks recharge, yield, and groundwater quality.",
    color: "#b8451f",
    pattern: "waves",
  },
  {
    id: "shale",
    label: "Fractured Shale",
    depth: "38 – 64 m",
    description: "Seismic refraction and borehole logging reveal fracture density and dip.",
    color: "#7a3328",
    pattern: "dashes",
  },
  {
    id: "limestone",
    label: "Limestone Bedrock",
    depth: "64 – 110 m",
    description: "Core recovery and lithological correlation confirm load-bearing capacity.",
    color: "#3d2820",
    pattern: "bricks",
  },
  {
    id: "basalt",
    label: "Crystalline Basement",
    depth: "110 m +",
    description: "Mineralogical assays and gravity inversion delineate the economic basement.",
    color: "#1f1410",
  },
];

export function CrossSection() {
  const [active, setActive] = useState<string>("sandstone");
  const current = LAYERS.find((l) => l.id === active) ?? LAYERS[0];
  const activeIndex = LAYERS.findIndex((l) => l.id === active);
  // image rows: 6 strata layers, each ~16.667% tall
  const rowPct = 100 / LAYERS.length;

  return (
    <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-stretch">
      {/* Cross-section image with interactive overlay */}
      <div className="lg:col-span-7 relative">
        <div className="relative rounded-sm overflow-hidden bg-card shadow-elevated grain">
          <img
            src={crossSectionImg}
            alt="Geological cross-section showing six stratigraphic layers from topsoil to crystalline basement"
            width={1240}
            height={760}
            loading="lazy"
            className="block w-full h-auto select-none"
          />

          {/* Layer hotspots */}
          <div className="absolute inset-0">
            {LAYERS.map((l, i) => {
              const isActive = l.id === active;
              return (
                <button
                  key={l.id}
                  type="button"
                  onMouseEnter={() => setActive(l.id)}
                  onFocus={() => setActive(l.id)}
                  onClick={() => setActive(l.id)}
                  aria-label={`${l.label}, depth ${l.depth}`}
                  className="absolute left-0 right-0 group focus:outline-none"
                  style={{
                    top: `${i * rowPct}%`,
                    height: `${rowPct}%`,
                    background: isActive
                      ? "color-mix(in oklab, var(--accent) 16%, transparent)"
                      : "transparent",
                    transition: "background 0.3s",
                  }}
                >
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full shadow-md"
                    style={{
                      background: "var(--accent)",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.3s",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground font-mono uppercase tracking-[0.15em]">
          <span>Hover or tap any layer</span>
          <span>Vertical exaggeration ×2</span>
        </div>
      </div>

      {/* detail panel — unchanged */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="eyebrow mb-4">
          Stratum {activeIndex + 1} of {LAYERS.length}
        </div>
        <h3
          key={current.id}
          className="text-3xl sm:text-4xl font-display tracking-tight text-foreground animate-fade-up"
        >
          {current.label}
        </h3>
        <div className="mt-2 font-mono text-sm text-accent">{current.depth}</div>
        <p
          key={`${current.id}-d`}
          className="mt-5 text-base text-foreground/80 leading-relaxed max-w-md animate-fade-up"
        >
          {current.description}
        </p>

        <ul className="mt-8 space-y-1 border-t border-border">
          {LAYERS.map((l) => {
            const isActive = l.id === active;
            return (
              <li key={l.id}>
                <button
                  onClick={() => setActive(l.id)}
                  className={`w-full flex items-center gap-4 py-3.5 border-b border-border text-left transition-colors ${
                    isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <span
                    className="h-5 w-5 rounded-sm shrink-0 border border-border"
                    style={{ background: l.color }}
                    aria-hidden
                  />
                  <span className="flex-1 text-sm font-medium">{l.label}</span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {l.depth}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
