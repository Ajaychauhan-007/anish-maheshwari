"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { contact, nav, site } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [type, setType] = useState(contact.enquiryTypes[0]);
  const [subject, setSubject] = useState(contact.enquiryTypes[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // The closing statement lights up word by word as it scrolls into view.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(".contact-title .w", { opacity: 0.12 }, {
      opacity: 1, stagger: 0.3, ease: "none",
      scrollTrigger: { trigger: ".contact-title", start: "top 85%", end: "bottom 45%", scrub: true },
    });
  }, { scope: root });

  const pick = (t: string) => { setType(t); setSubject(t); };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Please add your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) errs.email = "Please add a valid email.";
    if (!data.message?.trim()) errs.message = "A short message helps.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      if (contact.formEndpoint) {
        const res = await fetch(contact.formEndpoint, {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, enquiryType: type }),
        });
        if (!res.ok) throw new Error("Request failed");
      }
      setStatus("sent");
      e.currentTarget?.reset?.();
    } catch {
      setStatus("error");
    }
  }

  const words = ["Let’s", "Create", "Something"];

  return (
    <>
      <section id="contact" ref={root} className="section theme-dark" aria-labelledby="contact-title" style={{ paddingBottom: "clamp(96px, 10vw, 160px)" }}>
        <div className="container">
          <SectionLabel index="12">Contact</SectionLabel>
          <h2 id="contact-title" className="contact-title" style={{ marginTop: 32 }}>
            {words.map((w) => <span key={w}><span className="w">{w}</span> </span>)}
            <br /><span className="w serif italic">Meaningful.</span>
          </h2>

          <div className="contact-grid">
            <div className="contact-info" data-stagger>
              <div>
                <p className="label champagne" style={{ margin: "0 0 14px" }}>What brings you here?</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} role="group" aria-label="Enquiry type">
                  {contact.enquiryTypes.map((t) => (
                    <button key={t} type="button" className="chip" aria-pressed={type === t} onClick={() => pick(t)}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="contact-rows">
                <a href={`mailto:${contact.email}`}><span className="label muted">Email</span><span>{contact.email}</span></a>
                <div><span className="label muted">Phone</span><span>{contact.phone}</span></div>
                <a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer"><span className="label muted">LinkedIn</span><span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>{contact.linkedin.label}<ArrowUpRight size={14} /></span></a>
                <a href={contact.instagram.href} target="_blank" rel="noopener noreferrer"><span className="label muted">Instagram</span><span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>{contact.instagram.label}<ArrowUpRight size={14} /></span></a>
              </div>
            </div>

            <form className="contact-form" onSubmit={onSubmit} noValidate aria-label="Contact form" data-fade>
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby="e-name" />
                <span className="focus-line" aria-hidden="true" />
                <span id="e-name" className="error">{errors.name}</span>
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby="e-email" />
                <span className="focus-line" aria-hidden="true" />
                <span id="e-email" className="error">{errors.email}</span>
              </div>
              <div className="field full">
                <label htmlFor="f-subject">Subject</label>
                <input id="f-subject" name="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <span className="focus-line" aria-hidden="true" />
              </div>
              <div className="field full">
                <label htmlFor="f-message">Message</label>
                <textarea id="f-message" name="message" rows={4} placeholder="Tell me what you are building" aria-invalid={!!errors.message} aria-describedby="e-message" />
                <span className="focus-line" aria-hidden="true" />
                <span id="e-message" className="error">{errors.message}</span>
              </div>
              <div className="full" style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                <button type="submit" className="btn btn-solid" disabled={status === "sending"}>
                  {status === "sending" ? "Sending" : "Send enquiry"}<ArrowRight />
                </button>
                <p role="status" className="label" style={{ margin: 0, color: status === "error" ? "#e0a97a" : "var(--champagne)" }}>
                  {status === "sent" && (contact.formEndpoint ? "Thank you. Your message has been sent." : "Demo mode: connect formEndpoint in site.ts to receive messages.")}
                  {status === "error" && `Something went wrong. Please email ${contact.email}.`}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-word" aria-hidden="true">{site.lastName}</p>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <nav aria-label="Footer">
              {nav.filter((n) => n.id !== "home").map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
            </nav>
            <a href="#home" className="link-line">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
