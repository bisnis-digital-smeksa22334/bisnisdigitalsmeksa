// DATA CONTOH (DEMO). Ganti dengan berita/pengumuman resmi jurusan.
// `demo: true` memunculkan label DEMO di kartu & halaman detail.
export const newsCategories = ['Berita', 'Pengumuman', 'Agenda', 'Informasi Lomba', 'Dokumentasi'];

export const news = [
  {
    id: 'contoh-pengumuman-jadwal-praktik',
    title: 'Contoh Pengumuman: Penyesuaian Jadwal Praktik Semester Ganjil',
    category: 'Pengumuman',
    date: '2026-11-03',
    excerpt:
      'Contoh format pengumuman jurusan untuk perubahan jadwal praktik. Isi asli menyusul dari pengurus program keahlian.',
    body: [
      'Ini adalah contoh pengumuman untuk memperlihatkan tata letak halaman detail. Seluruh isi bersifat demo dan bukan informasi resmi sekolah.',
      'Pada versi resmi, pengumuman dapat memuat tanggal, kelas yang terdampak, serta nama penanggung jawab kegiatan.',
    ],
    demo: true,
  },
  {
    id: 'contoh-agenda-pameran-karya',
    title: 'Contoh Agenda: Pameran Karya Proyek Kelas',
    category: 'Agenda',
    date: '2026-11-18',
    excerpt:
      'Contoh agenda pameran karya siswa lengkap dengan kolom waktu dan tempat yang dapat diisi kemudian.',
    body: [
      'Halaman ini menunjukkan bagaimana agenda kegiatan akan tampil. Waktu, tempat, dan peserta belum ditetapkan.',
      'Gunakan kategori Agenda untuk jadwal yang akan datang agar mudah disaring oleh pengunjung.',
    ],
    demo: true,
  },
  {
    id: 'contoh-info-lomba-pemasaran',
    title: 'Contoh Informasi Lomba: Kompetisi Pemasaran Digital Tingkat Pelajar',
    category: 'Informasi Lomba',
    date: '2026-10-27',
    excerpt:
      'Contoh kartu informasi lomba. Nama lomba, penyelenggara, dan tenggat pendaftaran adalah data demo.',
    body: [
      'Kartu informasi lomba dapat memuat nama kompetisi, penyelenggara, syarat peserta, dan tenggat pendaftaran.',
      'Semua nama dan tanggal pada halaman ini fiktif untuk keperluan tampilan.',
    ],
    demo: true,
  },
  {
    id: 'contoh-berita-kunjungan-industri',
    title: 'Contoh Berita: Persiapan Kunjungan Industri Kelas XI',
    category: 'Berita',
    date: '2026-10-21',
    excerpt:
      'Contoh berita kegiatan jurusan. Mitra industri, tanggal, dan peserta belum tersedia dan tidak boleh dianggap fakta.',
    body: [
      'Berita jurusan dapat ditulis dengan struktur: judul, tanggal, ringkasan, isi, dan dokumentasi.',
      'Konten ini hanya contoh. Tidak ada mitra industri atau kegiatan nyata yang dirujuk.',
    ],
    demo: true,
  },
  {
    id: 'contoh-dokumentasi-workshop',
    title: 'Contoh Dokumentasi: Workshop Pembuatan Konten Produk',
    category: 'Dokumentasi',
    date: '2026-10-14',
    excerpt:
      'Contoh entri dokumentasi acara dengan ruang untuk foto kegiatan dan keterangan singkat.',
    body: [
      'Entri dokumentasi biasanya disertai beberapa foto. Pada versi demo, foto digantikan placeholder.',
      'Ganti entri ini dengan dokumentasi kegiatan yang benar-benar terlaksana.',
    ],
    demo: true,
  },
  {
    id: 'contoh-berita-karya-siswa',
    title: 'Contoh Berita: Sorotan Karya Siswa Bulan Ini',
    category: 'Berita',
    date: '2026-10-08',
    excerpt:
      'Contoh format sorotan karya siswa: kolom nama karya, kelas, dan keterangan singkat proses pembuatan.',
    body: [
      'Sorotan karya dapat memuat gambar karya, nama pembuat, dan penjelasan proses.',
      'Nama dan karya pada halaman ini adalah contoh dan bukan data siswa.',
    ],
    demo: true,
  },
  {
    id: 'contoh-pengumuman-tata-tertib-lab',
    title: 'Contoh Pengumuman: Tata Tertib Penggunaan Perangkat Praktik',
    category: 'Pengumuman',
    date: '2026-09-29',
    excerpt:
      'Contoh pengumuman tata tertib penggunaan perangkat. Aturan sebenarnya mengikuti ketentuan resmi jurusan.',
    body: [
      'Gunakan format ini untuk pengumuman yang berlaku lama, misalnya tata tertib praktik.',
      'Isi pada halaman ini sepenuhnya demo.',
    ],
    demo: true,
  },
  {
    id: 'contoh-agenda-seminar',
    title: 'Contoh Agenda: Seminar Literasi dan Etika Digital',
    category: 'Agenda',
    date: '2026-12-02',
    excerpt:
      'Contoh agenda seminar. Pembicara dan jadwal belum ditetapkan; halaman ini hanya contoh tampilan.',
    body: [
      'Agenda seminar dapat memuat tema, waktu, tempat, dan cara mendaftar.',
      'Belum ada seminar yang dijadwalkan melalui halaman ini.',
    ],
    demo: true,
  },
];

export const getNews = (id) => news.find((n) => n.id === id);
