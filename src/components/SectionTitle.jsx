export default function SectionTitle({ eyebrow, title, lead, align = 'left', children }) {
  return (
    <header className={`section-title section-title--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </header>
  );
}
