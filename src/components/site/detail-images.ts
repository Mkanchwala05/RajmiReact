// Auto-built mapping of (service slug + sub-service name) -> image URL.
// Falls back to discipline hero when an item-specific photo doesn't exist.
import imgGeotechnical from "@/assets/svc-geotechnical.jpg";
import imgLaboratory from "@/assets/svc-laboratory.jpg";
import imgLoadTest from "@/assets/svc-load-test.jpg";
import imgNdt from "@/assets/svc-ndt.jpg";
import imgPavement from "@/assets/svc-pavement.jpg";
import imgGeophysical from "@/assets/svc-geophysical.jpg";
import imgSurvey from "@/assets/svc-survey.jpg";
import imgPiling from "@/assets/svc-piling.jpg";

// All available item-specific photos (Vite glob — only the ones present on disk are bundled).
const detailModules = import.meta.glob("@/assets/details/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const fallbacks: Record<string, string> = {
  "geotechnical-investigation": imgGeotechnical,
  "laboratory-testing": imgLaboratory,
  "field-load-testing": imgLoadTest,
  "non-destructive-testing": imgNdt,
  "pavement-testing": imgPavement,
  "geophysical-testing": imgGeophysical,
  "land-survey": imgSurvey,
  "piling-services": imgPiling,
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Build a name -> URL index, keyed by `${slug}__${name-slug}`
const detailIndex: Record<string, string> = {};
for (const [path, url] of Object.entries(detailModules)) {
  const file = path.split("/").pop() ?? "";
  // strip optional "-1", "-2" dedupe suffix and ".jpg"
  const base = file.replace(/\.jpg$/, "");
  detailIndex[base] = url;
}

export function getDetailImage(serviceSlug: string, subName: string, dedupeIdx = 0): string {
  const baseKey = `${serviceSlug}__${slugify(subName)}`;
  const keys = dedupeIdx > 0 ? [`${baseKey}-${dedupeIdx}`, baseKey] : [baseKey];
  for (const k of keys) {
    if (detailIndex[k]) return detailIndex[k];
  }
  return fallbacks[serviceSlug] ?? imgGeotechnical;
}
