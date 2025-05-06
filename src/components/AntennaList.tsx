// Lista estilizada de antenas con Bootstrap.
import { Antenna } from '../types';

export const AntennaList = ({ antennas }: { antennas: Antenna[] }) => (
  <ul className="list-group">
    {antennas.map((a, i) => (
      <li key={i} className="list-group-item">
        {a.technology}: {a.speedMbps}
      </li>
    ))}
  </ul>
);
