import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(''); setLoading(true);
    const res = login(email, password);
    setLoading(false);
    if (res.success) nav('/portal');
    else setError(res.error);
  };

  return (
    <PageTransition>
      <div className="login-page pt">
        <motion.div className="login-box"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="login-logo">PathWave <span>International</span></div>
          <div className="login-subtitle">Student Portal</div>
          <div className="login-divider" />

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

          <div className="login-demo-note">
            <strong>Demo credentials:</strong><br />
            student@pathwave.com / student123<br />
            demo@pathwave.com / demo123
          </div>

          <p className="login-footer">Not a PathWave student yet? <button className="login-link" onClick={() => nav('/contact')}>Book a free consultation →</button></p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
