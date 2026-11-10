import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Gallery from '../components/Gallery.jsx';
import Icon from '../components/Icon.jsx';
import { gallery, galleryCategories } from '../data/gallery.js';

export default function GalleryPage() {
  const [cat, setCat] = useState('Semua');
  const items = useMemo(() => (cat === 'Semua' ? gallery : gallery.filter((g) => g.category === cat)), [cat]);

  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Dokumentasi jurusan"
        lead="Kegiatan pembelajaran, praktik siswa, fasilitas, karya siswa, dan kegiatan sekolah. Klik gambar untuk memperbesar."
        crumbs={[{ label: 'Galeri' }]}
      />
      <section className="section">
        <div className="container">
          <p className="notice">
            <Icon name="info" size={18} />
            <span>
              Semua gambar masih placeholder. Tambahkan foto asli ke <code>public/galeri</code> lalu isi{' '}
              <code>src</code> pada <code>src/data/gallery.js</code>.
            </span>
          </p>

          <div className="filters" role="group" aria-label="Saring kategori galeri">
            {['Semua', ...galleryCategories].map((c) => (
              <button
                key={c}
                type="button"
                className={`filter ${cat === c ? 'is-on' : ''}`}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="result-count" aria-live="polite">
            {items.length} gambar
          </p>
          <Gallery items={items} />
        </div>
      </section>
    </>
  );
}
