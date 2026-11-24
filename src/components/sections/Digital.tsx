import { latestUpdates, social } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Digital() {
  return (
    <section id="digital" className="section theme-ivory" aria-labelledby="digital-title">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <SectionLabel index="10">Digital Presence</SectionLabel>
            <h2 id="digital-title" className="h2" data-split>Beyond the <span className="serif italic">Boardroom.</span></h2>
          </div>
          <div style={{ maxWidth: 360 }} data-fade>
            <p className="label" style={{ margin: "0 0 12px", color: "#8a7350" }}>Latest updates</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {latestUpdates.map((u, i) => (
                <li key={i} className="muted" style={{ padding: "8px 0", borderTop: "1px solid rgba(10,10,10,.12)", fontSize: 14 }}>{u}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="social-list" style={{ listStyle: "none", padding: 0 }} data-stagger>
          {social.map((s) => (
            <li key={s.platform}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="social-row" aria-label={`${s.platform} ${s.handle}`}>
                <span className="social-name">{s.platform}</span>
                <span className="social-meta">
                  <span className="label champagne" style={{ display: "block" }}>{s.handle}</span>
                  <span style={{ fontSize: 14, opacity: 0.7 }}>{s.note}</span>
                </span>
                <span className="social-arrow"><ArrowUpRight size={40} /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
