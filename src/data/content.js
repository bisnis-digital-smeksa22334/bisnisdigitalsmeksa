// Konten naratif. Teks umum tentang bidang keahlian; rumusan resmi sekolah ditandai placeholder.
export const profileContent = {
  intro: [
    'Bisnis Digital adalah bidang keahlian yang memadukan praktik bisnis dengan pemanfaatan teknologi digital: memasarkan produk lewat media daring, mengelola toko dan katalog digital, membuat konten, serta mengurus administrasi usaha.',
    'Di SMKN 1 Kota Serang, pembelajaran Bisnis Digital dijalankan oleh pengurus program keahlian, wali kelas, dan guru produktif pada tiga tingkat kelas.',
  ],
  goals: [
    'Membekali siswa dengan pengetahuan dan keterampilan dasar bisnis digital.',
    'Membiasakan belajar lewat proyek yang dekat dengan situasi usaha nyata.',
    'Menumbuhkan sikap profesional, jujur, dan bertanggung jawab di ruang digital.',
    'Menyiapkan siswa untuk bekerja, melanjutkan studi, atau berwirausaha.',
  ],
  competencies: [
    { title: 'Pemasaran digital', text: 'Merencanakan dan menjalankan promosi di media daring.', icon: 'megaphone' },
    { title: 'Pengelolaan toko daring', text: 'Mengelola katalog, pesanan, dan layanan pelanggan.', icon: 'store' },
    { title: 'Pembuatan konten', text: 'Menyusun materi visual dan tulisan untuk produk.', icon: 'pen' },
    { title: 'Administrasi usaha', text: 'Mencatat transaksi dan mengelola dokumen usaha.', icon: 'doc' },
    { title: 'Literasi data', text: 'Membaca angka sederhana untuk mengambil keputusan.', icon: 'chart' },
    { title: 'Komunikasi bisnis', text: 'Berkomunikasi dan bernegosiasi secara profesional.', icon: 'chat' },
  ],
  vision: 'Rumusan visi resmi konsentrasi keahlian belum tersedia. Isi dengan dokumen resmi jurusan.',
  mission: [
    'Poin misi 1 — menunggu rumusan resmi.',
    'Poin misi 2 — menunggu rumusan resmi.',
    'Poin misi 3 — menunggu rumusan resmi.',
  ],
  prospects: [
    { title: 'Bekerja', text: 'Contoh bidang: administrasi, layanan pelanggan, pemasaran, dan operasional toko daring.' },
    { title: 'Berwirausaha', text: 'Merintis usaha kecil dengan memanfaatkan media sosial dan platform jual-beli.' },
    { title: 'Melanjutkan studi', text: 'Melanjutkan ke pendidikan tinggi di bidang bisnis, manajemen, atau komunikasi.' },
  ],
};

export const storyThemes = [
  { id: 'pengalaman', title: 'Pengalaman Mengajar', prompt: 'Ceritakan pengalaman yang paling berkesan saat mengajar Bisnis Digital.' },
  { id: 'motivasi', title: 'Motivasi untuk Siswa', prompt: 'Apa yang ingin Bapak/Ibu sampaikan untuk menyemangati siswa?' },
  { id: 'pandangan', title: 'Pandangan tentang Bisnis Digital', prompt: 'Bagaimana Bapak/Ibu melihat perkembangan bisnis digital ke depan?' },
  { id: 'pesan', title: 'Pesan untuk Generasi Muda', prompt: 'Apa pesan untuk generasi muda yang ingin menekuni bidang ini?' },
];

export const ethicsTopics = [
  {
    id: 'etika-internet',
    title: 'Etika Menggunakan Internet',
    icon: 'globe',
    summary: 'Bersikap sopan, jujur, dan menghormati karya orang lain saat daring.',
    dos: ['Cantumkan sumber saat memakai karya orang lain', 'Periksa kebenaran sebelum membagikan informasi'],
    donts: ['Menyebarkan hoaks atau ujaran kebencian', 'Menyalin tugas atau karya tanpa izin'],
  },
  {
    id: 'keamanan',
    title: 'Keamanan dan Privasi Digital',
    icon: 'lock',
    summary: 'Lindungi akun dan data pribadi dari penyalahgunaan.',
    dos: ['Gunakan kata sandi panjang dan berbeda untuk tiap akun', 'Aktifkan verifikasi dua langkah'],
    donts: ['Membagikan kode OTP atau kata sandi', 'Mengeklik tautan mencurigakan'],
  },
  {
    id: 'komunikasi',
    title: 'Komunikasi Profesional',
    icon: 'chat',
    summary: 'Gunakan bahasa yang jelas, santun, dan sesuai konteks.',
    dos: ['Awali pesan dengan salam dan tujuan yang jelas', 'Balas pesan kerja pada waktu yang wajar'],
    donts: ['Memakai bahasa kasar kepada pelanggan', 'Mengirim pesan penting tanpa penjelasan'],
  },
  {
    id: 'jejak',
    title: 'Jejak Digital',
    icon: 'footprint',
    summary: 'Apa yang diunggah dapat bertahan lama dan dilihat banyak orang.',
    dos: ['Pikirkan dampaknya sebelum mengunggah', 'Rapikan profil agar mencerminkan citra profesional'],
    donts: ['Mengunggah data pribadi berlebihan', 'Menulis komentar emosional yang sulit dihapus'],
  },
  {
    id: 'media-sosial',
    title: 'Tanggung Jawab Media Sosial',
    icon: 'share',
    summary: 'Setiap unggahan membawa tanggung jawab, termasuk untuk promosi usaha.',
    dos: ['Gunakan foto dan klaim produk yang jujur', 'Beri tanda jika konten bersifat iklan'],
    donts: ['Membuat testimoni palsu', 'Menyerang pesaing usaha secara pribadi'],
  },
  {
    id: 'literasi',
    title: 'Literasi Digital',
    icon: 'book',
    summary: 'Kemampuan mencari, menilai, dan menggunakan informasi digital secara cerdas.',
    dos: ['Bandingkan beberapa sumber terpercaya', 'Periksa tanggal dan pembuat informasi'],
    donts: ['Menganggap semua yang viral pasti benar', 'Menggunakan satu sumber tanpa cek ulang'],
  },
];

export const ethicsQuiz = [
  {
    q: 'Kamu menerima pesan berisi tautan hadiah dan diminta mengirim kode OTP. Apa yang sebaiknya dilakukan?',
    options: ['Kirim OTP agar hadiah cepat cair', 'Abaikan dan jangan bagikan OTP', 'Teruskan ke teman'],
    answer: 1,
    why: 'Kode OTP bersifat rahasia. Penipu memakainya untuk mengambil alih akun.',
  },
  {
    q: 'Kamu ingin memakai foto produk milik orang lain untuk promosi. Langkah terbaik?',
    options: ['Ambil saja, toh ada di internet', 'Minta izin atau gunakan foto sendiri', 'Hapus watermark-nya'],
    answer: 1,
    why: 'Karya orang lain memerlukan izin. Foto sendiri lebih aman dan terpercaya.',
  },
  {
    q: 'Sebelum membagikan berita mengejutkan di grup, apa yang perlu dilakukan?',
    options: ['Langsung bagikan agar cepat tahu', 'Cek sumber dan tanggal informasi', 'Tambahkan kata “viral”'],
    answer: 1,
    why: 'Memeriksa sumber mencegah penyebaran hoaks.',
  },
];

export const marketingFields = [
  { id: 'dm', title: 'Digital Marketing', text: 'Mengenal cara memperkenalkan produk lewat kanal daring: media sosial, marketplace, dan pesan langsung.', icon: 'megaphone' },
  { id: 'smm', title: 'Social Media Marketing', text: 'Merencanakan jadwal unggahan, gaya bahasa, dan interaksi dengan audiens.', icon: 'share' },
  { id: 'cc', title: 'Content Creation', text: 'Membuat foto, video pendek, dan tulisan yang menarik serta jujur.', icon: 'pen' },
  { id: 'brand', title: 'Branding', text: 'Menyusun nama, warna, dan suara merek yang konsisten.', icon: 'tag' },
  { id: 'strategi', title: 'Strategi Pemasaran Digital', text: 'Menentukan target pasar, pesan utama, kanal, dan ukuran keberhasilan.', icon: 'target' },
  { id: 'simulasi', title: 'Simulasi Kampanye', text: 'Merancang kampanye contoh dari ide hingga evaluasi dengan data latihan.', icon: 'play' },
  { id: 'analisis', title: 'Analisis Pemasaran', text: 'Membaca angka jangkauan, klik, dan penjualan untuk memperbaiki strategi.', icon: 'chart' },
];

// Angka asumsi hanya untuk latihan simulasi, bukan data pasar sebenarnya.
export const channels = [
  { id: 'ig', label: 'Instagram', cpm: 25000, ctr: 0.012, cvr: 0.02 },
  { id: 'tt', label: 'Video pendek', cpm: 18000, ctr: 0.009, cvr: 0.015 },
  { id: 'mp', label: 'Marketplace', cpm: 30000, ctr: 0.02, cvr: 0.04 },
  { id: 'wa', label: 'Pesan langsung', cpm: 40000, ctr: 0.03, cvr: 0.06 },
];
