import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Icon from '../components/Icon.jsx';
import { ethicsTopics, ethicsQuiz } from '../data/content.js';

function Accordion() {
  const [open, setOpen] = useState(ethicsTopics[0].id);
  return (
    <div className="accordion">
      {ethicsTopics.map((t) => {
        const isOpen = open === t.id;
        return (
          <div key={t.id} className={`acc-item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`acc-${t.id}`}
                id={`acc-btn-${t.id}`}
                onClick={() => setOpen(isOpen ? null : t.id)}
              >
                <span className="acc-icon">
                  <Icon name={t.icon} size={20} />
                </span>
                <span className="acc-title">{t.title}</span>
                <Icon name="chevron" size={18} className="acc-chev" />
              </button>
            </h3>
            <div id={`acc-${t.id}`} role="region" aria-labelledby={`acc-btn-${t.id}`} hidden={!isOpen}>
              <p>{t.summary}</p>
              <div className="dodont">
                <div className="do">
                  <h4>Lakukan</h4>
                  <ul>
                    {t.dos.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="dont">
                  <h4>Hindari</h4>
                  <ul>
                    {t.donts.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Quiz() {
  const [answers, setAnswers] = useState({});
  const done = Object.keys(answers).length === ethicsQuiz.length;
  const score = ethicsQuiz.filter((q, i) => answers[i] === q.answer).length;

  return (
    <div className="quiz">
      {ethicsQuiz.map((q, i) => {
        const picked = answers[i];
        const answered = picked !== undefined;
        return (
          <fieldset key={q.q} className="quiz-q" disabled={answered}>
            <legend>
              <span>{i + 1}</span> {q.q}
            </legend>
            {q.options.map((o, j) => {
              let state = '';
              if (answered && j === q.answer) state = 'is-right';
              else if (answered && j === picked) state = 'is-wrong';
              return (
                <label key={o} className={`quiz-opt ${state}`}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    checked={picked === j}
                    onChange={() => setAnswers((a) => ({ ...a, [i]: j }))}
                  />
                  <span>{o}</span>
                </label>
              );
            })}
            {answered && <p className="quiz-why">{q.why}</p>}
          </fieldset>
        );
      })}
      <div className="quiz-foot" aria-live="polite">
        {done ? (
          <>
            <strong>
              Skor: {score} dari {ethicsQuiz.length}
            </strong>
            <button type="button" className="btn btn-primary" onClick={() => setAnswers({})}>
              Ulangi
            </button>
          </>
        ) : (
          <span>
            Terjawab {Object.keys(answers).length} dari {ethicsQuiz.length}
          </span>
        )}
      </div>
    </div>
  );
}

export default function DigitalEthics() {
  return (
    <>
      <PageHeader
        eyebrow="Etika digital"
        title="Cerdas dan bertanggung jawab di ruang digital"
        lead="Enam topik singkat untuk siswa: etika internet, keamanan, komunikasi, jejak digital, media sosial, dan literasi."
        crumbs={[{ label: 'Etika Digital' }]}
      />
      <section className="section">
        <div className="container split split--wide-right">
          <div>
            <SectionTitle eyebrow="Enam topik" title="Pelajari satu per satu" />
            <Accordion />
          </div>
          <div className="quiz-wrap">
            <SectionTitle eyebrow="Cek cepat" title="Apa yang akan kamu lakukan?" />
            <Quiz />
          </div>
        </div>
      </section>
    </>
  );
}
