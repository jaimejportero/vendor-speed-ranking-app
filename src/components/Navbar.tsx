// Barra de navegación con Bootstrap para acceder a las distintas páginas (mejorada para ser responsive)
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">VendorApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ranking">Ranking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rotating">Rotación</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
