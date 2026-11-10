// Kurikulum & pembelajaran. Fokus per kelas mengikuti garis besar yang diberikan;
// daftar mata pelajaran resmi masih placeholder.
export const grades = [
  {
    id: 'x',
    label: 'Kelas X',
    title: 'Fondasi Bisnis Digital',
    summary: 'Mengenal bidang, membangun dasar kompetensi, dan memahami hubungan teknologi dengan dunia bisnis.',
    focus: [
      'Pengenalan dasar Bisnis Digital',
      'Dasar-dasar kompetensi',
      'Pengenalan teknologi dan dunia bisnis',
    ],
    competencies: [
      'Memahami ruang lingkup bisnis digital',
      'Menggunakan perangkat dan aplikasi dasar dengan aman',
      'Berkomunikasi secara profesional',
    ],
    sample: 'Contoh hasil praktik (DEMO): poster perkenalan produk sederhana.',
  },
  {
    id: 'xi',
    label: 'Kelas XI',
    title: 'Praktik & Proyek',
    summary: 'Mengembangkan kompetensi lewat praktik bisnis digital dan proyek pembelajaran.',
    focus: ['Pengembangan kompetensi', 'Praktik bisnis digital', 'Proyek pembelajaran'],
    competencies: [
      'Menyusun konten dan materi promosi',
      'Mengelola simulasi toko daring',
      'Bekerja sama dalam proyek tim',
    ],
    sample: 'Contoh hasil praktik (DEMO): katalog produk digital hasil proyek kelompok.',
  },
  {
    id: 'xii',
    label: 'Kelas XII',
    title: 'Pendalaman & Kesiapan Kerja',
    summary: 'Memperdalam kompetensi, menuntaskan proyek akhir, dan menyiapkan diri untuk dunia kerja serta wirausaha.',
    focus: ['Pendalaman kompetensi', 'Proyek akhir', 'Persiapan dunia kerja dan kewirausahaan'],
    competencies: [
      'Merancang dan mempresentasikan proyek akhir',
      'Menyusun rencana usaha sederhana',
      'Menyiapkan portofolio dan dokumen lamaran',
    ],
    sample: 'Contoh hasil praktik (DEMO): portofolio proyek akhir siswa.',
  },
];

// Daftar mata pelajaran resmi belum tersedia: tampil sebagai baris placeholder.
export const subjectPlaceholders = [
  'Mata pelajaran dasar program keahlian — isi dari dokumen kurikulum resmi',
  'Mata pelajaran konsentrasi keahlian — isi dari dokumen kurikulum resmi',
  'Projek / praktik kerja — isi dari dokumen kurikulum resmi',
];

export const pjblSteps = [
  { title: 'Menentukan masalah', text: 'Siswa memilih persoalan bisnis yang dekat dengan kehidupan sehari-hari.' },
  { title: 'Merancang solusi', text: 'Tim menyusun rencana, pembagian tugas, dan jadwal kerja.' },
  { title: 'Membuat karya', text: 'Siswa mempraktikkan keterampilan untuk membuat produk, konten, atau simulasi usaha.' },
  { title: 'Menguji & memperbaiki', text: 'Karya dicoba, dinilai, lalu diperbaiki berdasarkan masukan.' },
  { title: 'Mempresentasikan', text: 'Hasil dipresentasikan dan direfleksikan bersama guru dan teman.' },
];

export const facilities = [
  {
    id: 'ruang-praktik',
    title: 'Ruang Praktik',
    text: 'Ruang untuk kegiatan praktik pembelajaran produktif. Deskripsi, kapasitas, dan foto resmi akan ditambahkan.',
    icon: 'room',
  },
  {
    id: 'lab-komputer',
    title: 'Laboratorium Komputer',
    text: 'Tempat siswa berlatih menggunakan komputer untuk pembelajaran. Spesifikasi dan jumlah unit menunggu verifikasi.',
    icon: 'monitor',
  },
  {
    id: 'perangkat-komputer',
    title: 'Perangkat Komputer',
    text: 'Perangkat yang digunakan dalam praktik. Jenis, jumlah, dan kondisi belum diverifikasi.',
    icon: 'cpu',
  },
  {
    id: 'internet',
    title: 'Koneksi Internet',
    text: 'Akses internet untuk mendukung pembelajaran daring dan praktik. Kecepatan dan cakupan belum diverifikasi.',
    icon: 'wifi',
  },
  {
    id: 'pendukung',
    title: 'Perangkat Pendukung Pembelajaran',
    text: 'Perangkat lain seperti proyektor, papan tulis, atau peralatan produksi konten. Daftar resmi menyusul.',
    icon: 'tools',
  },
];

export const activities = [
  {
    id: 'proyek-kelas',
    title: 'Proyek Kelas',
    text: 'Siswa mengerjakan proyek berbasis masalah bisnis, dari ide produk sampai presentasi hasil.',
    icon: 'layers',
  },
  {
    id: 'kunjungan-industri',
    title: 'Kunjungan Industri',
    text: 'Bentuk kegiatan untuk melihat langsung praktik usaha dan industri. Jadwal dan mitra belum ditetapkan.',
    icon: 'building',
  },
  {
    id: 'seminar-workshop',
    title: 'Seminar dan Workshop',
    text: 'Sesi berbagi pengetahuan tentang pemasaran digital, kewirausahaan, dan literasi digital.',
    icon: 'mic',
  },
  {
    id: 'pameran-bazar',
    title: 'Pameran dan Bazar',
    text: 'Ruang bagi siswa memamerkan karya dan mencoba menjual produk secara langsung maupun daring.',
    icon: 'store',
  },
  {
    id: 'praktik-siswa',
    title: 'Praktik Siswa',
    text: 'Latihan rutin mengelola konten, katalog, dan simulasi transaksi.',
    icon: 'pen',
  },
  {
    id: 'lainnya',
    title: 'Kegiatan Pembelajaran Lainnya',
    text: 'Kegiatan penunjang lain yang diselenggarakan jurusan sesuai kebutuhan pembelajaran.',
    icon: 'spark',
  },
];

// DEMO: seluruh prestasi di bawah adalah contoh format, bukan capaian nyata.
export const achievementCategories = [
  'Prestasi Siswa',
  'Lomba & Kompetisi',
  'Sertifikasi',
  'Penghargaan',
  'Pencapaian Alumni',
];

export const achievements = [
  { id: 'a1', category: 'Prestasi Siswa', title: 'Contoh: Juara Pameran Karya Digital', year: '2026', level: 'Tingkat sekolah (contoh)' },
  { id: 'a2', category: 'Lomba & Kompetisi', title: 'Contoh: Finalis Lomba Pemasaran Digital', year: '2026', level: 'Tingkat kota (contoh)' },
  { id: 'a3', category: 'Sertifikasi', title: 'Contoh: Sertifikat Kompetensi Dasar Pemasaran Digital', year: '2026', level: 'Sertifikasi (contoh)' },
  { id: 'a4', category: 'Penghargaan', title: 'Contoh: Penghargaan Kelas Teraktif', year: '2026', level: 'Penghargaan internal (contoh)' },
  { id: 'a5', category: 'Pencapaian Alumni', title: 'Contoh: Alumni Membuka Usaha Daring', year: '2025', level: 'Kisah alumni (contoh)' },
  { id: 'a6', category: 'Lomba & Kompetisi', title: 'Contoh: Peserta Lomba Konten Kreatif', year: '2026', level: 'Tingkat provinsi (contoh)' },
];
