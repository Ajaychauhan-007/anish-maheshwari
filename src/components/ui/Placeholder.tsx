/** Small tag that marks unverified content on the page. */
export function PlaceholderTag({ children = "Placeholder" }: { children?: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}
