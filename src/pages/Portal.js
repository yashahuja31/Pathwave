import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useAuth } from '../context/AuthContext';
import './Portal.css';

const STEPS = ['Profile Submitted','Shortlist Created','Applications Sent','Offers Received','Visa Applied','Ready to Fly!'];

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

export default function Portal() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  const currentStep = user.status === 'Application In Progress' ? 2 : user.status === 'Offer Received' ? 3 : 1;

  const handleLogout = () => { logout(); nav('/'); };

  return (
    <PageTransition>
      <div className="portal-page pt">
        {/* Sidebar */}
        <aside className="portal-sidebar">
          <div className="portal-brand">PathWave <span>Portal</span></div>
          <div className="portal-user-info">
            <div className="portal-avatar">{user.name.split(' ').map(n => n[0]).join('')}</div>
            <div>
              <div className="portal-user-name">{user.name}</div>
              <div className="portal-user-email">{user.email}</div>
            </div>
          </div>
          <nav className="portal-nav">
            {[['overview','Overview'],['documents','Documents'],['updates','Updates'],['profile','My Profile']].map(([id, label]) => (
              <button key={id} className={`portal-nav-link${activeSection === id ? ' active' : ''}`} onClick={() => setActiveSection(id)}>{label}</button>
            ))}
          </nav>
          <button className="portal-logout" onClick={handleLogout}>Sign Out</button>
        </aside>

        {/* Main */}
        <main className="portal-main">
          {activeSection === 'overview' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="portal-section-title">Overview</div>
              <div className="portal-welcome">Welcome back, {user.name.split(' ')[0]}! 👋</div>

              {/* Status Card */}
              <div className="portal-status-card">
                <div className="portal-status-label">Application Status</div>
                <div className="portal-status-value">{user.status}</div>
                <div className="portal-status-sub">{user.level} · {user.country}</div>
                <div className="portal-status-sub" style={{ marginTop: '0.3rem' }}>Target: {user.university}</div>
              </div>

              {/* Progress */}
              <div className="portal-card" style={{ marginTop: '2rem' }}>
                <div className="portal-card-title">Application Journey</div>
                <div className="portal-steps">
                  {STEPS.map((s, i) => (
                    <div key={i} className={`portal-step${i < currentStep ? ' done' : ''}${i === currentStep ? ' active' : ''}`}>
                      <div className="portal-step-dot">{i < currentStep ? '✓' : i + 1}</div>
                      <div className="portal-step-label">{s}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick stats */}
              <div className="portal-quick-stats">
                {[['2','Pending Tasks'],['5','Universities Shortlisted'],['1','Offer Received'],['Mar 30','Next Deadline']].map(([n, l]) => (
                  <div className="portal-quick-stat" key={l}>
                    <div className="portal-quick-num">{n}</div>
                    <div className="portal-quick-label">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'documents' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="portal-section-title">Documents</div>
              <div className="portal-card">
                <div className="portal-card-title">Your Files</div>
                <div className="portal-docs">
                  {DOCS.map((d, i) => (
                    <div className="portal-doc-row" key={i}>
                      <div className="portal-doc-icon">📄</div>
                      <div className="portal-doc-info">
                        <div className="portal-doc-name">{d.name}</div>
                        <div className="portal-doc-date">{d.date}</div>
                      </div>
                      <div className={`portal-doc-status ${d.status.toLowerCase()}`}>{d.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'updates' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="portal-section-title">Counsellor Updates</div>
              <div className="portal-updates">
                {UPDATES.map((u, i) => (
                  <div className="portal-update" key={i}>
                    <div className="portal-update-date">{u.date}</div>
                    <div className="portal-update-msg">{u.msg}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'profile' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="portal-section-title">My Profile</div>
              <div className="portal-card">
                <div className="portal-profile-grid">
                  {[['Full Name', user.name],['Email', user.email],['Target University', user.university],['Study Level', user.level],['Destination Country', user.country],['Application Status', user.status]].map(([l, v]) => (
                    <div className="portal-profile-item" key={l}>
                      <div className="portal-profile-label">{l}</div>
                      <div className="portal-profile-val">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => nav('/contact')}>Contact My Counsellor</button>
            </motion.div>
          )}
        </main>
      </div>
    </PageTransition>
  );
}
