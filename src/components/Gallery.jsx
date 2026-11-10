import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import Placeholder from './Placeholder.jsx';

// Grid mosaik + lightbox (Esc menutup, panah kiri/kanan berpindah, fokus dikembalikan).
export default function Gallery({ items }) {
  const [index, setIndex] = useState(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const open = index !== null;

  const close = useCallback(() => {
    setIndex(null);
    triggerRef.current?.focus();
  }, []);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open, close, next, prev]);

  // Jika filter berubah dan indeks keluar batas, tutup lightbox.
  useEffect(() => {
    if (index !== null && index >= items.length) setIndex(null);
  }, [items.length, index]);

  const current = open ? items[index] : null;

  return (
    <>
      <ul className="gallery-grid">
        {items.map((item, i) => (
          <li key={item.id} className={`gallery-item ${item.size ? `gallery-item--${item.size}` : ''}`}>
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`Perbesar: ${item.title}`}
            >
              <Placeholder
                src={item.src}
                alt={item.title}
                label={item.title}
                variant="photo"
                ratio="auto"
                className="gallery-ph"
              />
              <span className="gallery-cap">
                <small>{item.category}</small>
                {item.title}
              </span>
              <span className="gallery-zoom" aria-hidden="true">
                <Icon name="zoom" size={18} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title}>
          <button type="button" className="lightbox-backdrop" aria-label="Tutup" onClick={close} tabIndex={-1} />
          <div className="lightbox-panel">
            <button type="button" className="lightbox-close" onClick={close} ref={closeRef} aria-label="Tutup">
              <Icon name="close" size={22} />
            </button>
            <div className="lightbox-stage">
              <button type="button" className="lightbox-nav lightbox-nav--prev" onClick={prev} aria-label="Sebelumnya">
                <Icon name="left" size={22} />
              </button>
              <Placeholder
                src={current.src}
                alt={current.title}
                label={`${current.title} — foto asli menyusul`}
                ratio="16 / 10"
                className="lightbox-ph"
              />
              <button type="button" className="lightbox-nav lightbox-nav--next" onClick={next} aria-label="Berikutnya">
                <Icon name="right" size={22} />
              </button>
            </div>
            <p className="lightbox-caption">
              <strong>{current.title}</strong>
              <span>
                {current.category} · {index + 1} / {items.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
