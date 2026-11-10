import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { NAV } from '../data/navigation.js';
import { SCHOOL } from '../config.js';

function Logo() {
  return (
    <Link to="/" className="brand" aria-label={`${SCHOOL.programShort} ${SCHOOL.name} — ke beranda`}>
      <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="8" />
        <path d="M14 46V18h14a9 9 0 0 1 4 17 9 9 0 0 1-4 11H14Zm8-22v7h6a3.5 3.5 0 0 0 0-7h-6Zm0 14v8h7a4 4 0 0 0 0-8h-7Z" />
        <path className="brand-accent" d="M38 18h8l8 14-8 14h-8l8-14-8-14Z" />
      </svg>
      <span className="brand-text">
        <strong>{SCHOOL.programShort}</strong>
        <small>{SCHOOL.name}</small>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false); // menu mobile
  const [openGroup, setOpenGroup] = useState(null); // dropdown aktif
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Klik di luar / tekan Esc menutup dropdown
  useEffect(() => {
    const onDoc = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenGroup(null);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenGroup(null);
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Kunci scroll body ketika menu mobile terbuka
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const isGroupActive = (group) =>
    group.children.some((c) => location.pathname === c.to || location.pathname.startsWith(`${c.to}/`));

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-bar" ref={navRef}>
        <Logo />

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>

        <nav id="main-nav" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          <ul>
            {NAV.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className={`has-drop ${openGroup === item.label ? 'is-open' : ''} ${
                    isGroupActive(item) ? 'is-active' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="drop-btn"
                    aria-expanded={openGroup === item.label}
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  >
                    {item.label}
                    <Icon name="chevron" size={16} />
                  </button>
                  <ul className="drop-menu">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink to={c.to}>
                          <span>{c.label}</span>
                          <small>{c.desc}</small>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
      {open && <button type="button" className="nav-backdrop" aria-label="Tutup menu" onClick={() => setOpen(false)} />}
    </header>
  );
}
