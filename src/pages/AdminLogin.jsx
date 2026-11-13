import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../lib/api.js';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await adminLogin(username, password);
      setPassword('');
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Login gagal.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '440px' }}>
        <p className="eyebrow">SMEKSA · ADMINISTRATOR</p>
        <h1>Login Admin</h1>
        <p className="lead">Masuk untuk mengelola konten website Bisnis Digital.</p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '18px' }}>
            <label htmlFor="admin-username">Username</label>
            <input
              id="admin-username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              style={{ width: '100%', padding: '12px', marginTop: '6px' }}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              style={{ width: '100%', padding: '12px', marginTop: '6px' }}
            />
          </div>

          {error && (
            <p role="alert" style={{ color: '#c62828' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Memeriksa...' : 'Masuk'}
          </button>
        </form>
      </div>
    </section>
  );
}
