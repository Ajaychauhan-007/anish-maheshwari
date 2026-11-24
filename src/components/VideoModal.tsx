"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type Detail = { id: string | null; title: string };

/** Open from anywhere: openVideo({ id: "YOUTUBE_ID", title: "..." }) */
export function openVideo(detail: Detail) {
  window.dispatchEvent(new CustomEvent<Detail>("open-video", { detail }));
}

export function VideoModal() {
  const [video, setVideo] = useState<Detail | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setVideo((e as CustomEvent<Detail>).detail);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVideo(null); };
    window.addEventListener("open-video", onOpen);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("open-video", onOpen); window.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = video ? "hidden" : "";
    if (video) closeRef.current?.focus();
  }, [video]);

  return (
    <div className={`modal ${video ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label={video?.title ?? "Video"} aria-hidden={!video} onClick={() => setVideo(null)}>
      <button ref={closeRef} className="modal-close" aria-label="Close video" onClick={() => setVideo(null)}><X size={20} strokeWidth={1.4} /></button>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <div className="modal-video">
          {video?.id ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : video ? (
            <div className="ph" style={{ position: "absolute" }}>
              <span className="label">Video coming soon</span>
              <span>Add the YouTube ID for “{video.title}” in src/content/site.ts</span>
            </div>
          ) : null}
        </div>
        <p className="label muted" style={{ marginTop: 18 }}>{video?.title}</p>
      </div>
    </div>
  );
}
