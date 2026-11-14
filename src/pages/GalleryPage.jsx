import { useEffect, useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Gallery from '../components/Gallery.jsx';
import Icon from '../components/Icon.jsx';
import { gallery, galleryCategories } from '../data/gallery.js';
import { getGallery } from '../lib/api.js';

export default function GalleryPage() {
  const [cat, setCat] = useState('Semua');
  const [databaseItems, setDatabaseItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadGallery() {
      try {
        const data = await getGallery();

        if (!active) return;

        const normalized = (Array.isArray(data) ? data : []).map((item) => ({
          id: `db-${item.id}`,
          category: item.category || 'Kegiatan Sekolah',
          title: item.title,
          description: item.description || '',
          src: item.image_url,
          size: '',
        }));

        setDatabaseItems(normalized);
        setApiError('');
      } catch (error) {
        if (active) {
          setApiError('Galeri online belum dapat dimuat. Foto statis tetap ditampilkan.');
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadGallery();

    return () => {
      active = false;
    };
  }, []);

  const allItems = useMemo(
    () => [...databaseItems, ...gallery],
    [databaseItems]
  );

  const items = useMemo(
    () => cat === 'Semua'
      ? allItems
      : allItems.filter((item) => item.category === cat),
    [cat, allItems]
  );

  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Dokumentasi jurusan"
        lead="Kegiatan pembelajaran, praktik siswa, guru, fasilitas, karya, dan prestasi Bisnis Digital."
        crumbs={[{ label: 'Galeri' }]}
      />

      <section className="section">
        <div className="container">
          <p className="notice">
            <Icon name="info" size={18} />
            <span>
              Galeri menggabungkan dokumentasi foto website dan foto yang diterbitkan melalui Panel Admin.
            </span>
          </p>

          {apiError && (
            <p className="notice" role="status">
              <Icon name="alert-circle" size={18} />
              <span>{apiError}</span>
            </p>
          )}

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
            {loading ? 'Memuat galeri...' : `${items.length} gambar`}
          </p>

          <Gallery items={items} />
        </div>
      </section>
    </>
  );
}
