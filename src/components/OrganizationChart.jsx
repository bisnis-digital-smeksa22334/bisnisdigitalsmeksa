import { useState } from 'react';
import Icon from './Icon.jsx';
import Placeholder from './Placeholder.jsx';
import TeacherCard from './TeacherCard.jsx';
import { lead, staff, groups } from '../data/organization.js';
import { getTeacher, teachers } from '../data/teachers.js';

function OrgNode({ entry, size = 'md' }) {
  const t = getTeacher(entry.id);
  if (!t) return null;
  return (
    <article className={`org-node org-node--${size}`}>
      <Placeholder variant="person" src={t.photo} alt={`Foto ${t.name}`} label="Foto" ratio="1 / 1" className="org-avatar" />
      <div className="org-node-text">
        <span className="org-role">{entry.role}</span>
        <strong>{t.name}</strong>
        {entry.note && <span className="org-note">{entry.note}</span>}
      </div>
    </article>
  );
}

function Chart() {
  return (
    <div className="org-scroll" tabIndex={0} aria-label="Bagan struktur organisasi, dapat digulir ke samping">
      <div className="org-tree">
        <div className="org-lead">
          <OrgNode entry={lead} size="lg" />
        </div>
        <span className="org-trunk" aria-hidden="true" />

        <div className="org-tiers">
          <ul className="org-row org-row--staff">
            {staff.map((s) => (
              <li key={s.role}>
                <OrgNode entry={s} />
              </li>
            ))}
          </ul>

          <ul className="org-row org-row--groups">
            {groups.map((g) => (
              <li key={g.id}>
                <section className="org-group" aria-label={g.title}>
                  <h3>{g.title}</h3>
                  {g.members.map((m) => (
                    <OrgNode key={`${g.id}-${m.id}`} entry={m} size="sm" />
                  ))}
                </section>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ListView() {
  const sections = [
    { title: 'Ketua Program Keahlian', items: [lead] },
    { title: 'Sekretaris, Bendahara & Toolman', items: staff },
    ...groups.map((g) => ({ title: g.title, items: g.members })),
  ];
  return (
    <div className="org-list">
      {sections.map((s) => (
        <section key={s.title} className="org-list-section">
          <h3>{s.title}</h3>
          <ul>
            {s.items.map((entry) => (
              <li key={`${s.title}-${entry.id}-${entry.role}`}>
                <OrgNode entry={entry} size="sm" />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function OrganizationChart({ withCards = false }) {
  const isWide = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
  const [view, setView] = useState(isWide ? 'bagan' : 'daftar');

  return (
    <div className="org">
      <div className="org-toolbar" role="tablist" aria-label="Pilih tampilan struktur">
        <button
          type="button"
          role="tab"
          aria-selected={view === 'bagan'}
          className={view === 'bagan' ? 'is-on' : ''}
          onClick={() => setView('bagan')}
        >
          <Icon name="tree" size={16} /> Bagan
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={view === 'daftar'}
          className={view === 'daftar' ? 'is-on' : ''}
          onClick={() => setView('daftar')}
        >
          <Icon name="list" size={16} /> Daftar
        </button>
      </div>

      {view === 'bagan' ? (
        <>
          <p className="org-hint">Geser bagan ke samping pada layar kecil.</p>
          <Chart />
        </>
      ) : (
        <ListView />
      )}

      {withCards && (
        <div className="org-cards">
          <h3 className="org-cards-title">Kartu profil</h3>
          <div className="teacher-grid">
            {teachers.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
