// Configura las rutas de la aplicación con React Router.
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RankingPage from '../pages/RankingPage';
import VendorPage from '../pages/VendorPage';
import RotatingView from '../pages/RotatingView';
import Rotatingglobal from '../pages/RankingGlobal';
import InternalRankingPage from '../pages/InternalRankingPage';

export const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/rankingGlobal" element={<Rotatingglobal />} />
      <Route path="/rankingInterno" element={<InternalRankingPage />} />
      <Route path="/vendor/:id" element={<VendorPage />} />
      <Route path="/rotating" element={<RotatingView />} />
    </Routes>
);
