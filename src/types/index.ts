// Define los tipos TypeScript usados en toda la app.
export interface Antenna {
  technology: string;
  speedMbps: string;
}

export interface Vendor {
  id: string;
  picture: string;
  foundationDate: number;
  vendor: string;
  antennas: Antenna[];
}
