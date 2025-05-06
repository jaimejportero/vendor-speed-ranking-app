import { render, screen, waitFor } from '@testing-library/react';
import RankingPage from './RankingPage';
import * as api from '../api/fetchVendors';

jest.mock('../api/fetchVendors');

const mockData = [
    {
      id: '1',
      vendor: 'Zeta',
      foundationDate: 0,
      picture: '',
      antennas: [
        { technology: '2G', speedMbps: '100 Mbps' },
        { technology: '3G', speedMbps: '150 Mbps' },
        { technology: '4G', speedMbps: '300 Mbps' },
        { technology: 'LTE', speedMbps: '400 Mbps' },
        { technology: '5G', speedMbps: '600 Mbps' },
      ],
    },
    {
      id: '2',
      vendor: 'Alpha',
      foundationDate: 0,
      picture: '',
      antennas: [
        { technology: '2G', speedMbps: '120 Mbps' },
        { technology: '3G', speedMbps: '160 Mbps' },
        { technology: '4G', speedMbps: '500 Mbps' },
        { technology: 'LTE', speedMbps: '420 Mbps' },
        { technology: '5G', speedMbps: '700 Mbps' },
      ],
    },
];  

test('muestra vendors ordenados por velocidad 4G', async () => {
  (api.fetchVendors as jest.Mock).mockResolvedValue(mockData);
  render(<RankingPage />);
  await waitFor(() => {
    const title = screen.getByText('4G');
    const container = title.closest('div');
    const items = container?.querySelectorAll('li');

    expect(items?.[0]).toHaveTextContent('Alpha'); // 500 Mbps
    expect(items?.[1]).toHaveTextContent('Zeta');  // 300 Mbps
  });
});
