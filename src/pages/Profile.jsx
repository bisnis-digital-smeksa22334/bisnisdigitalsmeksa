import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { profileContent as c } from '../data/content.js';
import { SCHOOL } from '../config.js';

const SECTIONS = [
  { id: 'tentang', label: 'Apa itu Bisnis Digital' },
  { id: 'tujuan', label: 'Tujuan' },
  { id: 'kompetensi', label: 'Kompetensi' },
  { id: 'visi-misi', label: 'Visi & Misi' },
  { id: 'prospek', label: 'Prospek' },
];

// Router berbasis hash, jadi gulir ke bagian lewat JS (bukan <a href="#...">).
const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function Profile() {
  return (
    <>
      <PageHeader
        eyebrow="Profil jurusan"
        title={SCHOOL.program}
        lead={`${SCHOOL.name} — mengenal bidang keahlian, tujuan belajar, kompetensi, dan arah setelah lulus.`}
        crumbs={[{ label: 'Profil Jurusan' }]}
      />

      <div className="subnav" role="navigation" aria-label="Bagian halaman">
        <div className="container subnav-inner">
          {SECTIONS.map((s) => (
            <button key={s.id} type="button" onClick={() => goTo(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <section id="tentang" className="section scroll-target">
        <div className="container split">
          <Reveal>
            <SectionTitle eyebrow="Tentang" title="Apa itu Bisnis Digital?" />
            {c.intro.map((p) => (
              <p key={p} className="prose">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal className="fact-card" delay={80}>
            <h3>Ringkasan</h3>
            <dl>
              <div>
                <dt>Sekolah</dt>
                <dd>{SCHOOL.name}</dd>
              </div>
              <div>
                <dt>Program</dt>
                <dd>{SCHOOL.program}</dd>
              </div>
              <div>
                <dt>Tingkat</dt>
                <dd>Kelas X, XI, XII (masing-masing 3 rombel)</dd>
              </div>
              <div>
                <dt>Tahun ajaran</dt>
                <dd>{SCHOOL.academicYear}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="tujuan" className="section section--tint scroll-target">
        <div className="container split">
          <Reveal>
            <SectionTitle eyebrow="Tujuan pembelajaran" title="Arah belajar di jurusan" />
          </Reveal>
          <Reveal as="ol" className="numbered" delay={80}>
            {c.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="kompetensi" className="section scroll-target">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Kompetensi"
              title="Yang dikembangkan siswa"
              lead="Ringkasan umum bidang keahlian. Sesuaikan dengan dokumen kurikulum resmi jurusan."
            />
          </Reveal>
          <ul className="comp-grid">
            {c.competencies.map((k, i) => (
              <Reveal as="li" key={k.title} delay={i * 50}>
                <span className="comp-icon">
                  <Icon name={k.icon} size={22} />
                </span>
                <h3>{k.title}</h3>
                <p>{k.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="visi-misi" className="section section--navy scroll-target">
        <div className="container split">
          <Reveal>
            <SectionTitle eyebrow="Visi & misi" title="Rumusan resmi menyusul" />
            <p className="notice notice--dark">
              <Icon name="info" size={18} />
              <span>Placeholder. Rumusan visi dan misi resmi konsentrasi keahlian belum diberikan, sehingga tidak dikarang.</span>
            </p>
          </Reveal>
          <Reveal className="vm" delay={80}>
            <div className="vm-block">
              <h3>Visi</h3>
              <p>{c.vision}</p>
            </div>
            <div className="vm-block">
              <h3>Misi</h3>
              <ol>
                {c.mission.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="prospek" className="section scroll-target">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Prospek"
              title="Setelah lulus"
              lead="Gambaran umum jalur yang dapat ditempuh lulusan. Bukan jaminan penempatan kerja."
            />
          </Reveal>
          <div className="prospects">
            {c.prospects.map((p, i) => (
              <Reveal key={p.title} className="prospect" delay={i * 60}>
                <span className="prospect-no">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
