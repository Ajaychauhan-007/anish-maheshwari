import { stats } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderTag } from "@/components/ui/Placeholder";

export function Glance() {
  const pending = stats.some((s) => s.value === null);
  return (
    <section id="glance" className="section theme-dark" aria-labelledby="glance-title">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <SectionLabel index="03">At a Glance</SectionLabel>
            <h2 id="glance-title" className="h2" data-split>Experience. Impact. <span className="serif italic">Milestones.</span></h2>
          </div>
          {pending ? <span className="muted" data-fade><PlaceholderTag>Figures awaiting verification</PlaceholderTag></span> : null}
        </div>
        <div className="stats" data-stagger>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              {s.value === null ? (
                <div className="stat-num is-pending" aria-label={`${s.label}: to be confirmed`}>##<sup>{s.suffix}</sup></div>
              ) : (
                <div className="stat-num">
                  {s.prefix}<span data-count={s.value}>0</span><sup>{s.suffix}</sup>
                </div>
              )}
              <p className="label muted" style={{ margin: "18px 0 0" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
