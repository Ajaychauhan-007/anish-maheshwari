"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { awards } from "@/content/site";
import { MediaSlot } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderTag } from "@/components/ui/Placeholder";

export function Recognition() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // Floating ceremony photo that follows the cursor over the list (desktop only).
  useGSAP(() => {
    const el = preview.current!;
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
    const onMove = (e: MouseEvent) => { xTo(e.clientX + 32); yTo(e.clientY - 180); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, { scope: root });

  const item = hovered !== null ? awards[hovered] : null;

  return (
    <section id="recognition" ref={root} className="section theme-dark" aria-labelledby="recognition-title">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <SectionLabel index="07">Awards &amp; Recognition</SectionLabel>
            <h2 id="recognition-title" className="h2" data-split>
              Recognition That<br />Reflects <span className="serif italic champagne">The Journey.</span>
            </h2>
          </div>
          <span className="muted" data-fade><PlaceholderTag>Add verified awards only</PlaceholderTag></span>
        </div>

        <ol className="awards" style={{ listStyle: "none", padding: 0 }} onMouseLeave={() => setHovered(null)} data-stagger>
          {awards.map((a, i) => (
            <li key={i} className="award" onMouseEnter={() => setHovered(i)}>
              <span className="label champagne">{String(i + 1).padStart(2, "0")}</span>
              <span className="award-title">{a.title}</span>
              <span className="issuer muted">{a.issuer}</span>
              <span className="serif" style={{ fontSize: 24, textAlign: "right", color: "var(--champagne)" }}>{a.year}</span>
            </li>
          ))}
        </ol>
      </div>

      <div ref={preview} className={`award-preview ${item ? "is-on" : ""}`} aria-hidden="true">
        <MediaSlot src={item?.image ?? null} alt="" hint="Ceremony photo" path={item ? item.title : undefined} className="h-full" reveal={false} />
      </div>
    </section>
  );
}
