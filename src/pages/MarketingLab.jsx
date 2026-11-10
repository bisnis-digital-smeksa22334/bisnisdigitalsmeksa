import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { marketingFields, channels } from '../data/content.js';

const rupiah = (n) => `Rp${Math.round(n).toLocaleString('id-ID')}`;
const num = (n) => Math.round(n).toLocaleString('id-ID');

const FLOW = ['Riset audiens', 'Ide & pesan', 'Buat konten', 'Publikasi', 'Analisis & perbaiki'];

function Simulator() {
  const [budget, setBudget] = useState(500000);
  const [price, setPrice] = useState(75000);
  const [channelId, setChannelId] = useState('ig');

  const r = useMemo(() => {
    const ch = channels.find((c) => c.id === channelId);
    const impressions = (budget / ch.cpm) * 1000;
    const clicks = impressions * ch.ctr;
    const orders = clicks * ch.cvr;
    const revenue = orders * price;
    const roi = budget ? ((revenue - budget) / budget) * 100 : 0;
    const w = (v) => Math.max(6, (Math.log10(v + 1) / Math.log10(impressions + 1)) * 100);
    return { ch, impressions, clicks, orders, revenue, roi, w };
  }, [budget, price, channelId]);

  return (
    <div className="sim">
      <form className="sim-controls" onSubmit={(e) => e.preventDefault()} aria-label="Pengaturan simulasi">
        <fieldset>
          <legend>Kanal promosi</legend>
          <div className="seg">
            {channels.map((c) => (
              <button
                key={c.id}
                type="button"
                className={channelId === c.id ? 'is-on' : ''}
                aria-pressed={channelId === c.id}
                onClick={() => setChannelId(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="range">
          <span>
            Anggaran iklan <strong>{rupiah(budget)}</strong>
          </span>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="50000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </label>

        <label className="range">
          <span>
            Harga produk <strong>{rupiah(price)}</strong>
          </span>
          <input
            type="range"
            min="10000"
            max="300000"
            step="5000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <p className="sim-note">Angka asumsi untuk latihan, bukan data pasar sebenarnya.</p>
      </form>

      <div className="sim-result" aria-live="polite">
        <h3>Corong hasil</h3>
        <ul className="funnel">
          <li style={{ '--w': `${r.w(r.impressions)}%` }}>
            <span>Tayangan</span>
            <strong>{num(r.impressions)}</strong>
          </li>
          <li style={{ '--w': `${r.w(r.clicks)}%` }}>
            <span>Klik</span>
            <strong>{num(r.clicks)}</strong>
          </li>
          <li style={{ '--w': `${r.w(r.orders)}%` }}>
            <span>Pesanan</span>
            <strong>{num(r.orders)}</strong>
          </li>
        </ul>
        <dl className="sim-kpi">
          <div>
            <dt>Perkiraan omzet</dt>
            <dd>{rupiah(r.revenue)}</dd>
          </div>
          <div>
            <dt>Selisih terhadap anggaran</dt>
            <dd className={r.roi >= 0 ? 'up' : 'down'}>
              {r.roi >= 0 ? '+' : ''}
              {r.roi.toFixed(0)}%
            </dd>
          </div>
        </dl>
        <p className="sim-tip">
          <Icon name="info" size={16} />
          {r.roi >= 0
            ? 'Omzet melampaui anggaran pada asumsi ini. Coba ganti kanal dan bandingkan hasilnya.'
            : 'Omzet belum menutup anggaran. Diskusikan: apa yang bisa diubah — kanal, harga, atau pesan promosi?'}
        </p>
      </div>
    </div>
  );
}

export default function MarketingLab() {
  return (
    <>
      <PageHeader
        eyebrow="Digital Marketing Lab"
        title="Belajar pemasaran digital dengan praktik"
        lead="Pengenalan bidang pemasaran digital sebagai konsep pembelajaran, lengkap dengan simulasi kampanye."
        crumbs={[{ label: 'Digital Marketing Lab' }]}
      />

      <section className="section section--tight">
        <div className="container">
          <p className="notice notice--strong">
            <Icon name="info" size={18} />
            <span>
              <strong>Konsep pembelajaran, bukan fasilitas fisik.</strong> Halaman ini menjelaskan materi dan latihan
              pemasaran digital. Keberadaan laboratorium khusus belum dikonfirmasi dan tidak diklaim.
            </span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Bidang yang dikenalkan"
              title="Tujuh area belajar"
              lead="Dari memahami audiens sampai membaca hasil kampanye."
            />
          </Reveal>
          <ul className="bento">
            {marketingFields.map((f, i) => (
              <Reveal as="li" key={f.id} className={`bento-item bento-item--${i}`} delay={i * 40}>
                <Icon name={f.icon} size={i === 0 ? 30 : 24} />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Alur kampanye" title="Lima langkah, berulang" />
          </Reveal>
          <ol className="flow">
            {FLOW.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 50}>
                <span>{i + 1}</span>
                {s}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Simulasi kampanye"
              title="Coba atur anggaran dan kanal"
              lead="Alat latihan sederhana untuk membaca hubungan anggaran, klik, dan pesanan."
            />
          </Reveal>
          <Simulator />
        </div>
      </section>
    </>
  );
}
