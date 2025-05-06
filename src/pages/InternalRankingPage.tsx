// Página que muestra ranking interno con estilos Bootstrap.
import { useEffect, useState } from 'react';
import { fetchVendors } from '../api/fetchVendors';
import { Vendor } from '../types';

export default function InternalRankingPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    fetchVendors().then(setVendors);
  }, []);

  return (
    <div>
      <h1 className="mb-4">🏅 Ranking interno por Vendor</h1>
      {vendors.map((vendor) => (
        <div key={vendor.id} className="mb-5 card">
          <div className="card-body">
            <h3>{vendor.vendor}</h3>
            <ul className="list-group mt-3">
              {[...vendor.antennas]
                .sort((a, b) => parseInt(b.speedMbps) - parseInt(a.speedMbps))
                .map((a, i) => (
                  <li key={i} className="list-group-item d-flex justify-content-between">
                    <span>{i + 1}. {a.technology}</span>
                    <span>{a.speedMbps}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
