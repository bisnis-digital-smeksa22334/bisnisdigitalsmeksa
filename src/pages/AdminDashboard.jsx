import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminSession, adminLogout, getNews, createNews, updateNews, deleteNews } from '../lib/api.js';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [news, setNews] = useState([]);
  const [checking, setChecking] = useState(true);
  const [loadingNews, setLoadingNews] = useState(false);
  const [error, setError] = useState('');
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [category, setCategory] = useState('Umum');
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    let active = true;

    async function checkAdmin() {
      try {
        const data = await getAdminSession();

        if (!active) return;

        if (!data?.loggedIn) {
          navigate('/admin/login', { replace: true });
          return;
        }

        setAdmin(data);
        setLoadingNews(true);

        const newsData = await getNews();

        if (active) setNews(newsData);
      } catch (err) {
        if (active) {
          setError(err.message || 'Gagal memuat dashboard.');
        }
      } finally {
        if (active) {
          setChecking(false);
          setLoadingNews(false);
        }
      }
    }

    checkAdmin();

    return () => {
      active = false;
    };
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

      const updatedNews = await getNews();
      setNews(updatedNews);
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
      const updatedNews = await getNews();
      setNews(updatedNews);
      setEditingId(null);
      setJudul('');
      setIsi('');
      setCategory('Umum');
    } catch (err) {
      setError(err.message || 'Gagal memperbarui berita.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteNews(item) {
    const confirmed = window.confirm(
      `Yakin ingin menghapus berita "${item.title}"?`
    );

    if (!confirmed) return;

    setError('');

    try {
      await deleteNews(item.id);
      const updatedNews = await getNews();
      setNews(updatedNews);

      if (editingId === item.id) {
        cancelEdit();
      }
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

  async function handleLogout() {
    try {
      await adminLogout();
      navigate('/admin/login', { replace: true });
    } catch (err) {
      setError(err.message || 'Logout gagal.');
    }
  }

  if (checking) {
    return <section className="section"><div className="container"><p>Memeriksa sesi admin...</p></div></section>;
  }

  if (!admin) {
    return <section className="section"><div className="container"><p role="alert">{error || 'Sesi admin tidak tersedia.'}</p></div></section>;
  }

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">SMEKSA · PANEL ADMIN</p>
        <h1>Dashboard Admin</h1>
        <p className="lead">Selamat datang, {admin.username}.</p>

        {error && <p role="alert">{error}</p>}

        <div style={{ marginTop: '24px' }}>
          <h2>Pengelolaan Berita</h2>

          <form onSubmit={handleCreateNews} style={{ marginBottom: '28px' }}>
            <h3>{editingId !== null ? 'Edit Berita' : 'Tambah Berita Baru'}</h3>

            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="news-title">Judul berita</label>
              <input
                id="news-title"
                value={judul}
                onChange={(event) => setJudul(event.target.value)}
                required
                maxLength={150}
                style={{ display: 'block', width: '100%', padding: '12px', marginTop: '6px' }}
              />
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="news-category">Kategori</label>
              <select
                id="news-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                style={{ display: 'block', width: '100%', padding: '12px', marginTop: '6px' }}
              >
                <option value="Umum">Umum</option>
                <option value="Kegiatan">Kegiatan</option>
                <option value="Prestasi">Prestasi</option>
                <option value="Pengumuman">Pengumuman</option>
              </select>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="news-content">Isi berita</label>
              <textarea
                id="news-content"
                value={isi}
                onChange={(event) => setIsi(event.target.value)}
                required
                maxLength={10000}
                rows={6}
                style={{ display: 'block', width: '100%', padding: '12px', marginTop: '6px' }}
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
                <article
                  key={item.id}
                  style={{
                    padding: '16px',
                    marginBottom: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                  }}
                >
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
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleLogout}
          style={{ marginTop: '24px' }}
        >
          Keluar
        </button>
      </div>
    </section>
  );
}
