import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAdminSession,
  adminLogout,
  getNews,
  createNews,
  updateNews,
  deleteNews,
  getAdminGallery,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem
} from '../lib/api.js';
import { galleryCategories } from '../data/gallery.js';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(null);
  const [news, setNews] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [checking, setChecking] = useState(true);
  const [loadingNews, setLoadingNews] = useState(false);
  const [loadingGallery, setLoadingGallery] = useState(false);
  const [error, setError] = useState('');

  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [category, setCategory] = useState('Umum');
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [galleryId, setGalleryId] = useState(null);
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryCategory, setGalleryCategory] = useState('Kegiatan Sekolah');
  const [galleryUrl, setGalleryUrl] = useState('');
  const [galleryDescription, setGalleryDescription] = useState('');
  const [galleryPublished, setGalleryPublished] = useState(true);
  const [savingGallery, setSavingGallery] = useState(false);

  async function refreshNews() {
    setLoadingNews(true);
    try {
      setNews(await getNews());
    } finally {
      setLoadingNews(false);
    }
  }

  async function refreshGallery() {
    setLoadingGallery(true);
    try {
      setGalleryItems(await getAdminGallery());
    } finally {
      setLoadingGallery(false);
    }
  }

  useEffect(() => {
    let active = true;

    async function checkAdmin() {
      try {
        const data = await getAdminSession();
        if (!active) return;

        if (!data?.authenticated) {
          navigate('/admin/login', { replace: true });
          return;
        }

        setAdmin(data);

        const results = await Promise.allSettled([
          getNews(),
          getAdminGallery()
        ]);

        if (!active) return;

        if (results[0].status === 'fulfilled') {
          setNews(results[0].value);
        } else {
          setError('Gagal memuat berita: ' + results[0].reason.message);
        }

        if (results[1].status === 'fulfilled') {
          setGalleryItems(results[1].value);
        } else {
          setError('Gagal memuat galeri: ' + results[1].reason.message);
        }
      } catch (err) {
        if (active) setError(err.message || 'Gagal memuat dashboard.');
      } finally {
        if (active) setChecking(false);
      }
    }

    checkAdmin();
    return () => { active = false; };
  }, [navigate]);

  async function handleCreateNews(event) {
    event.preventDefault();
    if (editingId !== null) return handleUpdateNews(event);

    setError('');
    setSaving(true);

    try {
      await createNews({
        judul,
        isi,
        category,
        excerpt: isi.slice(0, 160),
        body: []
      });

      await refreshNews();
      setJudul('');
      setIsi('');
      setCategory('Umum');
    } catch (err) {
      setError(err.message || 'Gagal menambahkan berita.');
    } finally {
      setSaving(false);
    }
  }

  function startEdit(item) {
    setEditingId(item.id);
    setJudul(item.title || '');
    setIsi(item.content || item.excerpt || '');
    setCategory(item.category || 'Umum');
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleUpdateNews(event) {
    event.preventDefault();
    setError('');
    setSaving(true);

    try {
      await updateNews(editingId, { judul, isi, category });
      await refreshNews();
      cancelEdit();
    } catch (err) {
      setError(err.message || 'Gagal memperbarui berita.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteNews(item) {
    if (!window.confirm(`Yakin ingin menghapus berita "${item.title}"?`)) return;

    setError('');
    try {
      await deleteNews(item.id);
      await refreshNews();
      if (editingId === item.id) cancelEdit();
    } catch (err) {
      setError(err.message || 'Gagal menghapus berita.');
    }
  }

  function cancelEdit() {
    setEditingId(null);
    setJudul('');
    setIsi('');
    setCategory('Umum');
    setError('');
  }

  function resetGalleryForm() {
    setGalleryId(null);
    setGalleryTitle('');
    setGalleryCategory('Kegiatan Sekolah');
    setGalleryUrl('');
    setGalleryDescription('');
    setGalleryPublished(true);
  }

  function startEditGallery(item) {
    setGalleryId(item.id);
    setGalleryTitle(item.title || '');
    setGalleryCategory(item.category || 'Kegiatan Sekolah');
    setGalleryUrl(item.image_url || '');
    setGalleryDescription(item.description || '');
    setGalleryPublished(Boolean(item.published));
    document.getElementById('gallery-management')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  async function handleSaveGallery(event) {
    event.preventDefault();
    setError('');
    setSavingGallery(true);

    const item = {
      title: galleryTitle,
      category: galleryCategory,
      image_url: galleryUrl,
      description: galleryDescription,
      published: galleryPublished
    };

    try {
      if (galleryId !== null) {
        await updateGalleryItem(galleryId, item);
      } else {
        await createGalleryItem(item);
      }

      await refreshGallery();
      resetGalleryForm();
    } catch (err) {
      setError(err.message || 'Gagal menyimpan foto galeri.');
    } finally {
      setSavingGallery(false);
    }
  }

  async function handleDeleteGallery(item) {
    if (!window.confirm(`Hapus foto "${item.title}" dari galeri?`)) return;

    setError('');
    try {
      await deleteGalleryItem(item.id);
      await refreshGallery();
      if (galleryId === item.id) resetGalleryForm();
    } catch (err) {
      setError(err.message || 'Gagal menghapus foto.');
    }
  }

  async function toggleGalleryPublished(item) {
    setError('');
    try {
      await updateGalleryItem(item.id, {
        published: !Boolean(item.published)
      });
      await refreshGallery();
    } catch (err) {
      setError(err.message || 'Gagal mengubah status foto.');
    }
  }

  async function handleLogout() {
    try {
      await adminLogout();
      navigate('/admin/login', { replace: true });
    } catch (err) {
      setError(err.message || 'Logout gagal.');
    }
  }

  if (checking) {
    return (
      <section className="section">
        <div className="container"><p>Memeriksa sesi admin...</p></div>
      </section>
    );
  }

  if (!admin) {
    return (
      <section className="section">
        <div className="container">
          <p role="alert">{error || 'Sesi admin tidak tersedia.'}</p>
        </div>
      </section>
    );
  }

  const fieldStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginTop: '6px'
  };

  const fieldWrapper = { marginBottom: '12px' };
  const cardStyle = {
    padding: '16px',
    marginBottom: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px'
  };

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">SMEKSA · PANEL ADMIN</p>
        <h1>Dashboard Admin</h1>
        <p className="lead">Selamat datang, {admin.username}.</p>

        {error && <p role="alert">{error}</p>}

        <section style={{ marginTop: '24px' }}>
          <h2>Pengelolaan Berita</h2>

          <form onSubmit={handleCreateNews} style={{ marginBottom: '28px' }}>
            <h3>{editingId !== null ? 'Edit Berita' : 'Tambah Berita Baru'}</h3>

            <div style={fieldWrapper}>
              <label htmlFor="news-title">Judul berita</label>
              <input
                id="news-title"
                value={judul}
                onChange={(event) => setJudul(event.target.value)}
                required
                maxLength={150}
                style={fieldStyle}
              />
            </div>

            <div style={fieldWrapper}>
              <label htmlFor="news-category">Kategori</label>
              <select
                id="news-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                style={fieldStyle}
              >
                <option value="Umum">Umum</option>
                <option value="Kegiatan">Kegiatan</option>
                <option value="Prestasi">Prestasi</option>
                <option value="Pengumuman">Pengumuman</option>
              </select>
            </div>

            <div style={fieldWrapper}>
              <label htmlFor="news-content">Isi berita</label>
              <textarea
                id="news-content"
                value={isi}
                onChange={(event) => setIsi(event.target.value)}
                required
                maxLength={10000}
                rows={6}
                style={fieldStyle}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Menyimpan...' : editingId !== null ? 'Simpan Perubahan' : 'Terbitkan Berita'}
            </button>

            {editingId !== null && (
              <button type="button" className="btn" onClick={cancelEdit} style={{ marginLeft: '10px' }}>
                Batal
              </button>
            )}
          </form>

          {loadingNews ? (
            <p>Memuat berita...</p>
          ) : news.length === 0 ? (
            <p>Belum ada berita.</p>
          ) : (
            <div>
              <p>Total berita: {news.length}</p>
              {news.map((item) => (
                <article key={item.id} style={cardStyle}>
                  <h3>{item.title}</h3>
                  <button type="button" className="btn" onClick={() => startEdit(item)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleDeleteNews(item)}
                    style={{ marginLeft: '8px' }}
                  >
                    Hapus
                  </button>
                  <p>{item.category} · {item.date}</p>
                  <p>{item.excerpt || 'Tidak ada ringkasan.'}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <hr style={{ margin: '36px 0' }} />

        <section id="gallery-management">
          <h2>Manajemen Galeri</h2>
          <p>Kelola dokumentasi kegiatan, guru, fasilitas, karya, dan prestasi jurusan.</p>

          <form onSubmit={handleSaveGallery} style={{ margin: '20px 0 28px' }}>
            <h3>{galleryId !== null ? 'Edit Foto Galeri' : 'Tambah Foto Galeri'}</h3>

            <div style={fieldWrapper}>
              <label htmlFor="gallery-title">Judul foto</label>
              <input
                id="gallery-title"
                value={galleryTitle}
                onChange={(event) => setGalleryTitle(event.target.value)}
                required
                maxLength={150}
                style={fieldStyle}
              />
            </div>

            <div style={fieldWrapper}>
              <label htmlFor="gallery-category">Kategori</label>
              <select
                id="gallery-category"
                value={galleryCategory}
                onChange={(event) => setGalleryCategory(event.target.value)}
                style={fieldStyle}
              >
                {galleryCategories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div style={fieldWrapper}>
              <label htmlFor="gallery-url">Alamat foto (URL HTTPS atau path lokal)</label>
              <input
                id="gallery-url"
                type="text"
                value={galleryUrl}
                onChange={(event) => setGalleryUrl(event.target.value)}
                placeholder="/galeri/kegiatan-kelas.jpg"
                required
                style={fieldStyle}
              />
              <small>
                Contoh path lokal: /galeri/kegiatan-kelas.jpg
              </small>
            </div>

            <div style={fieldWrapper}>
              <label htmlFor="gallery-description">Keterangan foto</label>
              <textarea
                id="gallery-description"
                value={galleryDescription}
                onChange={(event) => setGalleryDescription(event.target.value)}
                rows={3}
                maxLength={1000}
                style={fieldStyle}
              />
            </div>

            <label style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
              <input
                type="checkbox"
                checked={galleryPublished}
                onChange={(event) => setGalleryPublished(event.target.checked)}
              />
              Terbitkan foto di galeri publik
            </label>

            <button type="submit" className="btn btn-primary" disabled={savingGallery}>
              {savingGallery ? 'Menyimpan...' : galleryId !== null ? 'Simpan Perubahan Foto' : 'Tambah Foto'}
            </button>

            {galleryId !== null && (
              <button type="button" className="btn" onClick={resetGalleryForm} style={{ marginLeft: '10px' }}>
                Batal
              </button>
            )}
          </form>

          <h3>Daftar Foto</h3>
          {loadingGallery ? (
            <p>Memuat galeri...</p>
          ) : galleryItems.length === 0 ? (
            <p>Belum ada data galeri. Tambahkan foto pertama melalui formulir di atas.</p>
          ) : (
            <>
              <p>Total foto: {galleryItems.length}</p>
              {galleryItems.map((item) => (
                <article key={item.id} style={cardStyle}>
                  <h3>{item.title}</h3>
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '320px',
                        maxHeight: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '12px'
                      }}
                    />
                  )}
                  <p>{item.category}</p>
                  <p>{item.description || 'Tidak ada keterangan.'}</p>
                  <p>Status: {item.published ? 'Diterbitkan' : 'Disembunyikan'}</p>

                  <button type="button" className="btn" onClick={() => startEditGallery(item)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => toggleGalleryPublished(item)}
                    style={{ marginLeft: '8px' }}
                  >
                    {item.published ? 'Sembunyikan' : 'Terbitkan'}
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleDeleteGallery(item)}
                    style={{ marginLeft: '8px' }}
                  >
                    Hapus
                  </button>
                </article>
              ))}
            </>
          )}
        </section>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleLogout}
          style={{ marginTop: '32px' }}
        >
          Keluar
        </button>
      </div>
    </section>
  );
}
