import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import TeacherCard from '../components/TeacherCard.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { teachers, teacherFilters } from '../data/teachers.js';

export default function Teachers() {
  const [filter, setFilter] = useState('all');
  const list = useMemo(
    () => (filter === 'all' ? teachers : teachers.filter((t) => t.tags.includes(filter))),
    [filter],
  );

  return (
    <>
      <PageHeader
        eyebrow="Guru & tenaga pengajar"
        title="Pendidik Bisnis Digital"
        lead="Daftar mengikuti dokumen struktur organisasi. Biodata dan riwayat tidak ditampilkan sampai data resmi tersedia."
        crumbs={[{ label: 'Guru & Tenaga Pengajar' }]}
      />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Saring berdasarkan peran">
            {teacherFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`filter ${filter === f.id ? 'is-on' : ''}`}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="result-count" aria-live="polite">
            <Icon name="users" size={16} /> {list.length} pendidik
          </p>
          <div className="teacher-grid">
            {list.map((t, i) => (
              <Reveal key={t.id} delay={(i % 4) * 40}>
                <TeacherCard teacher={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
