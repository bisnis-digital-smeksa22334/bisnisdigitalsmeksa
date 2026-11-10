import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function PageHeader({ eyebrow, title, lead, crumbs = [], children }) {
  return (
    <section className="page-header">
      <div className="container page-header-inner">
        <nav className="crumbs" aria-label="Jejak halaman">
          <Link to="/">Beranda</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <Icon name="right" size={12} />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead lead--light">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
