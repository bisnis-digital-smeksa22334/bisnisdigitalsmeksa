import PageHeader from '../components/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { storyThemes } from '../data/content.js';

export default function TeacherStories() {
  return (
    <>
      <PageHeader
        eyebrow="Cerita guru"
        title="Suara dari ruang kelas"
        lead="Ruang untuk pengalaman, motivasi, dan pesan para pendidik Bisnis Digital."
        crumbs={[{ label: 'Cerita Guru' }]}
      />
      <section className="section">
        <div className="container">
          <p className="notice">
            <Icon name="info" size={18} />
            <span>
              Placeholder. Cerita asli belum tersedia, jadi tidak ada kutipan yang dikaitkan dengan nama guru mana pun.
              Edit tema dan isi di <code>src/data/content.js</code>.
            </span>
          </p>

          <div className="stories">
            {storyThemes.map((s, i) => (
              <Reveal as="article" key={s.id} className={`story ${i % 2 ? 'story--flip' : ''}`}>
                <div className="story-label">
                  <span className="story-no">0{i + 1}</span>
                  <h2>{s.title}</h2>
                  <p className="story-prompt">{s.prompt}</p>
                </div>
                <blockquote className="story-body">
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>
                  <p>Cerita dari guru akan ditampilkan di sini setelah naskah asli dikumpulkan dan disetujui.</p>
                  <footer>
                    <span className="chip chip--demo">PLACEHOLDER</span> Nama guru — jabatan
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
