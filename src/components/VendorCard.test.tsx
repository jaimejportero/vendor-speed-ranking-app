import { render, screen, fireEvent } from '@testing-library/react';
import { VendorCard } from './VendorCard';
import { Vendor } from '../types';

const mockVendor: Vendor = {
  id: '1',
  vendor: 'Nokia',
  picture: 'https://example.com/logo.jpg',
  foundationDate: 1609459200000,
  antennas: [],
};

test('muestra el nombre del vendor y reacciona al clic', () => {
  const handleClick = jest.fn();
  render(<VendorCard vendor={mockVendor} onClick={handleClick} />);
  expect(screen.getByText('Nokia')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Nokia'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
