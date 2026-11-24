import { about } from "@/content/site";
import { MediaSlot } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="section theme-light" aria-labelledby="about-title">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <SectionLabel index="02">About</SectionLabel>
          <h2 id="about-title" className="label muted" style={{ margin: 0 }} data-fade>{about.title}</h2>
        </div>

        <p className="about-statement" style={{ marginTop: "clamp(40px, 5vw, 80px)" }} data-split>
          {about.statement[0]}
          <span className="serif italic">{about.statement[1]}</span>
        </p>

        <div className="about-grid">
          <div className="about-media">
            <MediaSlot src={about.image} alt={about.imageAlt} hint="Editorial portrait · 4:5" path="/public/images/about/" light parallax />
          </div>
          <div className="about-copy" data-stagger>
            {about.blocks.map((b, i) => (
              <div key={b.label}>
                <h3 className="label" style={{ margin: "0 0 14px", display: "flex", gap: 12 }}>
                  <span style={{ color: "#8a7350" }}>{String(i + 1).padStart(2, "0")}</span>{b.label}
                </h3>
                <p className="muted" style={{ margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
