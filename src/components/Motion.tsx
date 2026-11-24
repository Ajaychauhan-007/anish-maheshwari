"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * One place for the site-wide scroll choreography. Sections opt in with data attributes:
 *  data-split        → serif/sans titles rise line by line from a mask
 *  data-fade         → soft rise + fade
 *  data-stagger      → direct children rise one after another
 *  data-clip-reveal  → image frame unmasks bottom-up while the image settles from 1.15 scale
 *  data-parallax="n" → element drifts n × its height while it crosses the viewport
 *  data-count="n"    → number counts up once
 * Anything inside [data-hero] is handled by the Hero's own entrance timeline.
 */
export function Motion() {
  useGSAP(() => {
    document.documentElement.classList.add("has-scroll-motion");
    const reduce = prefersReducedMotion();

    // scroll progress hairline
    gsap.to(".scroll-progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

    const notHero = (els: HTMLElement[]) => els.filter((el) => !el.closest("[data-hero]"));

    // counters (also run with reduced motion, just instantly)
    notHero(gsap.utils.toArray<HTMLElement>("[data-count]")).forEach((el) => {
      const target = Number(el.dataset.count);
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el, start: "top 85%", once: true,
        onEnter: () => gsap.to(obj, {
          v: target, duration: reduce ? 0 : 2, ease: "power3.out",
          onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString("en-IN"); },
        }),
      });
    });

    if (reduce) return;

    let splits: SplitText[] = [];
    const run = () => {
      notHero(gsap.utils.toArray<HTMLElement>("[data-split]")).forEach((el) => {
        const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "split-line-inner" });
        splits.push(split);
        gsap.from(split.lines, {
          yPercent: 110, duration: 1.2, stagger: 0.09,
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });
    };
    // SplitText measures lines, so wait for the web fonts
    if (document.fonts?.ready) document.fonts.ready.then(() => { run(); ScrollTrigger.refresh(); });
    else run();

    notHero(gsap.utils.toArray<HTMLElement>("[data-fade]")).forEach((el) => {
      gsap.from(el, { y: 32, autoAlpha: 0, duration: 1.1, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
    });

    notHero(gsap.utils.toArray<HTMLElement>("[data-stagger]")).forEach((el) => {
      gsap.from(el.children, { y: 40, autoAlpha: 0, duration: 1, stagger: 0.08, scrollTrigger: { trigger: el, start: "top 85%", once: true } });
    });

    notHero(gsap.utils.toArray<HTMLElement>("[data-clip-reveal]")).forEach((el) => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      tl.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" })
        .from(el.firstElementChild, { scale: 1.15, duration: 1.8, ease: "expo.out" }, 0.1);
    });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 861px)", () => {
      notHero(gsap.utils.toArray<HTMLElement>("[data-parallax]")).forEach((el) => {
        const amt = Number(el.dataset.parallax || 0.1) * 100;
        gsap.fromTo(el, { yPercent: -amt / 2 }, {
          yPercent: amt / 2, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });

    return () => { splits.forEach((s) => s.revert()); splits = []; };
  });

  return <div className="scroll-progress" aria-hidden="true" />;
}
