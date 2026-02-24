// router.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GalleryPage from './Gallery';
import VideosPage from './Videos';
import CommunityPage from './Community';
import SongPage from './Songs';

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