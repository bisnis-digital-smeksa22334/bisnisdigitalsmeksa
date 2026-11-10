import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { facilities } from '../data/learning.js';

export default function Facilities() {
  return (
    <>
      <PageHeader
        eyebrow="Fasilitas"
        title="Sarana pendukung belajar"
        lead="Kategori fasilitas yang digunakan dalam pembelajaran. Rincian dan foto asli diisi setelah verifikasi."
        crumbs={[{ label: 'Fasilitas' }]}
      />
      <section className="section">
        <div className="container">
          <p className="notice">
            <Icon name="info" size={18} />
            <span>
              Halaman ini tidak mengklaim jumlah, spesifikasi, atau kondisi fasilitas. Tambahkan foto lewat{' '}
              <code>src/data/learning.js</code> setelah dokumentasi resmi tersedia.
            </span>
          </p>

          <div className="fac-list">
            {facilities.map((f, i) => (
              <Reveal as="article" key={f.id} className={`fac-row ${i % 2 ? 'fac-row--flip' : ''}`}>
                <Placeholder label={`Foto ${f.title}`} ratio="3 / 2" src={f.photo} alt={f.title} />
                <div className="fac-text">
                  <span className="fac-icon">
                    <Icon name={f.icon} size={24} />
                  </span>
                  <h2>{f.title}</h2>
                  <p>{f.text}</p>
                  <span className="chip chip--wait">Menunggu verifikasi</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
