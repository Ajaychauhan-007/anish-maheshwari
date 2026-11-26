"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Hidden over the hero (it has its own navbar); slides in once the hero is scrolled past.
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active section: whichever section crosses the middle of the viewport.
    const ids = [...nav.map((n) => n.id), "glance", "digital", "insights", "author"];
    const map: Record<string, string> = { glance: "about", author: "media", digital: "media", insights: "media" };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(map[e.target.id] ?? e.target.id); }),
      { rootMargin: "-48% 0px -48% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : "is-hidden"}`} aria-hidden={!scrolled}>
        <div className="nav-shell" aria-hidden="true" />
        <a href="#home" className="nav-brand" aria-label={`${site.name}, back to top`}>ANISH MAHESHWARI</a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={active === item.id ? "is-active" : ""} aria-current={active === item.id ? "true" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="nav-toggle" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
          <Menu size={18} strokeWidth={1.4} />
        </button>
      </header>

      <div id="mobile-menu" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="nav-brand">ANISH MAHESHWARI</span>
          <button className="nav-toggle" style={{ display: "inline-flex" }} aria-label="Close menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <X size={18} strokeWidth={1.4} />
          </button>
        </div>
        <nav aria-label="Mobile">
          <ol>
            {nav.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className={i % 2 ? "serif italic" : ""}>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <p className="label muted" style={{ margin: 0 }}>{site.positioning}</p>
      </div>
    </>
  );
}
