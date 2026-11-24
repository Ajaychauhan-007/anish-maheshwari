"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { hero, site } from "@/content/site";
import { MediaSlot } from "@/components/ui/Media";
import { ArrowRight, Play } from "@/components/ui/Icons";
import { openVideo } from "@/components/VideoModal";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const q = gsap.utils.selector(root);
    let first: SplitText | undefined, last: SplitText | undefined;

    const start = () => {
      first = SplitText.create(q(".hero-first")[0], { type: "chars", mask: "chars" });
      last = SplitText.create(q(".hero-last")[0], { type: "chars", mask: "chars" });
      const tagline = SplitText.create(q(".hero-tagline")[0], { type: "lines", mask: "lines" });

      gsap.set(root.current, { autoAlpha: 1 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(q(".hero-portrait .media-frame"), { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "expo.inOut" })
        .from(q(".hero-portrait .media-frame > *"), { scale: 1.25, duration: 2.4 }, 0)
        .from(first.chars, { yPercent: 105, duration: 1.4, stagger: 0.05 }, 0.55)
        .from(last.chars, { yPercent: -105, duration: 1.4, stagger: 0.035 }, 0.7)
        .from(tagline.lines, { yPercent: 110, duration: 1.2, stagger: 0.1 }, 1.1)
        .from(q("[data-hero-fade]"), { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 1.25);

      // Scroll: the name splits apart, the portrait pushes in, cover lines lift away.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 861px)", () => {
        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(q(".hero-first"), { xPercent: -14, ease: "none", scrollTrigger: st });
        gsap.to(q(".hero-last"), { xPercent: 10, ease: "none", scrollTrigger: st });
        gsap.to(q(".hero-portrait"), { yPercent: 14, scale: 1.06, ease: "none", scrollTrigger: st });
        gsap.to(q(".hero-cover-left, .hero-cover-right, .hero-meta, .hero-scroll"), { y: -120, autoAlpha: 0, ease: "none", scrollTrigger: { ...st, end: "55% top" } });
      });
    };

    gsap.set(root.current, { autoAlpha: 0 });
    if (document.fonts?.ready) document.fonts.ready.then(start); else start();
    return () => { first?.revert(); last?.revert(); };
  }, { scope: root });

  return (
    <section id="home" ref={root} className="hero" data-hero aria-label="Introduction">
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-meta label" data-hero-fade>
        <span>Personal Portfolio</span>
        <span className="champagne">01 / 12</span>
      </div>

      <p className="hero-first" aria-hidden="true">{site.firstName}</p>

      <div className="hero-portrait">
        <MediaSlot
          src={hero.image}
          alt={hero.imageAlt}
          hint="Anish's authentic portrait"
          path="Tall B&W-ready photo · /public/images/hero/"
          priority
        />
        <div className="fade" aria-hidden="true" />
      </div>

      <h1 className="hero-last">
        <span className="sr-only">{site.name}. </span>
        <span aria-hidden="true">{site.lastName}</span>
      </h1>

      <div className="hero-cover-left">
        <h2 className="hero-tagline">
          {site.tagline.map((line, i) => {
            // The last word of the middle line gets the champagne italic accent.
            if (i !== 1) return <span key={i} style={{ display: "block" }}>{line}</span>;
            const words = line.split(" ");
            const last = words.pop();
            return <span key={i} style={{ display: "block" }}>{words.join(" ")} <em>{last}</em></span>;
          })}
        </h2>
      </div>

      <div className="hero-cover-right">
        <span className="label champagne" data-hero-fade>{site.positioning}</span>
        <p className="muted" style={{ margin: 0 }} data-hero-fade>{hero.intro}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }} data-hero-fade>
          <a href={hero.primaryCta.href} className="btn btn-solid">{hero.primaryCta.label}<ArrowRight /></a>
          <button
            type="button"
            className="play-trigger label"
            onClick={() => openVideo({ id: hero.secondaryCta.youtubeId, title: "Watch My Story" })}
            style={{ display: "inline-flex", alignItems: "center", gap: 14, background: "none", border: 0, cursor: "pointer", color: "var(--white)" }}
          >
            <span className="play-ring"><Play /></span>
            {hero.secondaryCta.label}
          </button>
        </div>
      </div>

      <div className="hero-scroll label" data-hero-fade aria-hidden="true">
        <span>Scroll</span><span className="track" />
      </div>
    </section>
  );
}
