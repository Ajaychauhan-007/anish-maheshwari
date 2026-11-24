import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  openGraph: { title: site.seo.title, description: site.seo.description, type: "profile" },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description },
};

export const viewport: Viewport = { themeColor: "#0a0a0a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    description: site.seo.description,
    url: site.seo.url,
  };
  return (
    <html lang="en">
      <head>
        {/* Fonts: Manrope (sans) + Instrument Serif (editorial serif). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
