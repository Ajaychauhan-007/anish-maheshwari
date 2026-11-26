import { Nav } from "@/components/Nav";
import { Motion } from "@/components/Motion";
import { VideoModal } from "@/components/VideoModal";
import { Marquee } from "@/components/Marquee";
import { HeroElias } from "@/components/sections/HeroElias";
import { About } from "@/components/sections/About";
import { Glance } from "@/components/sections/Glance";
import { Journey } from "@/components/sections/Journey";
import { Expertise } from "@/components/sections/Expertise";
import { Ventures } from "@/components/sections/Ventures";
import { Recognition } from "@/components/sections/Recognition";
import { MediaSection } from "@/components/sections/Media";
import { Author } from "@/components/sections/Author";
import { Digital } from "@/components/sections/Digital";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only" style={{ position: "absolute", zIndex: 100, padding: 12, background: "#fff", color: "#000" }}>Skip to content</a>
      <Motion />
      <Nav />
      <main>
        <HeroElias />
        <Marquee />
        <About />
        <Glance />
        <Journey />
        <Expertise />
        <Ventures />
        <Recognition />
        <MediaSection />
        <Author />
        <Digital />
        <Insights />
        <Contact />
      </main>
      <VideoModal />
    </>
  );
}
