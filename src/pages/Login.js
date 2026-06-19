import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = login(email, password);
    setLoading(false);
    if (res.success) nav('/portal');
    else setError(res.error);
  };

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: 440, background: 'var(--card)', border: '1px solid var(--border)', padding: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', textAlign: 'center' }}>
            PathWave <span style={{ color: 'var(--white)', fontWeight: 300 }}>International</span>
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--silver)', marginTop: '0.4rem' }}>Student Portal</div>
          <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '1.8rem auto' }} />

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-input" type="password" required placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In to Portal'}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', fontSize: '0.78rem', color: 'var(--silver)', lineHeight: 1.6 }}>
            <strong>Demo credentials:</strong><br />
            student@pathwave.com / student123<br />
            demo@pathwave.com / demo123
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--silver)', marginTop: '1.5rem' }}>
            Not a PathWave student yet?{' '}
            <button onClick={() => nav('/contact')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', fontSize: '0.82rem', fontFamily: 'var(--font-body)' }}>
              Book a free consultation →
            </button>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
