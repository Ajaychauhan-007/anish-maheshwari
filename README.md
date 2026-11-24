# Anish Maheshwari · Personal Website

One-page, 12-section editorial portfolio. Next.js (App Router) + TypeScript + Tailwind CSS v4 + GSAP (ScrollTrigger, SplitText). Builds to a fully static site.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
```

Requires Node 20 or newer.

## Project structure

```
src/
  app/
    layout.tsx          fonts, SEO metadata, Person schema (JSON-LD)
    page.tsx            section order
    globals.css         design tokens, all section styles, responsive rules
  content/
    site.ts             ALL text, links, images, videos, stats  ← edit here
  components/
    Nav.tsx             floating nav, active-section dot, mobile menu
    Motion.tsx          site-wide scroll animations (data attributes)
    VideoModal.tsx      YouTube lightbox
    Marquee.tsx         editorial ticker under the hero
    ui/                 MediaSlot (image/placeholder), labels, icons
    sections/           Hero, About, Glance, Journey, Expertise, Ventures,
                        Recognition, Media, Author, Digital, Insights, Contact (+ footer)
  lib/gsap.ts           GSAP plugin registration
public/images/          put photos here
```

## Editing content

Everything lives in `src/content/site.ts`.

- Text in `[square brackets]` is a placeholder. Replace it only with information Anish has supplied or approved.
- `verified: false` shows a small "Placeholder" tag on the page. Set it to `true` once confirmed.
- **Journey:** each chapter is one object. Add, remove or reorder freely. "Auditpro" is an unverified placeholder and is tagged as such until confirmed or removed.
- **At a Glance:** set `value` to a number to switch on the count-up. `null` shows `##`.
- **Awards:** add verified awards only, with issuer and year.
- **Book:** "Healpreneur’s" stays tagged until title, publisher and year are confirmed.

## Replacing images

1. Drop files into `public/images/...` (for example `public/images/hero/anish.jpg`).
2. Set the path in `site.ts`, e.g. `hero.image = "/images/hero/anish.jpg"`.

Photos get a black-and-white treatment automatically (`filter: grayscale(1)` in `.media-frame img`).

| Slot | Recommended |
| --- | --- |
| Hero portrait | Tall portrait, plain or dark backdrop, 1600 × 2400 or larger |
| About | 4:5 candid or editorial shot |
| Ventures lead | 21:9 wide image |
| Venture rows | 4:3 |
| Awards | 4:5 ceremony photo per award (shown on hover) |
| Media thumbnails | 16:9 (featured film 21:9) |
| Book cover | 2:3 |
| Insights | 4:3 featured, square thumbs |

Compress images (WebP or quality-80 JPG) before adding them.

## Replacing videos

Paste the YouTube video ID (the part after `v=`) into the `youtubeId` fields: `hero.secondaryCta` for "Watch My Story", and `media.featured` / `media.items`. Videos open in a privacy-friendly `youtube-nocookie` lightbox and only load on click.

## Contact form

Set `contact.formEndpoint` to a Formspree, Web3Forms or custom API URL. The form posts JSON: `name, email, subject, message, enquiryType`. With `null` it runs in demo mode and says so.

## Animation notes

- Generic reveals are opt-in via attributes: `data-split`, `data-fade`, `data-stagger`, `data-clip-reveal`, `data-parallax`, `data-count`.
- Section-specific motion: hero entrance + scroll split (Hero.tsx), pinned horizontal timeline (Journey.tsx), cursor-following award photo (Recognition.tsx), 3D book tilt (Author.tsx), word-by-word closing statement (Contact.tsx).
- `prefers-reduced-motion` turns animations off. Parallax and the pinned timeline are desktop-only; on mobile the timeline becomes a vertical list.

## Deployment

**Vercel (recommended):** push to GitHub, import the repo in Vercel, keep the defaults, deploy. Add the custom domain under Project → Domains, then update `site.seo.url`.

**Any static host (Netlify, Cloudflare Pages, S3, cPanel):** run `npm run build` and upload the `out/` folder.

Fonts (Manrope, Instrument Serif) load from Google Fonts in `layout.tsx`. To self-host, swap the `<link>` for `next/font/google`.
