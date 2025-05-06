// Página principal con diseño elegante usando Bootstrap.
import { useEffect, useState } from 'react';
import { fetchVendors } from '../api/fetchVendors';
import { Vendor } from '../types';
import { VendorCard } from '../components/VendorCard';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVendors().then(setVendors);
  }, []);

  return (
    <div>
      <h1 className="mb-4">Clasificación Global de Vendors</h1>
      <div className="row">
        {vendors.map((v) => (
          <div className="col-md-4 mb-4" key={v.id}>
            <VendorCard vendor={v} onClick={() => navigate(`/vendor/${v.id}`)} />
          </div>
        ))}
      </div>
    </div>
  );
}