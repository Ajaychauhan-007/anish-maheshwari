import { about, site } from "@/content/site";
import { MediaSlot } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** Splits a text block into paragraphs on blank lines ("\n\n"). */
const paras = (text: string) => text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

export function About() {
  const [bio, ...rest] = about.blocks;
  const [lead, ...bioRest] = paras(bio.text);

  return (
    <section id="about" className="section theme-light about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-top">
          <SectionLabel index="02">About</SectionLabel>
          <h2 id="about-title" className="label muted" style={{ margin: 0 }} data-fade>{about.title}</h2>
        </div>

        <p className="about-statement" data-split>
          <span className="about-statement-sans">{about.statement[0]}</span>
          <span className="about-statement-serif serif italic">{about.statement[1]}</span>
        </p>

        <div className="about-body">
          {/* Portrait stays pinned while the story scrolls beside it (desktop). */}
          <aside className="about-media-col">
            <div className="about-media">
              <MediaSlot src={about.image} alt={about.imageAlt} hint="Editorial portrait · 4:5" path="/public/images/about/" light parallax />
            </div>
            <div className="about-caption">
              <span className="label">{site.name}</span>
              <span className="label muted">Entrepreneur · Investor · Strategic Finance</span>
            </div>
          </aside>

          <div className="about-text">
            <p className="label about-kicker" data-fade><span>01</span>{bio.label}</p>
            <p className="about-lead" data-fade>{lead}</p>
            <div className="about-bio" data-stagger>
              {bioRest.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="about-index">
              {rest.map((b, i) => (
                <article key={b.label} className="about-row" data-fade>
                  <h3 className="label about-row-label">
                    <span>{String(i + 2).padStart(2, "0")}</span>{b.label}
                  </h3>
                  <div className="about-row-text">
                    {paras(b.text).map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}