import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { NAV_LINKS } from '../utils/data';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo">
        PathWave <span>International</span>
      </NavLink>

      {/* Desktop Links */}
      <div className="nav-desktop">
        {NAV_LINKS.map(n => (
          <NavLink key={n.path} to={n.path} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            {n.label}
          </NavLink>
        ))}
        {user ? (
          <div className="nav-user">
            <NavLink to="/portal" className="nav-link">Portal</NavLink>
            <button className="nav-cta outline" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="nav-user">
            <NavLink to="/login" className="nav-link">Student Login</NavLink>
            <NavLink to="/contact" className="nav-cta">Free Consultation</NavLink>
          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="nav-mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}>
            {NAV_LINKS.map(n => (
              <NavLink key={n.path} to={n.path} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
                {n.label}
              </NavLink>
            ))}
            {user ? (
              <>
                <NavLink to="/portal" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Student Portal</NavLink>
                <button className="nav-mobile-cta outline" onClick={() => { handleLogout(); setMenuOpen(false); }}>Logout</button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Student Login</NavLink>
                <NavLink to="/contact" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>Free Consultation</NavLink>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
