import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useAuth } from '../context/AuthContext';

const STEPS = ['Profile Submitted', 'Shortlist Created', 'Applications Sent', 'Offers Received', 'Visa Applied', 'Ready to Fly!'];
const DOCS = [
  { name: 'SOP Draft v2.pdf', status: 'Reviewed', date: 'Mar 10, 2026' },
  { name: 'LOR Request Template.docx', status: 'Pending', date: 'Mar 8, 2026' },
  { name: 'University Shortlist.pdf', status: 'Approved', date: 'Mar 5, 2026' },
  { name: 'Financial Statement Guide.pdf', status: 'Reviewed', date: 'Mar 1, 2026' },
];
const UPDATES = [
  { date: 'Mar 12, 2026', msg: 'Your SOP has been reviewed. Check documents for counsellor notes.' },
  { date: 'Mar 8, 2026', msg: 'University shortlist finalised — 5 universities across Canada and UK.' },
  { date: 'Mar 2, 2026', msg: 'Welcome to PathWave! Your counsellor Priya Nair has been assigned.' },
];

const statusColor = s => s === 'Approved' ? '#22c55e' : s === 'Reviewed' ? 'var(--gold)' : 'var(--silver)';
const statusBg = s => s === 'Approved' ? 'rgba(34,197,94,0.1)' : s === 'Reviewed' ? 'var(--gold-dim)' : 'rgba(255,255,255,0.05)';

export default function Portal() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const [section, setSection] = useState('overview');
  const currentStep = user.status === 'Application In Progress' ? 2 : user.status === 'Offer Received' ? 3 : 1;

  const sideLink = (id, label) => (
    <button key={id} onClick={() => setSection(id)} style={{ background: 'none', border: 'none', textAlign: 'left', padding: '0.8rem 1rem', color: section === id ? 'var(--gold)' : 'var(--silver)', fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'var(--font-body)', borderLeft: section === id ? '2px solid var(--gold)' : '2px solid transparent', background: section === id ? 'var(--surface)' : 'none', transition: 'all 0.2s', width: '100%' }}>{label}</button>
  );

  return (
    <PageTransition>
      <div style={{ display: 'flex', minHeight: '100vh', paddingTop: 'var(--nav-h)' }}>
        {/* Sidebar */}
        <aside style={{ width: 280, flexShrink: 0, background: 'var(--deep)', borderRight: '1px solid var(--border)', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'sticky', top: 'var(--nav-h)', height: 'calc(100vh - var(--nav-h))', overflowY: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '2rem' }}>
            PathWave <span style={{ color: 'var(--white)', fontWeight: 300 }}>Portal</span>
          </div>
          <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center', padding: '1.2rem', background: 'var(--card)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
            <div style={{ width: 42, height: 42, background: 'var(--gold-dim)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--gold)', flexShrink: 0 }}>
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>{user.name}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--silver)' }}>{user.email}</div>
            </div>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {[['overview', 'Overview'], ['documents', 'Documents'], ['updates', 'Updates'], ['profile', 'My Profile']].map(([id, label]) => sideLink(id, label))}
          </nav>
          <button onClick={() => { logout(); nav('/'); }} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--silver)', padding: '0.7rem', cursor: 'pointer', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.3s', fontFamily: 'var(--font-body)', marginTop: '1rem' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--danger)'; e.currentTarget.style.color = 'var(--danger)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--silver)'; }}>
            Sign Out
          </button>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: '3rem 3.5rem', overflowY: 'auto' }}>
          {section === 'overview' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <span style={{ width: 20, height: 1, background: 'var(--gold)', display: 'block' }} />Overview
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, marginBottom: '2rem' }}>Welcome back, {user.name.split(' ')[0]}! 👋</div>

              <div style={{ background: 'var(--gold)', padding: '2rem 2.5rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(10,10,15,0.6)', marginBottom: '0.4rem' }}>Application Status</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--midnight)' }}>{user.status}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(10,10,15,0.7)', marginTop: '0.3rem' }}>{user.level} · {user.country} · {user.university}</div>
              </div>

              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--silver)', marginBottom: '1.8rem' }}>Application Journey</div>
                {STEPS.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 0', borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ width: 28, height: 28, border: `1px solid ${i < currentStep ? 'var(--gold)' : 'var(--border)'}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: i < currentStep ? 'var(--midnight)' : i === currentStep ? 'var(--gold)' : 'var(--silver)', background: i < currentStep ? 'var(--gold)' : 'none', flexShrink: 0 }}>
                      {i < currentStep ? '✓' : i + 1}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: i < currentStep ? 'var(--white)' : i === currentStep ? 'var(--gold)' : 'var(--silver)', fontWeight: i === currentStep ? 500 : 300 }}>{s}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
                {[['2', 'Pending Tasks'], ['5', 'Universities Shortlisted'], ['1', 'Offer Received'], ['Mar 30', 'Next Deadline']].map(([n, l]) => (
                  <div key={l} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '1.5rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600, color: 'var(--gold)' }}>{n}</div>
                    <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--silver)', marginTop: '0.3rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {section === 'documents' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <span style={{ width: 20, height: 1, background: 'var(--gold)', display: 'block' }} />Documents
              </div>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '2rem' }}>
                <div style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--silver)', marginBottom: '1.8rem' }}>Your Files</div>
                {DOCS.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: i < DOCS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ fontSize: '1.2rem' }}>📄</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.88rem' }}>{d.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--silver)' }}>{d.date}</div>
                    </div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.6rem', color: statusColor(d.status), background: statusBg(d.status) }}>{d.status}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {section === 'updates' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <span style={{ width: 20, height: 1, background: 'var(--gold)', display: 'block' }} />Counsellor Updates
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {UPDATES.map((u, i) => (
                  <div key={i} style={{ padding: '1.5rem', background: 'var(--card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)' }}>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>{u.date}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--platinum)' }}>{u.msg}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {section === 'profile' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <span style={{ width: 20, height: 1, background: 'var(--gold)', display: 'block' }} />My Profile
              </div>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[['Full Name', user.name], ['Email', user.email], ['Target University', user.university], ['Study Level', user.level], ['Destination Country', user.country], ['Application Status', user.status]].map(([l, v]) => (
                  <div key={l} style={{ paddingBottom: '1.2rem', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>{l}</div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--platinum)' }}>{v}</div>
                  </div>
                ))}
              </div>
              <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => nav('/contact')}>Contact My Counsellor</button>
            </motion.div>
          )}
        </main>
      </div>
    </PageTransition>
  );
}
