import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Placeholder from '../components/Placeholder.jsx';
import { grades, subjectPlaceholders, pjblSteps } from '../data/learning.js';

export default function Curriculum() {
  const [active, setActive] = useState('x');
  const g = grades.find((x) => x.id === active);

  return (
    <>
      <PageHeader
        eyebrow="Kurikulum & pembelajaran"
        title="Belajar bertahap dari kelas X sampai XII"
        lead="Garis besar fokus belajar tiap tingkat. Daftar mata pelajaran resmi akan diisi dari dokumen kurikulum."
        crumbs={[{ label: 'Kurikulum & Pembelajaran' }]}
      />

      <section className="section">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Pilih tingkat kelas">
            {grades.map((x) => (
              <button
                key={x.id}
                type="button"
                role="tab"
                id={`tab-${x.id}`}
                aria-selected={active === x.id}
                aria-controls="panel-kelas"
                className={active === x.id ? 'is-on' : ''}
                onClick={() => setActive(x.id)}
              >
                {x.label}
              </button>
            ))}
          </div>

          <div id="panel-kelas" role="tabpanel" aria-labelledby={`tab-${active}`} className="grade-panel" key={g.id}>
            <div className="grade-head">
              <h2>{g.title}</h2>
              <p className="lead">{g.summary}</p>
            </div>

            <div className="grade-cols">
              <div>
                <h3 className="mini-title">Fokus belajar</h3>
                <ul className="check-list">
                  {g.focus.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={18} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mini-title">Kompetensi pembelajaran</h3>
                <ul className="check-list">
                  {g.competencies.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={18} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mini-title">Informasi mata pelajaran</h3>
                <ul className="placeholder-list">
                  {subjectPlaceholders.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="sample">
              <Placeholder variant="work" label="Hasil praktik siswa" ratio="16 / 9" />
              <div>
                <span className="chip chip--demo">DEMO</span>
                <p>{g.sample}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Metode"
              title="Pembelajaran berbasis proyek"
              lead="Lima tahap yang membiasakan siswa bekerja seperti di dunia usaha."
            />
          </Reveal>
          <ol className="steps">
            {pjblSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 60}>
                <span className="steps-no">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
