// Ilustrasi orisinal: jendela browser dengan grafik, tampilan toko di ponsel, dan kartu metrik.
// Memakai variabel warna tema agar konsisten. Bukan foto stok.
export default function HeroVisual() {
  return (
    <svg className="hero-visual" viewBox="0 0 560 460" role="img" aria-label="Ilustrasi dasbor pemasaran dan toko daring">
      <defs>
        <pattern id="hv-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="560" height="460" fill="url(#hv-grid)" />

      {/* Jendela browser */}
      <g>
        <rect x="40" y="52" width="368" height="262" rx="8" fill="#fff" />
        <path d="M40 60a8 8 0 0 1 8-8h352a8 8 0 0 1 8 8v26H40V60Z" fill="#e8edf4" />
        <circle cx="60" cy="69" r="4.5" fill="#c3ccd9" />
        <circle cx="76" cy="69" r="4.5" fill="#c3ccd9" />
        <circle cx="92" cy="69" r="4.5" fill="#c3ccd9" />
        <rect x="116" y="61" width="190" height="16" rx="3" fill="#fff" />

        <text x="62" y="118" fontSize="11" fontWeight="700" fill="#0a1a33" letterSpacing=".06em">
          JANGKAUAN KAMPANYE
        </text>
        <text x="62" y="146" fontSize="26" fontWeight="800" fill="#0a1a33">
          12.480
        </text>

        {/* Grafik batang */}
        {[44, 70, 56, 92, 78, 116, 104].map((h, i) => (
          <rect
            key={i}
            x={62 + i * 34}
            y={294 - h}
            width="22"
            height={h}
            fill={i === 5 ? '#1fb6d9' : '#d5dde9'}
          />
        ))}
        <path d="M62 294H312" stroke="#9aa7bb" strokeWidth="1.5" />

        {/* Garis tren */}
        <path
          d="M72 226l34-18 34 8 34-30 34 12 34-34 34 4"
          fill="none"
          stroke="#0a1a33"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="274" cy="168" r="5" fill="#fff" stroke="#0a1a33" strokeWidth="2.5" />

        <rect x="332" y="104" width="60" height="62" rx="4" fill="#eef7fb" />
        <text x="341" y="127" fontSize="9" fontWeight="700" fill="#4d6a80">
          KLIK
        </text>
        <text x="341" y="152" fontSize="18" fontWeight="800" fill="#0a1a33">
          3,2%
        </text>
      </g>

      {/* Ponsel: halaman toko */}
      <g>
        <rect x="358" y="122" width="150" height="300" rx="20" fill="#0f2547" stroke="#1fb6d9" strokeWidth="2" />
        <rect x="368" y="138" width="130" height="268" rx="12" fill="#fff" />
        <rect x="378" y="150" width="60" height="9" rx="2" fill="#0a1a33" />
        <rect x="378" y="168" width="110" height="64" rx="4" fill="#e3f6fb" />
        <path d="M398 218l16-20 14 14 12-10 22 16H398Z" fill="#1fb6d9" opacity=".75" />
        <rect x="378" y="242" width="52" height="52" rx="3" fill="#eef1f6" />
        <rect x="436" y="242" width="52" height="52" rx="3" fill="#eef1f6" />
        <rect x="378" y="300" width="40" height="6" rx="2" fill="#9aa7bb" />
        <rect x="436" y="300" width="40" height="6" rx="2" fill="#9aa7bb" />
        <rect x="378" y="320" width="110" height="26" rx="4" fill="#0a1a33" />
        <text x="433" y="337" fontSize="10" fontWeight="700" fill="#fff" textAnchor="middle">
          BELI SEKARANG
        </text>
        <rect x="378" y="356" width="110" height="36" rx="4" fill="#eef1f6" />
      </g>

      {/* Kartu catatan */}
      <g>
        <rect x="40" y="340" width="190" height="82" rx="6" fill="#163463" />
        <rect x="56" y="356" width="32" height="32" rx="4" fill="#1fb6d9" />
        <path d="M64 372l6 6 10-12" fill="none" stroke="#0a1a33" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="98" y="371" fontSize="12" fontWeight="700" fill="#fff">
          Pesanan diproses
        </text>
        <text x="98" y="388" fontSize="10.5" fill="#a9bad3">
          Simulasi toko daring
        </text>
        <rect x="56" y="400" width="158" height="6" rx="3" fill="#0f2547" />
        <rect x="56" y="400" width="104" height="6" rx="3" fill="#1fb6d9" />
      </g>
    </svg>
  );
}
