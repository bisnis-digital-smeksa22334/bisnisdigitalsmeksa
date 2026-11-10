import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import NewsCard, { formatDate } from '../components/NewsCard.jsx';
import Icon from '../components/Icon.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { news, getNews } from '../data/news.js';

export default function NewsDetail() {
  const { id } = useParams();
  const item = getNews(id);

  if (!item) {
    return (
      <section className="section">
        <div className="container notfound">
          <p className="eyebrow">Tidak ditemukan</p>
          <h1>Berita tidak tersedia</h1>
          <p className="lead">Entri yang kamu cari mungkin sudah dihapus atau alamatnya berubah.</p>
          <Link to="/berita" className="btn btn-primary">
            Kembali ke daftar berita
          </Link>
        </div>
      </section>
    );
  }

  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const idx = sorted.findIndex((n) => n.id === item.id);
  const newer = sorted[idx - 1];
  const older = sorted[idx + 1];
  const related = sorted.filter((n) => n.category === item.category && n.id !== item.id).slice(0, 2);

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
              {item.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <nav className="pager" aria-label="Berita lain">
              {newer ? (
                <Link to={`/berita/${newer.id}`}>
                  <small>
                    <Icon name="left" size={14} /> Lebih baru
                  </small>
                  {newer.title}
                </Link>
              ) : (
                <span />
              )}
              {older ? (
                <Link to={`/berita/${older.id}`} className="pager-next">
                  <small>
                    Lebih lama <Icon name="right" size={14} />
                  </small>
                  {older.title}
                </Link>
              ) : (
                <span />
              )}
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
