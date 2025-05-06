// Página que muestra ranking con estilos Bootstrap.
import { useEffect, useState } from 'react';
import { fetchVendors } from '../api/fetchVendors';
import { Vendor } from '../types';

export default function RankingPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    fetchVendors().then(setVendors);
  }, []);

  const getTotalSpeed = (vendor: Vendor) =>
    vendor.antennas.reduce((acc, a) => acc + parseInt(a.speedMbps), 0);

  const sorted = [...vendors].sort((a, b) => getTotalSpeed(b) - getTotalSpeed(a));

  return (
    <div>
      <h1 className="mb-4">Ranking Global</h1>
      <ul className="list-group">
        {sorted.map((v) => (
          <li key={v.id} className="list-group-item d-flex justify-content-between align-items-center">
            {v.vendor}
            <span className="badge bg-primary rounded-pill">{getTotalSpeed(v)} Mbps</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
