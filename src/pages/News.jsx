
import { useEffect, useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import NewsCard from '../components/NewsCard.jsx';
import Icon from '../components/Icon.jsx';
import { getNews } from '../lib/api.js';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('Semua');
  const [order, setOrder] = useState('terbaru');

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews();
        setNews(data || []);
      } catch (err) {
        setError('Berita belum dapat dimuat. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  const newsCategories = [...new Set(news.map((n) => n.category))];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return news
      .filter((n) => (cat === 'Semua' ? true : n.category === cat))
      .filter((n) =>
        q
          ? `${n.title} ${n.excerpt} ${n.category}`
              .toLowerCase()
              .includes(q)
          : true
      )
      .sort((a, b) =>
        order === 'terbaru'
          ? b.date.localeCompare(a.date)
          : a.date.localeCompare(b.date)
      );
  }, [news, query, cat, order]);

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
        lead="Berita terbaru, pengumuman, agenda, informasi lomba, dan dokumentasi acara."
        crumbs={[{ label: 'Berita & Pengumuman' }]}
      />

      <section className="section">
        <div className="container">
          {loading ? (
            <p>Memuat berita...</p>
          ) : error ? (
            <p role="alert">{error}</p>
          ) : (
            <>
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
                    <button
                      type="button"
                      className="search-clear"
                      onClick={() => setQuery('')}
                      aria-label="Hapus pencarian"
                    >
                      <Icon name="close" size={16} />
                    </button>
                  )}
                </label>

                <label className="select" htmlFor="urut-berita">
                  <span className="sr-only">Urutkan</span>
                  <select
                    id="urut-berita"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                  >
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
                  <h2>{news.length === 0 ? 'Belum ada berita' : 'Tidak ada hasil'}</h2>
                  <p>
                    {news.length === 0
                      ? 'Berita akan ditampilkan di sini setelah tersedia.'
                      : 'Coba kata kunci lain atau ganti kategori.'}
                  </p>
                  {news.length > 0 && (
                    <button type="button" className="btn btn-primary" onClick={reset}>
                      Atur ulang pencarian
                    </button>
                  )}
                </div>
              ) : (
                <div className="news-grid news-grid--list">
                  {results.map((n) => (
                    <NewsCard key={n.id} item={n} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
