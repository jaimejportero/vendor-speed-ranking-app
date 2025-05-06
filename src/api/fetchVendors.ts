// Simula una llamada a un backend con setTimeout devolviendo los datos del JSON local.
import vendorsData from './vendors.json';
import { Vendor } from '../types';

export const fetchVendors = (): Promise<Vendor[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(vendorsData), 1000);
  });
};