import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { activities } from '../data/learning.js';

export default function Activities() {
  const [feature, ...rest] = activities;
  return (
    <>
      <PageHeader
        eyebrow="Kegiatan jurusan"
        title="Belajar lewat kegiatan"
        lead="Bentuk-bentuk kegiatan pembelajaran di jurusan. Dokumentasi kegiatan nyata ditambahkan bertahap."
        crumbs={[{ label: 'Kegiatan Jurusan' }]}
      />
      <section className="section">
        <div className="container">
          {/* Fitur utama: layout lebar */}
          <Reveal as="article" className="act-feature">
            <Placeholder variant="work" label="Dokumentasi proyek kelas" ratio="16 / 10" />
            <div className="act-feature-text">
              <span className="eyebrow">Kegiatan utama</span>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
              <Link to="/kurikulum" className="text-link">
                Lihat metode pembelajaran <Icon name="arrow" size={16} />
              </Link>
            </div>
          </Reveal>

          {/* Daftar bernomor: layout editorial dua kolom bergeser */}
          <ol className="act-list">
            {rest.map((a, i) => (
              <Reveal as="li" key={a.id} className="act-item" delay={(i % 2) * 70}>
                <span className="act-no">{String(i + 2).padStart(2, '0')}</span>
                <div>
                  <h3>
                    <Icon name={a.icon} size={20} /> {a.title}
                  </h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="cta-band">
            <p>Lihat dokumentasi dan kabar kegiatan terbaru.</p>
            <div>
              <Link to="/galeri" className="btn btn-light">
                Buka galeri
              </Link>
              <Link to="/berita" className="btn btn-outline-light">
                Berita & agenda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
