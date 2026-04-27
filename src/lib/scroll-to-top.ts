function scrollNow() {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  root.scrollTop = 0;
  document.body.scrollTop = 0;

  window.setTimeout(() => {
    root.style.scrollBehavior = previousBehavior;
  }, 0);
}

export function scrollPageToTop() {
  if (typeof window === "undefined") return;

  scrollNow();
  window.requestAnimationFrame(scrollNow);
  window.setTimeout(scrollNow, 0);
  window.setTimeout(scrollNow, 80);
}
