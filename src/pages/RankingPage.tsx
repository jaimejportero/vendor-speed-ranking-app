// Página que muestra ranking por tecnología con estilos Bootstrap.
import { useEffect, useState } from 'react';
import { fetchVendors } from '../api/fetchVendors';
import { Vendor } from '../types';

export default function RankingPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    fetchVendors().then(setVendors);
  }, []);

  const technologies = ['2G', '3G', '4G', 'LTE', '5G'];

  const getSpeedByTech = (vendor: Vendor, tech: string) => {
    const antenna = vendor.antennas.find((a) => a.technology === tech);
    return antenna ? parseInt(antenna.speedMbps) : 0;
  };

  return (
    <div>
      <h1 className="mb-4">Ranking por Tecnología</h1>
      {technologies.map((tech) => (
        <div key={tech} className="mb-5">
          <h3 className="mb-3">{tech}</h3>
          <ul className="list-group">
            {[...vendors]
              .sort((a, b) => getSpeedByTech(b, tech) - getSpeedByTech(a, tech))
              .map((v) => (
                <li
                  key={v.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {v.vendor}
                  <span className="badge bg-success rounded-pill">
                    {getSpeedByTech(v, tech)} Mbps
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
