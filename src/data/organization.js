// Susunan sesuai dokumen Struktur Organisasi Bisnis Digital 2026/2027.
// Setiap entri merujuk id pada teachers.js. `role` = jabatan, `note` = keterangan kelas.
// Catatan: pengelompokan hirarki (garis penghubung) disusun dari daftar dokumen;
// sesuaikan di sini bila gambar resmi menunjukkan hubungan yang berbeda.
export const lead = { id: 'mulyati', role: 'Ketua Program Keahlian' };

export const staff = [
  { id: 'siti-cholifah', role: 'Sekretaris 1' },
  { id: 'ririn-ferryana', role: 'Sekretaris 2' },
  { id: 'ine-puri', role: 'Bendahara' },
  { id: 'dewi-sartika', role: 'Toolman' },
];

export const groups = [
  {
    id: 'wali-x',
    title: 'Wali Kelas X',
    members: [
      { id: 'ery-achriyanti', role: 'Wali Kelas X', note: 'Bisnis Digital 1' },
      { id: 'sri-utami', role: 'Wali Kelas X', note: 'Bisnis Digital 2' },
      { id: 'yanti-nurhayati', role: 'Wali Kelas X', note: 'Bisnis Digital 3' },
    ],
  },
  {
    id: 'wali-xi',
    title: 'Wali Kelas XI',
    members: [
      { id: 'ririn-ferryana', role: 'Wali Kelas XI', note: 'Bisnis Digital 1' },
      { id: 'herina-purwanti', role: 'Wali Kelas XI', note: 'Bisnis Digital 2' },
      { id: 'rachmi-ginoga', role: 'Wali Kelas XI', note: 'Bisnis Digital 3' },
    ],
  },
  {
    id: 'wali-xii',
    title: 'Wali Kelas XII',
    members: [
      { id: 'siti-cholifah', role: 'Wali Kelas XII', note: 'Bisnis Digital 1' },
      { id: 'bondhan-b', role: 'Wali Kelas XII', note: 'Bisnis Digital 2' },
      { id: 'ine-puri', role: 'Wali Kelas XII', note: 'Bisnis Digital 3' },
    ],
  },
  {
    id: 'produktif',
    title: 'Guru Produktif',
    members: [
      { id: 'namiroh', role: 'Guru Produktif', note: '' },
      { id: 'halillah', role: 'Guru Produktif', note: '' },
    ],
  },
];
