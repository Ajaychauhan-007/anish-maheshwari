"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { journey } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderTag } from "@/components/ui/Placeholder";

export function Journey() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    // Desktop: vertical scroll drives a pinned horizontal timeline.
    mm.add("(min-width: 861px)", () => {
      const el = track.current!;
      const distance = () => el.scrollWidth - window.innerWidth;
      const tween = gsap.to(el, {
        x: () => -distance(), ease: "none",
        scrollTrigger: {
          trigger: root.current, start: "top top", end: () => `+=${distance()}`,
          pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: (self) => setCurrent(Math.min(journey.length, Math.max(1, Math.round(self.progress * (journey.length - 1)) + 1))),
        },
      });
      gsap.fromTo(".journey-line-fill", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${distance()}`, scrub: 0.8 } });
      gsap.utils.toArray<HTMLElement>(".chapter").forEach((ch) => {
        gsap.from(ch.querySelectorAll(".chapter-anim"), {
          y: 40, autoAlpha: 0, stagger: 0.06, duration: 1,
          scrollTrigger: { trigger: ch, containerAnimation: tween, start: "left 85%", once: true },
        });
      });
    });
  }, { scope: root });

  return (
    <section id="journey" ref={root} className="journey theme-ivory" style={{ padding: "clamp(104px, 10vw, 160px) 0" }} aria-labelledby="journey-title">
      <div className="container journey-head">
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <SectionLabel index="04">The Journey</SectionLabel>
          <h2 id="journey-title" className="h2" data-split>A Journey <span className="serif italic">Built on Vision</span></h2>
        </div>
        <div className="label muted journey-counter" aria-hidden="true">
          <span style={{ color: "var(--black)" }}>{String(current).padStart(2, "0")}</span> / {String(journey.length).padStart(2, "0")}
        </div>
      </div>

      <div className="journey-viewport">
        <div className="journey-track" ref={track}>
          <div className="journey-line" aria-hidden="true">
            <div className="journey-line-fill" style={{ position: "absolute", inset: 0, background: "var(--champagne)", transformOrigin: "left" }} />
          </div>
          <ol style={{ display: "contents", listStyle: "none" }}>
            {journey.map((c, i) => (
              <li key={i} className={`chapter ${i === journey.length - 1 ? "is-now" : ""}`}>
                <span className="chapter-dot" aria-hidden="true" />
                <p className="chapter-year chapter-anim">{c.year}</p>
                <p className="label chapter-anim" style={{ margin: "0 0 14px", color: "#8a7350" }}>Chapter {String(i + 1).padStart(2, "0")}</p>
                <h3 className="chapter-anim">{c.title}</h3>
                <p className="label muted chapter-anim" style={{ margin: "0 0 18px" }}>{c.org}</p>
                <p className="muted chapter-anim" style={{ margin: "0 0 20px", maxWidth: 380 }}>{c.text}</p>
                {!c.verified ? <span className="chapter-anim" style={{ display: "inline-block" }}><PlaceholderTag>{c.title === "Auditpro" ? "Unverified placeholder" : "Placeholder"}</PlaceholderTag></span> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
