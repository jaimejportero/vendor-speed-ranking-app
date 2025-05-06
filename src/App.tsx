// src/App.tsx
import { AppRoutes } from './routes';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
