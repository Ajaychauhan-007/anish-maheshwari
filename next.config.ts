import type { NextConfig } from "next";

// Static export: the whole portfolio builds to plain HTML/CSS/JS in /out,
// so it can be hosted on Vercel, Netlify or any static host.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
