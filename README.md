# Website Profil Bisnis Digital — SMKN 1 Kota Serang

Front-end React + Vite (tanpa backend, tanpa database).

## Menjalankan

```bash
npm install
npm run dev        # buka alamat yang tampil, biasanya http://localhost:5173
npm run build      # hasil di folder dist/
npm run preview    # uji hasil build
```

Perlu Node.js 18 atau lebih baru. Router memakai `HashRouter` (alamat seperti `/#/profil`) sehingga hasil build bisa
di-host di hosting statis mana pun tanpa pengaturan server.

## Mengganti placeholder dengan data resmi

| Yang diganti | File |
| --- | --- |
| Alamat, website, email sekolah | `src/config.js` |
| Nama/jabatan/foto guru | `src/data/teachers.js` (foto: taruh di `public/foto/`, isi `photo: './foto/nama.jpg'`) |
| Susunan bagan organisasi | `src/data/organization.js` |
| Berita & pengumuman (hapus `demo: true` bila data asli) | `src/data/news.js` |
| Galeri (foto di `public/galeri/`, isi `src`) | `src/data/gallery.js` |
| Mata pelajaran, fasilitas, kegiatan, prestasi | `src/data/learning.js` |
| Profil, visi-misi, cerita guru, etika digital | `src/data/content.js` |

Label **DEMO**, **PLACEHOLDER**, dan **Menunggu verifikasi** menandai konten yang bukan informasi resmi.

## Struktur

```
src/
  components/  Navbar, Footer, OrganizationChart, Gallery, TeacherCard, NewsCard, ...
  pages/       15 halaman (Home, Profile, Organization, Curriculum, ..., Contact)
  data/        sumber data yang mudah diganti
  styles/      global.css (mobile-first) + responsive.css (tablet ≥768px, desktop ≥1024px)
```

## Catatan

- Formulir kontak hanya simulasi: data disimpan di `localStorage` peramban, tidak dikirim ke mana pun.
- Pengelompokan garis penghubung pada bagan organisasi disusun dari daftar di dokumen. Jika gambar resmi
  menunjukkan hubungan lain, ubah di `src/data/organization.js`.
- Alamat dan website sekolah bersumber dari direktori publik; cek ulang dengan data resmi.
