// Tarjeta con estilo Bootstrap que representa un vendor resumido.
import { Vendor } from '../types';
import { formatDate } from '../utils/formatDate';

interface Props {
  vendor: Vendor;
  onClick: () => void;
}

export const VendorCard = ({ vendor, onClick }: Props) => (
  <div className="card h-100" onClick={onClick} style={{ cursor: 'pointer' }}>
    <div className="card-body text-center">
      <img src={vendor.picture} alt={vendor.vendor} className="rounded-circle mb-3" width={64} height={64} />
      <h5 className="card-title">{vendor.vendor}</h5>
      <p className="card-text">Fundado el {formatDate(vendor.foundationDate)}</p>
    </div>
  </div>
);
