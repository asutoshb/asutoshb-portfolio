/**
 * Lightweight reveal-on-scroll. Add `className="reveal"` to any element
 * and it animates in once it intersects the viewport.
 */
export function initRevealObserver(): () => void {
  if (typeof window === "undefined") return () => {};

  const els = document.querySelectorAll<HTMLElement>(".reveal");
  if (!els.length) return () => {};

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  els.forEach((el) => io.observe(el));

  // Re-scan after the next frame to catch any late-mounted nodes.
  const rescan = () => {
    document
      .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
      .forEach((el) => io.observe(el));
  };
  const rafId = requestAnimationFrame(rescan);

  return () => {
    cancelAnimationFrame(rafId);
    io.disconnect();
  };
}
