import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Organization from './pages/Organization.jsx';
import Curriculum from './pages/Curriculum.jsx';
import Teachers from './pages/Teachers.jsx';
import TeacherStories from './pages/TeacherStories.jsx';
import Facilities from './pages/Facilities.jsx';
import Activities from './pages/Activities.jsx';
import Achievements from './pages/Achievements.jsx';
import News from './pages/News.jsx';
import NewsDetail from './pages/NewsDetail.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import DigitalEthics from './pages/DigitalEthics.jsx';
import MarketingLab from './pages/MarketingLab.jsx';
import Contact from './pages/Contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function NotFound() {
  return (
    <section className="section">
      <div className="container notfound">
        <p className="eyebrow">Kesalahan 404</p>
        <h1>Halaman tidak ditemukan</h1>
        <p className="lead">Alamat yang kamu buka tidak tersedia atau sudah dipindahkan.</p>
        <Link to="/" className="btn btn-primary">
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      {/* HashRouter memakai # untuk rute, jadi lompat ke konten dilakukan lewat JS */}
      <button
        type="button"
        className="skip-link"
        onClick={() => {
          const main = document.getElementById('konten');
          main?.focus();
          main?.scrollIntoView();
        }}
      >
        Lewati ke konten
      </button>
      <ScrollToTop />
      <Navbar />
      <main id="konten" tabIndex={-1}>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/struktur-organisasi" element={<Organization />} />
          <Route path="/kurikulum" element={<Curriculum />} />
          <Route path="/guru" element={<Teachers />} />
          <Route path="/cerita-guru" element={<TeacherStories />} />
          <Route path="/fasilitas" element={<Facilities />} />
          <Route path="/kegiatan" element={<Activities />} />
          <Route path="/prestasi" element={<Achievements />} />
          <Route path="/berita" element={<News />} />
          <Route path="/berita/:id" element={<NewsDetail />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/etika-digital" element={<DigitalEthics />} />
          <Route path="/digital-marketing-lab" element={<MarketingLab />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
