import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { NAV_LINKS } from '../utils/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const logoStyle = { fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.04em', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' };
  const linkStyle = (active) => ({ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: active ? 'var(--gold)' : 'var(--silver)', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s', padding: 0, position: 'relative' });
  const ctaStyle = { padding: '0.55rem 1.6rem', background: 'var(--gold)', border: '1px solid var(--gold)', color: 'var(--midnight)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, transition: 'all 0.3s', textDecoration: 'none' };

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: 'var(--nav-h)', padding: '0 4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: scrolled ? 'rgba(10,10,15,0.97)' : 'rgba(10,10,15,0.75)', backdropFilter: 'blur(20px)', borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent', transition: 'all 0.3s' }}>
      <button style={logoStyle} onClick={() => navigate('/')}>PathWave <span style={{ color: 'var(--white)', fontWeight: 300 }}>International</span></button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-desktop">
        {NAV_LINKS.map(n => <NavLink key={n.path} to={n.path} style={({ isActive }) => linkStyle(isActive)}>{n.label}</NavLink>)}
        {user
          ? <><NavLink to="/portal" style={({ isActive }) => linkStyle(isActive)}>Portal</NavLink><button style={{ ...ctaStyle, background: 'transparent', color: 'var(--gold)' }} onClick={() => { logout(); navigate('/'); }}>Logout</button></>
          : <><NavLink to="/login" style={({ isActive }) => linkStyle(isActive)}>Student Login</NavLink><NavLink to="/contact" style={ctaStyle}>Free Consultation</NavLink></>
        }
      </div>

      <button onClick={() => setOpen(o => !o)} style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }} className="nav-ham">
        <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--white)', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
        <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--white)', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
        <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--white)', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}
            style={{ position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, background: 'rgba(10,10,15,0.98)', borderBottom: '1px solid var(--border)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 199 }}>
            {NAV_LINKS.map(n => <NavLink key={n.path} to={n.path} style={{ fontSize: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--silver)', textDecoration: 'none' }} onClick={() => setOpen(false)}>{n.label}</NavLink>)}
            <NavLink to="/contact" style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--gold)', color: 'var(--midnight)', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }} onClick={() => setOpen(false)}>Free Consultation</NavLink>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .nav-desktop { display: none !important; } .nav-ham { display: flex !important; } }
      `}</style>
    </nav>
  );
}
