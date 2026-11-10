import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import { SCHOOL } from '../config.js';

const TOPICS = ['Calon peserta didik', 'Orang tua / wali', 'Siswa', 'Guru', 'Umum'];
const STORE_KEY = 'bd_pesan_simulasi';
const EMPTY = { nama: '', email: '', topik: TOPICS[0], pesan: '' };

function validate(v) {
  const e = {};
  if (v.nama.trim().length < 2) e.nama = 'Isi nama minimal 2 karakter.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Format email belum benar.';
  if (v.pesan.trim().length < 10) e.pesan = 'Tulis pesan minimal 10 karakter.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (ev) => setValues((v) => ({ ...v, [k]: ev.target.value }));

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) return;
    // Simulasi front-end: simpan lokal saja, tidak ada pengiriman ke server.
    try {
      const old = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      old.push({ ...values, waktu: new Date().toISOString() });
      localStorage.setItem(STORE_KEY, JSON.stringify(old));
    } catch {
      /* penyimpanan lokal tidak tersedia — abaikan */
    }
    setSent(true);
  };

  const again = () => {
    setValues(EMPTY);
    setErrors({});
    setSent(false);
  };

  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SCHOOL.mapsQuery)}`;

  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Hubungi kami"
        lead="Punya pertanyaan tentang jurusan? Tulis di formulir atau kunjungi website resmi sekolah."
        crumbs={[{ label: 'Kontak' }]}
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <dl>
              <div>
                <dt>Sekolah</dt>
                <dd>{SCHOOL.name}</dd>
              </div>
              <div>
                <dt>Jurusan</dt>
                <dd>{SCHOOL.program}</dd>
              </div>
              <div>
                <dt>Alamat</dt>
                <dd>{SCHOOL.address}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{SCHOOL.email || 'Belum tersedia — isi di src/config.js'}</dd>
              </div>
            </dl>
            <div className="contact-actions">
              <a className="btn btn-primary" href={SCHOOL.website} target="_blank" rel="noreferrer noopener">
                <Icon name="link" size={18} /> Website resmi sekolah
              </a>
              <a className="btn btn-ghost" href={maps} target="_blank" rel="noreferrer noopener">
                <Icon name="pin" size={18} /> Buka di Google Maps
              </a>
            </div>
            <p className="notice">
              <Icon name="info" size={18} />
              <span>Alamat dan tautan website bersumber dari direktori publik. Mohon dicek ulang dengan data resmi sekolah.</span>
            </p>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-done" role="status">
                <Icon name="check" size={32} />
                <h2>Pesan tercatat (simulasi)</h2>
                <p>
                  Terima kasih, {values.nama}. Formulir ini hanya simulasi front-end: pesan disimpan di peramban kamu dan
                  tidak dikirim ke pihak sekolah.
                </p>
                <button type="button" className="btn btn-primary" onClick={again}>
                  Tulis pesan lain
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={submit} noValidate>
                <h2>Formulir pertanyaan</h2>
                <p className="form-sim">Simulasi — tidak terhubung ke server.</p>

                <div className={`field ${errors.nama ? 'has-error' : ''}`}>
                  <label htmlFor="nama">Nama</label>
                  <input id="nama" value={values.nama} onChange={set('nama')} autoComplete="name" aria-invalid={!!errors.nama} />
                  {errors.nama && <p className="err">{errors.nama}</p>}
                </div>

                <div className={`field ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={set('email')}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="err">{errors.email}</p>}
                </div>

                <div className="field">
                  <label htmlFor="topik">Saya adalah</label>
                  <select id="topik" value={values.topik} onChange={set('topik')}>
                    {TOPICS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className={`field ${errors.pesan ? 'has-error' : ''}`}>
                  <label htmlFor="pesan">Pertanyaan</label>
                  <textarea id="pesan" rows="5" value={values.pesan} onChange={set('pesan')} aria-invalid={!!errors.pesan} />
                  {errors.pesan && <p className="err">{errors.pesan}</p>}
                </div>

                <button type="submit" className="btn btn-primary">
                  Kirim pertanyaan <Icon name="arrow" size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
