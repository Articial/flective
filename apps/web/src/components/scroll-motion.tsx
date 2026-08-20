"use client";

import { useEffect, useRef } from "react";

const REVEAL_SELECTORS = [
  ".section-intro > *",
  ".section-heading",
  ".section-lede",
  ".friction-list > div",
  ".offer-card",
  ".loop-step",
  ".why-card",
  ".capability",
  ".work-card",
  ".process-item",
  ".faq-item",
  ".audit-deliverables > article",
  ".audit-steps > article",
  ".fit-grid > article",
  ".services-expanded > article",
  ".detail-grid > *",
  ".case-body article",
  ".contact-layout > *",
  ".cta-section > *",
].join(",");

export function ScrollMotion() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const root = document.documentElement;
    root.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS));
    const initiallyVisible = new Set(elements.filter((element) => element.getBoundingClientRect().top < window.innerHeight * 0.94));
    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      const parent = element.parentElement;
      if (!parent) return;
      const siblings = Array.from(parent.children).filter((child) =>
        (child as HTMLElement).matches?.(REVEAL_SELECTORS),
      );
      const index = siblings.indexOf(element);
      element.style.setProperty("--reveal-delay", `${Math.min(index * 55, 220)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -9% 0px" },
    );
    elements.forEach((element) => {
      if (initiallyVisible.has(element)) element.classList.add("is-revealed");
      else observer.observe(element);
    });

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(progress));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
