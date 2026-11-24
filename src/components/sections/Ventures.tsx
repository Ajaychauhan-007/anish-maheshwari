import { ventures } from "@/content/site";
import { MediaSlot } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Ventures() {
  const [lead, ...rest] = ventures;
  return (
    <section id="ventures" className="section theme-ivory" aria-labelledby="ventures-title">
      <div className="container">
        <SectionLabel index="06">Ventures &amp; Business Impact</SectionLabel>
        <h2 id="ventures-title" className="h2" style={{ marginTop: 28 }} data-split>
          Building Businesses.<br /><span className="serif italic">Creating Impact.</span>
        </h2>

        <article className="venture-lead">
          <MediaSlot src={lead.image} alt={lead.title} hint="VSURE imagery · wide 21:9" path="/public/images/ventures/" light parallax />
          <div className="venture-lead-copy">
            <div style={{ gridColumn: "1 / span 7" }}>
              <p className="label" style={{ margin: "0 0 16px", color: "#8a7350" }} data-fade>{lead.kicker}</p>
              <h3 className="venture-title" data-split>{lead.title}</h3>
            </div>
            <div style={{ gridColumn: "9 / span 4", display: "flex", flexDirection: "column", gap: 20 }} data-fade>
              <p className="muted" style={{ margin: 0 }}>{lead.text}</p>
              {lead.link ? <a className="link-line label" href={lead.link.href} target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start" }}>{lead.link.label}<ArrowUpRight size={14} /></a> : null}
            </div>
          </div>
        </article>

        <div style={{ marginTop: "clamp(64px, 8vw, 140px)" }}>
          {rest.map((v, i) => (
            <article key={i} className={`venture-row ${i % 2 ? "flip" : ""}`}>
              <div className="v-media"><MediaSlot src={v.image} alt={v.title} hint={`${v.kicker} image`} light parallax /></div>
              <div className="v-copy">
                <p className="label" style={{ margin: 0, color: "#8a7350" }} data-fade>{String(i + 2).padStart(2, "0")} · {v.kicker}</p>
                <h3 className="venture-title" data-split>{v.title}</h3>
                <p className="muted" style={{ margin: 0 }} data-fade>{v.text}</p>
                {v.link ? <a className="link-line label" href={v.link.href} style={{ alignSelf: "flex-start" }} data-fade>{v.link.label}<ArrowUpRight size={14} /></a> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
