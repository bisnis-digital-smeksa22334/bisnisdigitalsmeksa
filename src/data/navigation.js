// 11 menu utama dikelompokkan agar navbar tidak padat.
export const NAV = [
  { label: 'Beranda', to: '/' },
  {
    label: 'Jurusan',
    children: [
      { label: 'Profil Jurusan', to: '/profil', desc: 'Tentang Bisnis Digital' },
      { label: 'Struktur Organisasi', to: '/struktur-organisasi', desc: 'Bagan 2026/2027' },
      { label: 'Guru & Tenaga Pengajar', to: '/guru', desc: 'Daftar pendidik' },
      { label: 'Cerita Guru', to: '/cerita-guru', desc: 'Pengalaman & pesan' },
    ],
  },
  {
    label: 'Pembelajaran',
    children: [
      { label: 'Kurikulum & Pembelajaran', to: '/kurikulum', desc: 'Kelas X, XI, XII' },
      { label: 'Digital Marketing Lab', to: '/digital-marketing-lab', desc: 'Konsep belajar pemasaran' },
      { label: 'Etika Digital', to: '/etika-digital', desc: 'Aman & bertanggung jawab' },
      { label: 'Fasilitas', to: '/fasilitas', desc: 'Sarana belajar' },
    ],
  },
  {
    label: 'Kegiatan',
    children: [
      { label: 'Kegiatan Jurusan', to: '/kegiatan', desc: 'Praktik & proyek' },
      { label: 'Prestasi', to: '/prestasi', desc: 'Capaian siswa & alumni' },
      { label: 'Galeri', to: '/galeri', desc: 'Dokumentasi' },
    ],
  },
  { label: 'Berita & Pengumuman', to: '/berita' },
  { label: 'Kontak', to: '/kontak' },
];
