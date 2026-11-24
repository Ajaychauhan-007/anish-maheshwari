import { site } from "@/content/site";

/** Editorial ticker between the hero and About. Pure CSS, pauses with reduced motion. */
export function Marquee() {
  const items = [...site.tagline, ...site.positioning.split(" | ")];
  const row = (
    <span>
      {items.map((t, i) => (<span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>{t}<i aria-hidden="true" /></span>))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{row}{row}</div>
    </div>
  );
}
