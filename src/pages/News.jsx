import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import NewsCard from '../components/NewsCard.jsx';
import Icon from '../components/Icon.jsx';
import { news, newsCategories } from '../data/news.js';

export default function News() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('Semua');
  const [order, setOrder] = useState('terbaru');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news
      .filter((n) => (cat === 'Semua' ? true : n.category === cat))
      .filter((n) => (q ? `${n.title} ${n.excerpt} ${n.category}`.toLowerCase().includes(q) : true))
      .sort((a, b) => (order === 'terbaru' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
  }, [query, cat, order]);

  const reset = () => {
    setQuery('');
    setCat('Semua');
    setOrder('terbaru');
  };

  return (
    <>
      <PageHeader
        eyebrow="Berita & pengumuman"
        title="Kabar dari jurusan"
        lead="Berita terbaru, pengumuman, agenda, informasi lomba, dan dokumentasi acara. Entri saat ini adalah contoh."
        crumbs={[{ label: 'Berita & Pengumuman' }]}
      />
      <section className="section">
        <div className="container">
          <div className="news-tools">
            <label className="search" htmlFor="cari-berita">
              <Icon name="search" size={18} />
              <span className="sr-only">Cari berita</span>
              <input
                id="cari-berita"
                type="search"
                placeholder="Cari judul atau kata kunci…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button type="button" className="search-clear" onClick={() => setQuery('')} aria-label="Hapus pencarian">
                  <Icon name="close" size={16} />
                </button>
              )}
            </label>
            <label className="select" htmlFor="urut-berita">
              <span className="sr-only">Urutkan</span>
              <select id="urut-berita" value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="terbaru">Terbaru dulu</option>
                <option value="terlama">Terlama dulu</option>
              </select>
            </label>
          </div>

          <div className="filters" role="group" aria-label="Saring kategori berita">
            {['Semua', ...newsCategories].map((c) => (
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
            {results.length} entri ditemukan
          </p>

          {results.length === 0 ? (
            <div className="empty-state">
              <Icon name="search" size={28} />
              <h2>Tidak ada hasil</h2>
              <p>Coba kata kunci lain atau ganti kategori.</p>
              <button type="button" className="btn btn-primary" onClick={reset}>
                Atur ulang pencarian
              </button>
            </div>
          ) : (
            <div className="news-grid news-grid--list">
              {results.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
