// 💡 Añadido efecto de transición fade entre vendors
// Vista rotatoria que muestra cada pantalla embebida con título animado y vendor destacado
import { useEffect, useState } from 'react';
import HomePage from './HomePage';
import RankingPage from './RankingPage';
import VendorPage from './VendorPage';
import { Vendor } from '../types';
import { fetchVendors } from '../api/fetchVendors';

export default function RotatingView() {
  const [index, setIndex] = useState(0);
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    fetchVendors().then(setVendors);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % vendors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [vendors]);

  if (vendors.length === 0) return <div className="text-center">Cargando rotación...</div>;

  // Mostrar solo vendors, sin Home ni Ranking

  const vendor = vendors[index];
  return (
    <div className="fade-transition">
      <h2 className="text-center mb-3">Mostrando información de: {vendor.vendor}</h2>
      <VendorPage vendor={vendor} />
    </div>
  );
}