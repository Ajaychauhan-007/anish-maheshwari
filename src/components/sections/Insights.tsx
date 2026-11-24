import { insights } from "@/content/site";
import { MediaSlot } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight } from "@/components/ui/Icons";

export function Insights() {
  const f = insights.featured;
  return (
    <section id="insights" className="section theme-light" aria-labelledby="insights-title">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <SectionLabel index="11">Insights &amp; Thought Leadership</SectionLabel>
            <h2 id="insights-title" className="h2" data-split>Thoughts That<br /><span className="serif italic">Shape Tomorrow.</span></h2>
          </div>
          <a href="#insights" className="link-line label" data-fade>All insights <ArrowRight size={14} /></a>
        </div>

        <div className="insights-grid">
          <a href={f.href} className="insight-feature">
            <MediaSlot src={f.image} alt="" hint="Featured article image" light />
            <p className="label" style={{ margin: 0, color: "#8a7350" }} data-fade>Featured · {f.topic} · {f.date}</p>
            <h3 className="insight-title" data-split>{f.title}</h3>
            <p className="muted" style={{ margin: 0, maxWidth: 620 }} data-fade>{f.excerpt}</p>
            <span className="link-line label" style={{ alignSelf: "flex-start" }}>Read more <ArrowRight size={14} /></span>
          </a>

          <div className="insight-list" data-stagger>
            {insights.articles.map((a, i) => (
              <a key={i} href={a.href} className="insight-item">
                <MediaSlot src={a.image} alt="" hint="Thumb" light />
                <div>
                  <p className="label muted" style={{ margin: 0, fontSize: 10 }}>{a.topic} · {a.date}</p>
                  <h4>{a.title}</h4>
                  <span className="label" style={{ display: "inline-flex", gap: 8, alignItems: "center", marginTop: 10, fontSize: 10 }}>Read more <ArrowRight size={12} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
