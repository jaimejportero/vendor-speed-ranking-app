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
      setIndex((prev) => (prev + 1) % (2 + vendors.length));
    }, 2000);
    return () => clearInterval(interval);
  }, [vendors]);

  const vendor = vendors[index - 2];
  return (
      <VendorPage vendor={vendor} />
  );
}