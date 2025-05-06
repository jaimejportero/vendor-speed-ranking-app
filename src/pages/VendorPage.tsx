// Página individual para un vendor, mostrando su info y antenas.
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Vendor } from '../types';
import { formatDate } from '../utils/formatDate';
import { AntennaList } from '../components/AntennaList';

interface Props {
  vendor?: Vendor;
}

export default function VendorPage({ vendor: propVendor }: Props) {
  const { id } = useParams();
  const [vendor, setVendor] = useState<Vendor | null>(null);

  useEffect(() => {
    if (propVendor) {
      setVendor(propVendor);
    } else if (id) {
      import('../api/fetchVendors').then(({ fetchVendors }) => {
        fetchVendors().then((data) => {
          const found = data.find((v) => v.id === id);
          setVendor(found || null);
        });
      });
    }
  }, [id, propVendor]);

  if (!vendor) return <div className="text-center">Cargando...</div>;

  return (
    <div className="card">
      <div className="card-body">
        <div className="text-center">
          <img src={vendor.picture} alt={vendor.vendor} className="rounded-circle mb-3" />
          <h2>{vendor.vendor}</h2>
          <p>Fundado el {formatDate(vendor.foundationDate)}</p>
        </div>
        <h4>Antenas:</h4>
        <AntennaList antennas={vendor.antennas} />
      </div>
    </div>
  );
}