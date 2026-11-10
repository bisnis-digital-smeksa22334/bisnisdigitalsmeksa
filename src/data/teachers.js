// SUMBER: dokumen Struktur Organisasi Bisnis Digital 2026/2027.
// Jangan ubah nama / gelar. Tambahkan `photo: '/foto/nama.jpg'` (file di folder public/foto)
// jika foto resmi sudah tersedia; selama null, kartu menampilkan siluet placeholder.
export const teachers = [
  {
    id: 'mulyati',
    name: 'Mulyati, S.Pd., MM.',
    roles: ['Ketua Program Keahlian'],
    tags: ['pengurus'],
    photo: null,
  },
  {
    id: 'siti-cholifah',
    name: 'Siti Cholifah, S.E.',
    roles: ['Sekretaris 1', 'Wali Kelas XII — Bisnis Digital 1'],
    tags: ['pengurus', 'xii'],
    photo: null,
  },
  {
    id: 'ririn-ferryana',
    name: 'Ririn Ferryana H.P., S.E.',
    roles: ['Sekretaris 2', 'Wali Kelas XI — Bisnis Digital 1'],
    tags: ['pengurus', 'xi'],
    photo: null,
  },
  {
    id: 'ine-puri',
    name: 'Ine Puri I., S.Pd., M.Si.',
    roles: ['Bendahara', 'Wali Kelas XII — Bisnis Digital 3'],
    tags: ['pengurus', 'xii'],
    photo: null,
  },
  {
    id: 'dewi-sartika',
    name: 'Dewi Sartika, S.AP.',
    roles: ['Toolman'],
    tags: ['pengurus'],
    photo: null,
  },
  {
    id: 'ery-achriyanti',
    name: 'Ery Achriyanti, M.Pd.',
    roles: ['Wali Kelas X — Bisnis Digital 1'],
    tags: ['x'],
    photo: null,
  },
  {
    id: 'sri-utami',
    name: 'Sri Utami, S.Pd., M.Si.',
    roles: ['Wali Kelas X — Bisnis Digital 2'],
    tags: ['x'],
    photo: null,
  },
  {
    id: 'yanti-nurhayati',
    name: 'Yanti Nurhayati, S.Pd.',
    roles: ['Wali Kelas X — Bisnis Digital 3'],
    tags: ['x'],
    photo: null,
  },
  {
    id: 'herina-purwanti',
    name: 'Herina Purwanti, S.Pd.',
    roles: ['Wali Kelas XI — Bisnis Digital 2'],
    tags: ['xi'],
    photo: null,
  },
  {
    id: 'rachmi-ginoga',
    name: 'Rachmi Ginoga, S.Si.',
    roles: ['Wali Kelas XI — Bisnis Digital 3'],
    tags: ['xi'],
    photo: null,
  },
  {
    id: 'bondhan-b',
    name: 'Bondhan B., S.Pd., MM.',
    roles: ['Wali Kelas XII — Bisnis Digital 2'],
    tags: ['xii'],
    photo: null,
  },
  {
    id: 'namiroh',
    name: 'Namiroh, S.Pd., M.Pd.',
    roles: ['Guru Produktif'],
    tags: ['produktif'],
    photo: null,
  },
  {
    id: 'halillah',
    name: 'Halillah, S.Pd., M.Si.',
    roles: ['Guru Produktif'],
    tags: ['produktif'],
    photo: null,
  },
];

export const teacherFilters = [
  { id: 'all', label: 'Semua' },
  { id: 'pengurus', label: 'Pengurus Program' },
  { id: 'x', label: 'Wali Kelas X' },
  { id: 'xi', label: 'Wali Kelas XI' },
  { id: 'xii', label: 'Wali Kelas XII' },
  { id: 'produktif', label: 'Guru Produktif' },
];

export const getTeacher = (id) => teachers.find((t) => t.id === id);
