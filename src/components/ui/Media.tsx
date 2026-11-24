import { ImageIcon } from "lucide-react";

type Props = {
  src: string | null;
  alt: string;
  /** What should go here, shown while the slot is empty. */
  hint: string;
  path?: string;
  light?: boolean;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
  /** Set false to skip the scroll unmask animation. */
  reveal?: boolean;
};

/**
 * Image slot. Shows the real photo (black-and-white treatment) when `src` is set,
 * otherwise a labelled placeholder describing exactly what to supply.
 */
export function MediaSlot({ src, alt, hint, path, light, className = "", priority, parallax, reveal = true }: Props) {
  const inner = src ? (
    // Static export: plain <img> keeps it host-agnostic. Add width/height for CLS if you like.
    <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" style={{ width: "100%", height: "100%" }} />
  ) : (
    <div className={`ph ${light ? "ph-light" : ""}`} role="img" aria-label={`Placeholder: ${hint}`}>
      <ImageIcon size={22} strokeWidth={1.2} aria-hidden="true" />
      <span className="label">{hint}</span>
      {path ? <span>{path}</span> : null}
    </div>
  );
  return (
    <div className={`media-frame ${className}`} data-clip-reveal={reveal ? "" : undefined}>
      {parallax ? <div className="parallax-inner" data-parallax="0.12">{inner}</div> : inner}
    </div>
  );
}
