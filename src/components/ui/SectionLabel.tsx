export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="sec-label label" data-fade>
      <span className="idx">{index}</span>
      <span className="bar" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
