import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, SERVICES } from '../utils/data';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', padding: '5rem 4rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border)', maxWidth: 1200, margin: '0 auto' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '1rem' }}>
            PathWave <span style={{ color: 'var(--white)', fontWeight: 300 }}>International</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--silver)', maxWidth: 260, lineHeight: 1.8 }}>Your trusted partner for international university admissions, visa support, and study abroad guidance.</p>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>Navigate</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {NAV_LINKS.map(n => <NavLink key={n.path} to={n.path} style={{ fontSize: '0.85rem', color: 'var(--silver)', textDecoration: 'none' }}>{n.label}</NavLink>)}
            <NavLink to="/portal" style={{ fontSize: '0.85rem', color: 'var(--silver)', textDecoration: 'none' }}>Student Portal</NavLink>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>Services</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {SERVICES.map(s => <NavLink key={s.title} to="/contact" style={{ fontSize: '0.85rem', color: 'var(--silver)', textDecoration: 'none' }}>{s.title}</NavLink>)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {['New Delhi (HQ)', 'Mumbai', 'Bangalore', 'Dubai'].map(o => <span key={o} style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>{o}</span>)}
            <a href="mailto:hello@pathwaveinternational.com" style={{ fontSize: '0.85rem', color: 'var(--gold)', textDecoration: 'none' }}>hello@pathwaveinternational.com</a>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ fontSize: '0.78rem', color: 'var(--silver)' }}>© {new Date().getFullYear()} PathWave International. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['ICEF Member', 'AIRC Certified', 'GDPR Compliant'].map(b => (
            <span key={b} style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--silver)', padding: '0.3rem 0.7rem', border: '1px solid var(--border)' }}>{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
