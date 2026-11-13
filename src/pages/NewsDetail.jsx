
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import NewsCard, { formatDate } from '../components/NewsCard.jsx';
import Icon from '../components/Icon.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { getNews, getNewsDetail } from '../lib/api.js';

export default function NewsDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      setError('');

      try {
        const data = await getNewsDetail(id);
        setItem(data);

        const allNews = await getNews();
        const relatedData = allNews
          .filter((news) => news.category === data.category && news.id !== data.id)
          .sort((a, b) => b.date.localeCompare(a.date))
          .slice(0, 2);

        setRelated(relatedData);
      } catch (err) {
        setError('Berita gagal dimuat. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [id]);

  if (loading) {
    return <section className="section"><div className="container"><p>Memuat berita...</p></div></section>;
  }

  if (error || !item) {
    return (
      <section className="section">
        <div className="container notfound">
          <p className="eyebrow">{error ? 'Terjadi kesalahan' : 'Tidak ditemukan'}</p>
          <h1>{error ? 'Berita gagal dimuat' : 'Berita tidak tersedia'}</h1>
          <p className="lead">
            {error || 'Entri yang kamu cari mungkin sudah dihapus atau alamatnya berubah.'}
          </p>
          <Link to="/berita" className="btn btn-primary">
            Kembali ke daftar berita
          </Link>
        </div>
      </section>
    );
  }

  const body = Array.isArray(item.body) ? item.body : [];

  return (
    <>
      <PageHeader
        eyebrow={item.category}
        title={item.title}
        crumbs={[{ label: 'Berita & Pengumuman', to: '/berita' }, { label: 'Detail' }]}
      >
        <p className="detail-meta">
          <time dateTime={item.date}>
            <Icon name="calendar" size={16} /> {formatDate(item.date)}
          </time>
          {item.demo && <span className="chip chip--demo">DEMO</span>}
        </p>
      </PageHeader>

      <section className="section">
        <div className="container article">
          <article>
            <Placeholder variant="photo" label="Foto kegiatan belum tersedia" ratio="16 / 9" />

            {item.demo && (
              <p className="notice">
                <Icon name="info" size={18} />
                <span>Isi berita ini adalah contoh dan bukan informasi resmi sekolah.</span>
              </p>
            )}

            <div className="prose-block">
              {body.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <nav className="pager" aria-label="Berita lain">
              <Link to="/berita">
                <small><Icon name="left" size={14} /> Kembali ke berita</small>
                Semua berita
              </Link>
            </nav>
          </article>

          <aside className="article-side" aria-label="Terkait">
            <Link to="/berita" className="text-link">
              <Icon name="back" size={16} /> Semua berita
            </Link>

            {related.length > 0 && (
              <>
                <h2>Terkait</h2>
                {related.map((n) => (
                  <NewsCard key={n.id} item={n} variant="compact" />
                ))}
              </>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
