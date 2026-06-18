import React, { useEffect, useRef, useState } from 'react';
import { PARTNER_UNIVERSITIES } from '../utils/data';

// Duplicates the list so the ticker loops seamlessly
const UNIS = [...PARTNER_UNIVERSITIES, ...PARTNER_UNIVERSITIES];

export default function UniScrollTicker() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastScrollY = useRef(window.scrollY);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      // Scroll down → unis move right, scroll up → unis move left
      offsetRef.current += delta * 0.4;

      // Loop: total track width is half the full duplicated width
      const singleWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
      if (offsetRef.current > singleWidth) offsetRef.current -= singleWidth;
      if (offsetRef.current < 0) offsetRef.current += singleWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: '4rem', paddingRight: '4rem', marginBottom: '3rem' }}>
        <div className="section-tag">Global Network</div>
        <h2 className="section-h2">Universities & Colleges<br /><em>That Partner With Us</em></h2>
        <p className="section-p">Scroll the page to browse our network of 300+ partner institutions worldwide.</p>
      </div>

      {/* Ticker track */}
      <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(90deg, var(--deep), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(-90deg, var(--deep), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div ref={trackRef} style={{ display: 'flex', gap: '1.5rem', width: 'max-content', willChange: 'transform', transition: 'none' }}>
          {UNIS.map((uni, i) => (
            <div key={i} style={{
              flexShrink: 0,
              padding: '1rem 2rem',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              fontSize: '0.85rem',
              color: 'var(--silver)',
              whiteSpace: 'nowrap',
              letterSpacing: '0.03em',
              transition: 'border-color 0.3s, color 0.3s',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--silver)'; }}>
              {uni}
            </div>
          ))}
        </div>
      </div>

      {/* Second row going opposite direction */}
      <div style={{ overflow: 'hidden', width: '100%', position: 'relative', marginTop: '1.5rem' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(90deg, var(--deep), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(-90deg, var(--deep), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <SecondRow />
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--silver)', letterSpacing: '0.05em' }}>
          ↕ Scroll the page to browse all partner universities
        </p>
      </div>
    </section>
  );
}

// Second row moves in opposite direction
function SecondRow() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastScrollY = useRef(window.scrollY);

  // Offset second row so it starts from middle
  useEffect(() => {
    if (trackRef.current) {
      const half = trackRef.current.scrollWidth / 4;
      offsetRef.current = half;
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      // Opposite direction to first row
      offsetRef.current -= delta * 0.4;

      const singleWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
      if (offsetRef.current > singleWidth) offsetRef.current -= singleWidth;
      if (offsetRef.current < 0) offsetRef.current += singleWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reverse the list for second row
  const UNIS2 = [...PARTNER_UNIVERSITIES].reverse();
  const DOUBLED = [...UNIS2, ...UNIS2];

  return (
    <div ref={trackRef} style={{ display: 'flex', gap: '1.5rem', width: 'max-content', willChange: 'transform', transition: 'none' }}>
      {DOUBLED.map((uni, i) => (
        <div key={i} style={{
          flexShrink: 0,
          padding: '1rem 2rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          fontSize: '0.85rem',
          color: 'var(--silver)',
          whiteSpace: 'nowrap',
          letterSpacing: '0.03em',
          transition: 'border-color 0.3s, color 0.3s',
          cursor: 'default',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--silver)'; }}>
          {uni}
        </div>
      ))}
    </div>
  );
}
