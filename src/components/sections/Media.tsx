"use client";

import { useState } from "react";
import { media, type MediaType } from "@/content/site";
import { MediaSlot } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Play } from "@/components/ui/Icons";
import { openVideo } from "@/components/VideoModal";

const filters: ("All" | MediaType)[] = ["All", "Interview", "Podcast", "Speech", "Conversation"];
const plural: Record<string, string> = { All: "All", Interview: "Interviews", Podcast: "Podcasts", Speech: "Speeches", Conversation: "Conversations" };

export function MediaSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = media.items.filter((m) => filter === "All" || m.type === filter);
  const f = media.featured;

  return (
    <section id="media" className="section theme-pure" aria-labelledby="media-title" style={{ borderTop: "1px solid rgba(247,246,242,.08)" }}>
      <div className="container">
        <SectionLabel index="08">Videos &amp; Media</SectionLabel>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap", marginTop: 28 }}>
          <h2 id="media-title" className="h2" data-split>
            Conversations.<br /><span className="serif italic">Perspectives.</span> Experiences.
          </h2>
          <div className="media-tabs" role="group" aria-label="Filter media" data-fade>
            {filters.map((x) => (
              <button key={x} className="media-tab" aria-pressed={filter === x} onClick={() => setFilter(x)}>{plural[x]}</button>
            ))}
          </div>
        </div>

        <button className="media-feature play-trigger" onClick={() => openVideo({ id: f.youtubeId, title: f.title })} aria-label={`Play: ${f.title}`}>
          <MediaSlot src={f.image} alt="" hint="Introduction film thumbnail · cinematic 21:9" path="or YouTube ID in site.ts" />
          <div className="media-overlay">
            <div>
              <p className="label champagne" style={{ margin: "0 0 12px" }}>{f.type} · {f.meta}</p>
              <p className="serif" style={{ margin: 0, fontSize: "clamp(30px, 3.6vw, 64px)", lineHeight: 1, color: "var(--white)" }}>{f.title}</p>
            </div>
            <span className="play-ring" style={{ width: 88, height: 88 }}><Play size={20} /></span>
          </div>
        </button>

        <div className="media-grid">
          {items.map((m, i) => (
            <button key={m.title + i} className="media-thumb" onClick={() => openVideo({ id: m.youtubeId, title: m.title })} aria-label={`Play: ${m.title}`}>
              <div style={{ position: "relative" }}>
                <MediaSlot src={m.image} alt="" hint={`${m.type} thumbnail`} />
                <span className="play-mini"><Play size={11} /></span>
              </div>
              <span className="label champagne">{m.type}</span>
              <span style={{ fontSize: 18, lineHeight: 1.3, color: "var(--white)" }}>{m.title}</span>
              <span className="label muted">{m.meta}</span>
            </button>
          ))}
          {items.length === 0 ? <p className="muted">Nothing here yet. Add items in src/content/site.ts.</p> : null}
        </div>
      </div>
    </section>
  );
}
