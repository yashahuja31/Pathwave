import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../utils/data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <div className="footer-brand">PathWave <span>International</span></div>
          <p className="footer-desc">Your trusted partner for international university admissions, visa support, and study abroad guidance.</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">LI</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">FB</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Navigate</div>
          <div className="footer-links">
            {NAV_LINKS.map(n => <NavLink key={n.path} to={n.path} className="footer-link">{n.label}</NavLink>)}
            <NavLink to="/portal" className="footer-link">Student Portal</NavLink>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Our Services</div>
          <div className="footer-links">
            {['University Admissions', 'Profile Building', 'SOP & Essay Coaching', 'Visa Assistance', 'Scholarship Guidance', 'Pre-Departure Support'].map(s => (
              <NavLink key={s} to="/contact" className="footer-link">{s}</NavLink>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Offices</div>
          <div className="footer-links">
            <span className="footer-link static">New Delhi (HQ)</span>
            <span className="footer-link static">Mumbai</span>
            <span className="footer-link static">Bangalore</span>
            <span className="footer-link static">Dubai</span>
            <a href="mailto:hello@pathwaveinternational.com" className="footer-link gold">hello@pathwaveinternational.com</a>
            <a href="tel:+919810000000" className="footer-link">+91 98100 00000</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© {new Date().getFullYear()} PathWave International. All rights reserved.</div>
        <div className="footer-badges">
          <span className="footer-badge">ICEF Member</span>
          <span className="footer-badge">AIRC Certified</span>
          <span className="footer-badge">GDPR Compliant</span>
        </div>
      </div>
    </footer>
  );
}
