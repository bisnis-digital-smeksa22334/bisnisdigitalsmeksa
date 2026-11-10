import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { NAV } from '../data/navigation.js';
import { SCHOOL } from '../config.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <p className="footer-brand">{SCHOOL.programShort}</p>
          <p>
            {SCHOOL.program}
            <br />
            {SCHOOL.name}
          </p>
          <p className="footer-address">
            <Icon name="pin" size={16} />
            <span>{SCHOOL.address}</span>
          </p>
          <a className="footer-link" href={SCHOOL.website} target="_blank" rel="noreferrer noopener">
            <Icon name="link" size={16} /> Website resmi sekolah
          </a>
        </div>

        {NAV.filter((n) => n.children).map((group) => (
          <nav key={group.label} aria-label={group.label}>
            <h2 className="footer-title">{group.label}</h2>
            <ul>
              {group.children.map((c) => (
                <li key={c.to}>
                  <Link to={c.to}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav aria-label="Informasi">
          <h2 className="footer-title">Informasi</h2>
          <ul>
            <li>
              <Link to="/berita">Berita & Pengumuman</Link>
            </li>
            <li>
              <Link to="/kontak">Kontak</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-base">
        <div className="container footer-base-inner">
          <p>
            © {new Date().getFullYear()} {SCHOOL.program} · {SCHOOL.name}
          </p>
          <p>Sebagian konten berlabel DEMO/placeholder dan menunggu data resmi.</p>
        </div>
      </div>
    </footer>
  );
}
