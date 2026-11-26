"use client";

import Elias from "@/components/ui/elias-author-hero";
import type { EliasProps } from "@/components/ui/elias-author-hero";
import { ELIAS_FONT_CSS } from "@/components/ui/elias-fonts";
import { author, hero, site, social } from "@/content/site";

/* ─────────────────────────────────────────────────────────────
 *  HERO SETTINGS · edit the hero here
 * ───────────────────────────────────────────────────────────── */

// Portrait: works best as a transparent PNG/WebP cut-out, cropped at the waist.
// Set its real pixel size so the browser reserves the right space.
const PORTRAIT_SIZE = { width: 1072, height: 1336 };

const HERO_COPY = {
  roles: site.positioning.split(" | "), // Entrepreneur · Strategic Finance · Investment & Business Leadership
  headline: site.tagline, // Building Businesses. / Enabling Capital. / Creating a Legacy.
  description:
    "Business architect, investor and strategic finance leader, building enduring businesses for over 25 years.",
};

const NAV_STATUS = { label: "Currently", detail: "CEO & MD, ViSURE" };

// The self-writing note. Lines are taken from Anish's own About copy.
const LETTER: EliasProps["letter"] = {
  eyebrow: "A note to founders",
  greeting: "Dear founders,",
  stamp: "Seal & send",
  postmark: "Tomorrow",
  seal: "AM",
  sealing: "Sealed for tomorrow",
  messages: [
    "Turn ambition into structured opportunity, with discipline and execution.",
    "Build businesses that are resilient, scalable and built to last.",
    "Create direction, build trust and achieve more together.",
    "Pursue long-term value with vision and accountability.",
  ],
  counter: "Note",
};

// The book card. Title comes from site.ts (author.book). Fill the chapter text once confirmed.
const BOOKS: EliasProps["books"] = [
  {
    label: "The Book",
    title: author.book.title,
    coverLines: ["Heal-", "preneur’s"],
    topics: ["Business", "Leadership", "Purpose"],
    art: "sunrise",
    colors: { cover: "#efeee9", type: "#0a0a0a", spine: "#a88452" },
    chapter: "Chapter one",
    chapterTitle: "[Chapter title]",
    text: author.book.philosophy,
  },
];

/* Black-and-white editorial palette with a champagne accent, on top of the component's own theme. */
const THEME_CSS = `
html [data-slot='elias'], html .ea-hero {
  --color-ea-page: #f7f6f2;
  --color-ea-accent: #a88452;
  --color-ea-ink: #0a0a0a;
  --color-ea-muted: #66665f;
  --color-ea-paper: #e9e7e0;
}
/* MAHESHWARI is longer than the original surname, so its line is set smaller to fill the same width. */
html .ea-name-last { font-size: 11.2cqw; }
/* Black-and-white portrait, like the rest of the site. */
html .ea-portrait:not(.ea-ink-portrait) { filter: grayscale(1) contrast(1.05); }
/* Monochrome book cover art. */
html .ea-book-art { filter: grayscale(1) contrast(1.1); }
`;

export function HeroElias() {
  return (
    <div id="home">
      <style>{ELIAS_FONT_CSS + THEME_CSS}</style>
      <Elias
        brand={{ name: "Anish", href: "#home" }}
        navLinks={{
          left: [
            { label: "Home", href: "#home", active: true },
            { label: "About", href: "#about" },
          ],
          right: [
            { label: "Journey", href: "#journey" },
            { label: "Ventures", href: "#ventures" },
          ],
        }}
        navCta={{ label: "Contact", href: "#contact" }}
        navStatus={NAV_STATUS}
        name={{ first: site.firstName, last: site.lastName }}
        intro={HERO_COPY}
        portrait={hero.image ? { src: hero.image, alt: hero.imageAlt, ...PORTRAIT_SIZE } : undefined}
        books={BOOKS}
        bookCard={{ href: "#author", open: "Open", close: "Close", folio: "1" }}
        letter={LETTER}
        socialLinks={social.map((s) => ({ label: s.platform, href: s.href }))}
      />
    </div>
  );
}
