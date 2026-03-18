import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  const nav = useNavigate();
  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '6rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>404</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300 }}>Page Not Found</div>
        <p style={{ color: 'var(--silver)', maxWidth: 400 }}>The page you're looking for doesn't exist. Let's get you back on the right path.</p>
        <button className="btn-primary" onClick={() => nav('/')}>Go Home</button>
      </div>
    </PageTransition>
  );
}
