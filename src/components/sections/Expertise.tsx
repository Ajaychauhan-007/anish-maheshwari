import { expertise } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Expertise() {
  return (
    <section id="expertise" className="section theme-light" aria-labelledby="expertise-title">
      <div className="container">
        <SectionLabel index="05">Expertise</SectionLabel>
        <h2 id="expertise-title" className="h2" style={{ marginTop: 28 }} data-split>
          {expertise.title[0]}<br /><span className="serif italic">{expertise.title[1]}</span>
        </h2>
        <ul className="exp-grid" style={{ listStyle: "none", padding: 0 }} data-stagger>
          {expertise.items.map((item, i) => (
            <li key={item.title} className="exp-cell" tabIndex={0}>
              <div className="exp-num label">
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="exp-arrow"><ArrowUpRight /></span>
              </div>
              <div>
                <h3 className="exp-title">{item.title}</h3>
                <p className="exp-desc">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
