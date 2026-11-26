/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT · edit everything about the website here.
 * ─────────────────────────────────────────────────────────────
 *  Rules
 *  • Anything in [square brackets] is a placeholder. Replace it with
 *    verified information supplied or approved by Anish Maheshwari.
 *  • `verified: false` shows a small "Placeholder" tag on the page.
 *    Flip it to `true` once the item is confirmed.
 *  • Images: drop files into /public/images/... and put the path in
 *    `image` (e.g. "/images/hero/anish.jpg"). Leave `null` to show
 *    the labelled placeholder.
 *  • Videos: paste a YouTube video ID (the part after v=) into `youtubeId`.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Anish Maheshwari",
  firstName: "Anish",
  lastName: "Maheshwari",
  tagline: ["Building Businesses.", "Enabling Capital.", "Creating a Legacy."],
  positioning: "Entrepreneur | Strategic Finance | Investment & Business Leadership",
  seo: {
    title: "Anish Maheshwari · Building Businesses. Enabling Capital. Creating a Legacy.",
    description:
      "The personal website of Anish Maheshwari: entrepreneur, strategic finance leader and investment professional.",
    url: "https://[your-domain].com",
  },
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "expertise", label: "Expertise" },
  { id: "ventures", label: "Ventures" },
  { id: "recognition", label: "Recognition" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" },
];

/* 01 · HERO ─────────────────────────────────────────────── */
export const hero = {
  intro:
    "[Short introduction, 1 to 2 sentences. Who Anish is and what he brings to founders, investors and businesses.]",
  image: "/images/hero/Anishhh.webp",
  imageAlt: "Portrait of Anish Maheshwari",
  primaryCta: { label: "Explore My Journey", href: "#journey" },
  secondaryCta: { label: "Watch My Story", youtubeId: null as string | null },
};

/* 02 · ABOUT ────────────────────────────────────────────── */
export const about = {
  title: "The Man Behind the Vision",
  statement: ["Beyond Business.", "Driven by Vision."],
  image: "/images/hero/Anishhh.webp" ,
  imageAlt: "Anish Maheshwari at work",
  blocks: [
    {
      label: "Biography",
      text:
        "Anish Maheshwari is a business architect, entrepreneur, investor and strategic finance leader whose career spans more than 25 years across capital markets, institutional finance, enterprise transformation and business growth.\n\n" +
        "Having progressed from operational finance to serving as Chief Financial Officer of a publicly listed enterprise, and subsequently becoming CEO and Managing Director of ViSURE Investment Affairs, he brings together financial stewardship, investment acumen and entrepreneurial leadership.\n\n" +
        "His professional journey has been closely associated with high-value transactions, institutional fundraising, strategic capital deployment and business expansion initiatives. Today, he works alongside founders, investors, institutions and growth-stage enterprises to strengthen foundations, unlock capital and build enduring businesses.",
    },
    {
      label: "Personal introduction",
      text:
        "For Anish, business has always been about more than financial outcomes. It is about recognising opportunities, creating possibilities and building something that delivers lasting value.\n\n" +
        "His experience across corporate leadership and entrepreneurship has shaped a perspective that combines commercial understanding with a long-term vision for business growth.",
    },
    {
      label: "Entrepreneurial mindset",
      text:
        "An entrepreneurial mindset is the ability to see possibilities beyond existing limitations. Anish believes in turning ambition into structured opportunities through strategic thinking, financial discipline and execution.\n\n" +
        "His approach focuses on creating businesses that are resilient, scalable and capable of delivering sustainable value.",
    },
    {
      label: "Leadership philosophy",
      text:
        "Great leadership is about creating direction, building trust and enabling people to achieve more together.\n\n" +
        "Anish believes that successful enterprises are built through vision, discipline, accountability and the relentless pursuit of long-term value creation.",
    },
  ],
};

/* 03 · AT A GLANCE ──────────────────────────────────────── */
// value: number shows an animated count-up. value: null shows a placeholder.
export const stats = [
  { value: null as number | null, prefix: "", suffix: "+", label: "Years of Experience" },
  { value: null as number | null, prefix: "", suffix: "+", label: "Organisations Led" },
  { value: null as number | null, prefix: "", suffix: "+", label: "Transactions Facilitated" },
  { value: null as number | null, prefix: "", suffix: "+", label: "Businesses Supported" },
];

/* 04 · THE JOURNEY ──────────────────────────────────────── */
// Every chapter is editable. Auditpro is an UNVERIFIED placeholder and must
// not be presented as actual employment until confirmed.
export const journey = [
  { year: "[Year]", title: "Career Beginnings", org: "[Organisation]", text: "[Where it started and what it taught him.]", verified: false },
  { year: "[Year]", title: "Auditpro", org: "[Unverified placeholder. Confirm or remove]", text: "[Role and details to be confirmed before publishing.]", verified: false },
  { year: "[Year]", title: "Professional Positions", org: "[Organisation(s)]", text: "[Key roles and responsibilities.]", verified: false },
  { year: "[Year]", title: "CFO Experience", org: "[Organisation]", text: "[Mandate, scope and outcomes.]", verified: false },
  { year: "[Year]", title: "Investment Banking", org: "[Organisation]", text: "[Types of mandates and transactions.]", verified: false },
  { year: "[Year]", title: "Entrepreneurial Journey", org: "[Venture]", text: "[The decision to build his own platform.]", verified: false },
  { year: "Present", title: "Present Leadership", org: "[Current role and organisation]", text: "[What he leads today and why it matters.]", verified: false },
];

/* 05 · EXPERTISE ────────────────────────────────────────── */
export const expertise = {
  title: ["Where Strategy", "Meets Execution."],
  items: [
    { title: "Strategic Finance", text: "[One or two lines on this capability, from real experience.]" },
    { title: "Investment Banking", text: "[One or two lines on this capability.]" },
    { title: "Capital Raising", text: "[One or two lines on this capability.]" },
    { title: "Mergers & Acquisitions", text: "[One or two lines on this capability.]" },
    { title: "Business Strategy", text: "[One or two lines on this capability.]" },
    { title: "Corporate Leadership", text: "[One or two lines on this capability.]" },
  ],
};

/* 06 · VENTURES & BUSINESS IMPACT ───────────────────────── */
export const ventures = [
  {
    kicker: "Flagship venture",
    title: "VSURE Investment Affairs",
    text: "[What VSURE does, who it serves and Anish's role. Approved copy, 40 to 60 words.]",
    image: null as string | null,
    link: { label: "Visit vsure.info", href: "https://vsure.info" },
  },
  {
    kicker: "Business ventures",
    title: "[Venture name]",
    text: "[Short description of the venture and his involvement.]",
    image: null as string | null,
    link: { label: "[Link label]", href: "#" },
  },
  {
    kicker: "Investment & transactions",
    title: "[Transaction experience headline]",
    text: "[Verified description of investment and transaction experience.]",
    image: null as string | null,
    link: null as { label: string; href: string } | null,
  },
  {
    kicker: "Partnerships & ecosystem",
    title: "[Partnership or ecosystem contribution]",
    text: "[Strategic partnerships, programmes or platforms he has built or supported.]",
    image: null as string | null,
    link: null as { label: string; href: string } | null,
  },
];

/* 07 · AWARDS & RECOGNITION ─────────────────────────────── */
export const awards = [
  { title: "[Award name]", issuer: "[Issuing body]", year: "[Year]", image: null as string | null },
  { title: "[Award name]", issuer: "[Issuing body]", year: "[Year]", image: null as string | null },
  { title: "[Professional recognition]", issuer: "[Issuing body]", year: "[Year]", image: null as string | null },
  { title: "[Industry achievement]", issuer: "[Issuing body]", year: "[Year]", image: null as string | null },
  { title: "[Award name]", issuer: "[Issuing body]", year: "[Year]", image: null as string | null },
];

/* 08 · VIDEOS & MEDIA ───────────────────────────────────── */
export type MediaType = "Introduction" | "Interview" | "Podcast" | "Speech" | "Conversation";
export const media = {
  featured: { type: "Introduction" as MediaType, title: "[Introduction film title]", meta: "[Duration]", youtubeId: null as string | null, image: null as string | null },
  items: [
    { type: "Interview" as MediaType, title: "[Interview title]", meta: "[Outlet · Year]", youtubeId: null as string | null, image: null as string | null },
    { type: "Podcast" as MediaType, title: "[Podcast episode]", meta: "[Show · Year]", youtubeId: null as string | null, image: null as string | null },
    { type: "Speech" as MediaType, title: "[Conference speech]", meta: "[Event · Year]", youtubeId: null as string | null, image: null as string | null },
    { type: "Conversation" as MediaType, title: "[Featured conversation]", meta: "[Platform · Year]", youtubeId: null as string | null, image: null as string | null },
  ],
};

/* 09 · AUTHOR ───────────────────────────────────────────── */
export const author = {
  intro: "[Author introduction. Why Anish writes and what readers take away, 40 to 60 words.]",
  book: {
    title: "Healpreneur’s",
    verified: false, // exact title and publication details to be confirmed
    subtitle: "[Subtitle]",
    publisher: "[Publisher · Year]",
    cover: null as string | null, // e.g. "/images/author/book-cover.jpg" (2:3)
    philosophy: "[Book philosophy. The central idea in 2 to 3 sentences.]",
    link: { label: "[Get the book]", href: "#" },
  },
  writings: [
    { title: "[Publication or article title]", where: "[Outlet · Year]", href: "#" },
    { title: "[Publication or article title]", where: "[Outlet · Year]", href: "#" },
    { title: "[Publication or article title]", where: "[Outlet · Year]", href: "#" },
  ],
};

/* 10 · DIGITAL PRESENCE ─────────────────────────────────── */
export const social = [
  { platform: "LinkedIn", handle: "[/in/handle]", href: "#", note: "[Featured post or update]" },
  { platform: "Instagram", handle: "[@handle]", href: "#", note: "[Featured post or reel]" },
  { platform: "YouTube", handle: "[@channel]", href: "#", note: "[Latest video]" },
];
export const latestUpdates = [
  "[Latest update one]",
  "[Latest update two]",
  "[Latest update three]",
];

/* 11 · INSIGHTS ─────────────────────────────────────────── */
export const insights = {
  featured: { topic: "Finance & Investment", date: "[DD Mon YYYY]", title: "[Featured article title]", excerpt: "[Two-line excerpt of the featured article.]", href: "#", image: null as string | null },
  articles: [
    { topic: "Business Perspectives", date: "[DD Mon YYYY]", title: "[Article title]", href: "#", image: null as string | null },
    { topic: "Entrepreneurship", date: "[DD Mon YYYY]", title: "[Article title]", href: "#", image: null as string | null },
    { topic: "Leadership", date: "[DD Mon YYYY]", title: "[Article title]", href: "#", image: null as string | null },
    { topic: "Strategic Thinking", date: "[DD Mon YYYY]", title: "[Article title]", href: "#", image: null as string | null },
  ],
};

/* 12 · CONTACT ──────────────────────────────────────────── */
export const contact = {
  email: "[email@domain.com]",
  phone: "[+91 00000 00000]",
  linkedin: { label: "[/in/handle]", href: "#" },
  instagram: { label: "[@handle]", href: "#" },
  enquiryTypes: ["Business collaboration", "Speaking invitation", "Media enquiry"],
  // Form endpoint: paste a Formspree / Web3Forms / your API URL here.
  // Leave null and the form shows a success state without sending (demo mode).
  formEndpoint: null as string | null,
};
