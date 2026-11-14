
function normalizeNews(item) {
  if (!item) return item;

  let body = Array.isArray(item.body) ? item.body : [];

  if (!body.length && typeof item.body === 'string') {
    try {
      const parsed = JSON.parse(item.body);
      if (Array.isArray(parsed)) body = parsed;
    } catch {}
  }

  if (!body.length && item.isi) {
    body = [item.isi];
  }

  const rawDate = item.date || item.tanggal || '';

  return {
    ...item,
    title: item.title || item.judul || '',
    date: rawDate.slice(0, 10),
    excerpt: item.excerpt || item.isi || '',
    body,
    demo: Boolean(item.demo)
  };
}

const API_URL = '/api';

export async function getNews() {
  const response = await fetch(`${API_URL}/berita`);

  if (!response.ok) {
    throw new Error('Gagal mengambil berita');
  }

  return (await response.json()).map(normalizeNews);
}

export async function getNewsDetail(id) {
  const response = await fetch(`${API_URL}/berita/${id}`);

  if (!response.ok) {
    throw new Error('Berita tidak ditemukan');
  }

  return normalizeNews(await response.json());
}

// Login admin
export async function adminLogin(username, password) {
  const response = await fetch(`${API_URL}/admin/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Login gagal');
  }

  return data;
}

// Periksa sesi admin
export async function getAdminSession() {
  const response = await fetch(`${API_URL}/admin/me`, {
    credentials: 'include'
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

// Logout admin
export async function adminLogout() {
  const response = await fetch(`${API_URL}/admin/logout`, {
    method: 'POST',
    credentials: 'include'
  });

  if (!response.ok) {
    throw new Error('Logout gagal');
  }

  return response.json();
}

// Tambah berita (admin)
export async function createNews(news) {
  const response = await fetch(`${API_URL}/berita`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(news)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Gagal menambahkan berita');
  }

  return data;
}

// Edit berita (admin)
export async function updateNews(id, news) {
  const response = await fetch(`${API_URL}/berita/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(news)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Gagal memperbarui berita');
  }

  return data;
}

// Hapus berita (admin)
export async function deleteNews(id) {
  const response = await fetch(`${API_URL}/berita/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Gagal menghapus berita');
  }

  return data;
}

// Galeri publik
export async function getGallery() {
  const response = await fetch(`${API_URL}/galeri`);
  if (!response.ok) throw new Error('Gagal mengambil galeri');
  return response.json();
}

// Daftar galeri admin
export async function getAdminGallery() {
  const response = await fetch(`${API_URL}/admin/galeri`, {
    credentials: 'include'
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Gagal mengambil galeri admin');
  return data;
}

// Tambah foto galeri
export async function createGalleryItem(item) {
  const response = await fetch(`${API_URL}/galeri`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Gagal menambahkan foto');
  return data;
}

// Edit foto galeri
export async function updateGalleryItem(id, item) {
  const response = await fetch(`${API_URL}/galeri/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Gagal memperbarui foto');
  return data;
}

// Hapus foto galeri
export async function deleteGalleryItem(id) {
  const response = await fetch(`${API_URL}/galeri/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Gagal menghapus foto');
  return data;
}
