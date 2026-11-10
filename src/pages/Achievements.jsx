import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { achievements, achievementCategories } from '../data/learning.js';

export default function Achievements() {
  const [cat, setCat] = useState('Semua');
  const list = cat === 'Semua' ? achievements : achievements.filter((a) => a.category === cat);

  return (
    <>
      <PageHeader
        eyebrow="Prestasi"
        title="Capaian siswa dan alumni"
        lead="Seluruh entri di bawah berlabel DEMO sampai data prestasi resmi dimasukkan."
        crumbs={[{ label: 'Prestasi' }]}
      />
      <section className="section">
        <div className="container">
          <p className="notice">
            <Icon name="info" size={18} />
            <span>Data contoh. Tidak ada prestasi nyata yang diklaim pada halaman ini.</span>
          </p>

          <div className="filters" role="group" aria-label="Saring kategori prestasi">
            {['Semua', ...achievementCategories].map((c) => (
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

          <ul className="ach-list">
            {list.length === 0 && <li className="empty">Belum ada entri pada kategori ini.</li>}
            {list.map((a, i) => (
              <Reveal as="li" key={a.id} className="ach-item" delay={(i % 3) * 40}>
                <span className="ach-year">{a.year}</span>
                <div className="ach-main">
                  <span className="ach-cat">{a.category}</span>
                  <h3>{a.title}</h3>
                  <p>{a.level}</p>
                </div>
                <span className="chip chip--demo">DEMO</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
