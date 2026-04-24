/* ============================================================
   useReveal — Intersection Observer hook for scroll animations
   Adds 'visible' class to elements with 'reveal' class variants
   ============================================================ */

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const classes = ["reveal", "reveal-left", "reveal-right"];
    const elements: Element[] = [];

    classes.forEach((cls) => {
      document.querySelectorAll(`.${cls}`).forEach((el) => elements.push(el));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
