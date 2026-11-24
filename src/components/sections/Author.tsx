"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { author } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderTag } from "@/components/ui/Placeholder";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Author() {
  const root = useRef<HTMLElement>(null);
  const book = useRef<HTMLDivElement>(null);
  const b = author.book;

  // The book follows the cursor a few degrees; the giant title drifts on scroll.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const rx = gsap.quickTo(book.current, "rotationX", { duration: 0.8, ease: "power3" });
    const ry = gsap.quickTo(book.current, "rotationY", { duration: 0.8, ease: "power3" });
    gsap.set(book.current, { rotationY: -18, rotationX: 4 });
    const stage = root.current!.querySelector<HTMLElement>(".author-stage")!;
    const move = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      ry(-18 + px * 22); rx(4 - py * 12);
    };
    const leave = () => { ry(-18); rx(4); };
    stage.addEventListener("mousemove", move); stage.addEventListener("mouseleave", leave);
    gsap.fromTo(".author-word", { xPercent: -42 }, { xPercent: -58, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } });
    return () => { stage.removeEventListener("mousemove", move); stage.removeEventListener("mouseleave", leave); };
  }, { scope: root });

  return (
    <section id="author" ref={root} className="section theme-light" aria-labelledby="author-title" style={{ overflow: "hidden" }}>
      <div className="container">
        <SectionLabel index="09">Author</SectionLabel>
        <h2 id="author-title" className="h2" style={{ marginTop: 28 }} data-split>
          Ideas <span className="serif italic">Beyond</span> Business.
        </h2>

        <div className="author-stage">
          <p className="author-word" aria-hidden="true">{b.title}</p>
          <div className="book-wrap">
            <div className="book" ref={book}>
              <div className="book-spine" aria-hidden="true" />
              <div className="book-cover">
                {b.cover ? <img src={b.cover} alt={`${b.title} book cover`} /> : (
                  <>
                    <span className="label champagne" style={{ fontSize: 9 }}>[Cover art placeholder]</span>
                    <span className="serif" style={{ fontSize: "clamp(34px, 3.2vw, 56px)", lineHeight: 0.95 }}>{b.title}</span>
                    <span className="label" style={{ fontSize: 9, color: "var(--grey)" }}>Anish Maheshwari</span>
                  </>
                )}
              </div>
            </div>
            <div className="book-shadow" aria-hidden="true" />
          </div>

          <div className="author-copy" data-stagger>
            <p className="muted" style={{ margin: 0, fontSize: "var(--fs-lead)", lineHeight: 1.5 }}>{author.intro}</p>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <h3 className="serif italic" style={{ margin: 0, fontSize: "clamp(36px, 3.4vw, 56px)", lineHeight: 1 }}>{b.title}</h3>
                {!b.verified ? <PlaceholderTag>Title &amp; details to confirm</PlaceholderTag> : null}
              </div>
              <p className="label muted" style={{ margin: "12px 0 0" }}>{b.subtitle} · {b.publisher}</p>
            </div>
            <p className="muted" style={{ margin: 0 }}>{b.philosophy}</p>
            <a href={b.link.href} className="btn btn-ghost" style={{ alignSelf: "flex-start" }}>{b.link.label}<ArrowUpRight size={14} /></a>
            <div>
              <p className="label" style={{ margin: "12px 0 8px", color: "#8a7350" }}>Selected writings &amp; publications</p>
              <div className="writings">
                {author.writings.map((w, i) => (
                  <a key={i} href={w.href}><span>{w.title}</span><span className="label muted">{w.where}</span></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
