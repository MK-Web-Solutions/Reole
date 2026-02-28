// router.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/Gallery';
import VideosPage from './pages/Videos';
import CommunityPage from './pages/Community';
import SongPage from './pages/Songs';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/songs" element={<SongPage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/videos" element={<VideosPage />} />
    <Route path="/community" element={<CommunityPage />} />
  </Routes>
);

export default AppRoutes;