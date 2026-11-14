const API_URL = 'https://smeksa-backend.rommelsan102.workers.dev/api';

export async function getNews() {
  const response = await fetch(`${API_URL}/berita`);

  if (!response.ok) {
    throw new Error('Gagal mengambil berita');
  }

  return response.json();
}

export async function getNewsDetail(id) {
  const response = await fetch(`${API_URL}/berita/${id}`);

  if (!response.ok) {
    throw new Error('Berita tidak ditemukan');
  }

  return response.json();
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
