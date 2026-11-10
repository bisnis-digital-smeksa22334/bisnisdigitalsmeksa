import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import HeroVisual from '../components/HeroVisual.jsx';
import Placeholder from '../components/Placeholder.jsx';
import NewsCard, { formatDate } from '../components/NewsCard.jsx';
import { SCHOOL } from '../config.js';
import { news } from '../data/news.js';
import { gallery } from '../data/gallery.js';
import { teachers, getTeacher } from '../data/teachers.js';
import { lead, staff } from '../data/organization.js';
import { facilities } from '../data/learning.js';

const latest = [...news].sort((a, b) => b.date.localeCompare(a.date));

export default function Home() {
  const works = gallery.filter((g) => g.category === 'Karya Siswa');
  const leadTeacher = getTeacher(lead.id);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light">
              {SCHOOL.name} · {SCHOOL.academicYear}
            </p>
            <h1>
              Bisnis <span className="hero-accent">Digital</span>
            </h1>
            <p className="lead lead--light">
              {SCHOOL.program}. Tempat siswa belajar memasarkan, mengelola, dan mengembangkan usaha dengan teknologi
              digital.
            </p>
            <div className="hero-actions">
              <Link to="/profil" className="btn btn-light">
                Lihat Profil <Icon name="arrow" size={18} />
              </Link>
              <Link to="/kurikulum" className="btn btn-outline-light">
                Jelajahi Pembelajaran
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* FAKTA RINGKAS (diturunkan dari dokumen struktur organisasi) */}
      <section className="facts" aria-label="Ringkasan">
        <div className="container facts-grid">
          <div>
            <strong>3</strong>
            <span>tingkat kelas: X, XI, XII</span>
          </div>
          <div>
            <strong>9</strong>
            <span>rombel — 3 kelas tiap tingkat</span>
          </div>
          <div>
            <strong>{teachers.length}</strong>
            <span>pendidik tercantum dalam struktur</span>
          </div>
          <div>
            <strong>{SCHOOL.academicYear}</strong>
            <span>tahun ajaran struktur organisasi</span>
          </div>
        </div>
      </section>

      {/* KEGIATAN TERBARU — daftar editorial */}
      <section className="section">
        <div className="container split split--wide-left">
          <Reveal>
            <SectionTitle
              eyebrow="Kegiatan terbaru"
              title="Yang sedang berjalan di jurusan"
              lead="Pengumuman, agenda, dan kabar terbaru. Entri berikut masih contoh sampai data resmi diisi."
            />
            <Link to="/berita" className="text-link">
              Semua berita & pengumuman <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
          <Reveal as="ol" className="timeline" delay={80}>
            {latest.slice(0, 4).map((n) => (
              <li key={n.id}>
                <time dateTime={n.date}>{formatDate(n.date)}</time>
                <Link to={`/berita/${n.id}`}>
                  <span className="timeline-cat">{n.category}</span>
                  <strong>{n.title}</strong>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SOROTAN KARYA SISWA — strip horizontal */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Sorotan karya siswa"
              title="Karya dari ruang praktik"
              lead="Placeholder berlabel DEMO. Ganti dengan karya siswa yang sudah mendapat izin dipublikasikan."
            />
          </Reveal>
        </div>
        <div className="strip" tabIndex={0} aria-label="Daftar karya siswa, dapat digulir">
          <ul className="strip-track">
            {works.map((w, i) => (
              <li key={w.id}>
                <Placeholder variant="work" label={w.title} ratio={i % 2 ? '4 / 5' : '1 / 1'} src={w.src} alt={w.title} />
                <p>
                  <span className="chip chip--demo">DEMO</span> {w.title}
                </p>
              </li>
            ))}
            <li className="strip-more">
              <Link to="/galeri">
                Lihat galeri <Icon name="arrow" size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* PREVIEW STRUKTUR ORGANISASI */}
      <section className="section">
        <div className="container org-preview">
          <Reveal className="org-preview-copy">
            <SectionTitle
              eyebrow={`Struktur organisasi ${SCHOOL.academicYear}`}
              title="Dipimpin ketua program keahlian"
              lead="Ketua program, sekretaris, bendahara, toolman, wali kelas X–XII, dan guru produktif."
            />
            <Link to="/struktur-organisasi" className="btn btn-primary">
              Lihat bagan lengkap <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
          <Reveal className="org-preview-card" delay={80}>
            <div className="mini-lead">
              <Placeholder variant="person" src={leadTeacher?.photo} label="Foto" ratio="1 / 1" className="mini-avatar" />
              <div>
                <span className="org-role">{lead.role}</span>
                <strong>{leadTeacher?.name}</strong>
              </div>
            </div>
            <ul className="mini-staff">
              {staff.map((s) => (
                <li key={s.role}>
                  <span className="org-role">{s.role}</span>
                  <strong>{getTeacher(s.id)?.name}</strong>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PREVIEW FASILITAS — grid asimetris */}
      <section className="section section--navy">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Fasilitas"
              title="Sarana belajar jurusan"
              lead="Daftar fasilitas masih menunggu verifikasi. Tidak ada klaim fasilitas yang belum dikonfirmasi."
            />
          </Reveal>
          <div className="fac-preview">
            {facilities.slice(0, 3).map((f, i) => (
              <Reveal key={f.id} className={`fac-tile fac-tile--${i}`} delay={i * 70}>
                <Icon name={f.icon} size={26} />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/fasilitas" className="text-link text-link--light">
            Selengkapnya <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* TAUTAN PEMBELAJARAN */}
      <section className="section">
        <div className="container twin">
          <Reveal as={Link} to="/digital-marketing-lab" className="twin-card">
            <Icon name="megaphone" size={28} />
            <h3>Digital Marketing Lab</h3>
            <p>Konsep pembelajaran pemasaran digital, lengkap dengan simulasi kampanye.</p>
            <span className="more">
              Coba simulasi <Icon name="arrow" size={16} />
            </span>
          </Reveal>
          <Reveal as={Link} to="/etika-digital" className="twin-card" delay={80}>
            <Icon name="lock" size={28} />
            <h3>Etika Digital</h3>
            <p>Panduan singkat menjaga keamanan, privasi, dan sikap di ruang digital.</p>
            <span className="more">
              Pelajari <Icon name="arrow" size={16} />
            </span>
          </Reveal>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Berita terbaru" title="Kabar dari Bisnis Digital" />
          </Reveal>
          <div className="news-grid">
            {latest.slice(0, 3).map((n, i) => (
              <Reveal key={n.id} delay={i * 70}>
                <NewsCard item={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
