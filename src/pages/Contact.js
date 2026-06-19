import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StarRating from '../components/StarRating';
import { submitToSheets } from '../utils/sheets';
import { CONTACT_INFO } from '../utils/data';

const INIT_CF = { name: '', email: '', phone: '', destination: '', level: '', message: '' };
const INIT_FF = { name: '', email: '', recommend: 'Yes, absolutely', message: '', overallRating: 0, guidanceRating: 0, visaRating: 0 };

export default function Contact() {
  const [tab, setTab] = useState('consult');
  const [cf, setCf] = useState(INIT_CF);
  const [ff, setFf] = useState(INIT_FF);
  const [cfState, setCfState] = useState('idle');
  const [ffState, setFfState] = useState('idle');

  const upCf = k => e => setCf(p => ({ ...p, [k]: e.target.value }));
  const upFf = k => e => setFf(p => ({ ...p, [k]: e.target.value }));

  const submitConsult = async e => {
    e.preventDefault();
    setCfState('loading');
    const r = await submitToSheets(cf, 'Consultation');
    if (r.success) { setCfState('success'); setCf(INIT_CF); } else setCfState('error');
  };

  const submitFeedback = async e => {
    e.preventDefault();
    setFfState('loading');
    const r = await submitToSheets(ff, 'Feedback');
    if (r.success) setFfState('success'); else setFfState('error');
  };

  const tabBtn = (id, label) => (
    <button onClick={() => setTab(id)} style={{ padding: '1rem 2.5rem', background: 'none', border: 'none', borderBottom: tab === id ? '2px solid var(--gold)' : '2px solid transparent', color: tab === id ? 'var(--gold)' : 'var(--silver)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-body)', marginBottom: '-1px', transition: 'all 0.3s' }}>{label}</button>
  );

  return (
    <PageTransition>
      <div className="pt">
        <div className="section-inner" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Get in Touch</div>
            <h1 className="section-h2" style={{ maxWidth: 640 }}>Begin Your Journey to a <em>Dream University</em></h1>
          </motion.div>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginTop: '2rem' }}>
            {tabBtn('consult', 'Book a Consultation')}
            {tabBtn('feedback', 'Share Feedback')}
          </div>
        </div>

        {tab === 'consult' && (
          <motion.div key="consult" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '6rem', alignItems: 'start', paddingTop: '3rem', paddingBottom: '5rem' }} className2="contact-grid">
              <div>
                <p className="section-p" style={{ marginBottom: '3rem' }}>Book a free consultation with one of our expert counsellors. No pressure — just clear, honest guidance.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                  {CONTACT_INFO.map(({ label, value }) => (
                    <div key={label} style={{ paddingBottom: '1.8rem', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>{label}</div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--platinum)', whiteSpace: 'pre-line' }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              {cfState === 'success' ? (
                <div style={{ textAlign: 'center', padding: '4rem 3rem', background: 'var(--card)', border: '1px solid var(--gold)' }}>
                  <div style={{ width: 60, height: 60, border: '1px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '1.5rem', margin: '0 auto 1.5rem' }}>✓</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 500, marginBottom: '0.8rem' }}>Consultation Request Received!</div>
                  <p style={{ color: 'var(--silver)', fontSize: '0.9rem' }}>Our counsellor will reach out within 24 hours.</p>
                  <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setCfState('idle')}>Submit Another</button>
                </div>
              ) : (
                <form className="form" onSubmit={submitConsult}>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label">Full Name *</label><input className="form-input" required placeholder="Your full name" value={cf.name} onChange={upCf('name')} /></div>
                    <div className="form-group"><label className="form-label">Email *</label><input className="form-input" type="email" required placeholder="your@email.com" value={cf.email} onChange={upCf('email')} /></div>
                  </div>
                  <div className="form-group"><label className="form-label">Phone / WhatsApp</label><input className="form-input" placeholder="+91 98xxx xxxxx" value={cf.phone} onChange={upCf('phone')} /></div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Preferred Destination</label>
                      <select className="form-select" value={cf.destination} onChange={upCf('destination')}>
                        <option value="">Select a country</option>
                        {['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'Netherlands', 'Ireland', 'Other / Undecided'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Level of Study</label>
                      <select className="form-select" value={cf.level} onChange={upCf('level')}>
                        <option value="">Select level</option>
                        {["Undergraduate (Bachelor's)", "Postgraduate (Master's)", 'PhD / Doctorate', 'Foundation / Diploma', 'MBA', 'Other'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group"><label className="form-label">Tell Us About Your Goals *</label><textarea className="form-textarea" required placeholder="Share your academic background, field of interest, target universities..." value={cf.message} onChange={upCf('message')} /></div>
                  {cfState === 'error' && <p className="form-error">Something went wrong. Please try again or email us directly.</p>}
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={cfState === 'loading'}>{cfState === 'loading' ? 'Submitting...' : 'Book Free Consultation →'}</button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--silver)', opacity: 0.6 }}>Your data is securely stored and only used to contact you about your consultation.</p>
                </form>
              )}
              <style>{`@media(max-width:900px){ .contact-grid{ grid-template-columns:1fr !important; gap:3rem !important; } }`}</style>
            </div>
          </motion.div>
        )}

        {tab === 'feedback' && (
          <motion.div key="feedback" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="section-inner" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
              {ffState === 'success' ? (
                <div style={{ textAlign: 'center', padding: '4rem 3rem', background: 'var(--card)', border: '1px solid var(--gold)', maxWidth: 500 }}>
                  <div style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Thank You for Your Feedback!</div>
                  <p style={{ color: 'var(--silver)', fontSize: '0.9rem' }}>Your insights help us guide future students even better.</p>
                  <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setFfState('idle')}>Submit Another</button>
                </div>
              ) : (
                <form className="form" onSubmit={submitFeedback} style={{ maxWidth: 680 }}>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label">Your Name</label><input className="form-input" placeholder="Your name" value={ff.name} onChange={upFf('name')} /></div>
                    <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" placeholder="your@email.com" value={ff.email} onChange={upFf('email')} /></div>
                  </div>
                  <StarRating label="Overall Counselling Experience" value={ff.overallRating} onChange={v => setFf(p => ({ ...p, overallRating: v }))} />
                  <StarRating label="Quality of Application Guidance" value={ff.guidanceRating} onChange={v => setFf(p => ({ ...p, guidanceRating: v }))} />
                  <StarRating label="Visa & Documentation Support" value={ff.visaRating} onChange={v => setFf(p => ({ ...p, visaRating: v }))} />
                  <div className="form-group"><label className="form-label">Additional Comments</label><textarea className="form-textarea" placeholder="How did PathWave help you achieve your study abroad goals?" value={ff.message} onChange={upFf('message')} /></div>
                  <div className="form-group">
                    <label className="form-label">Would you recommend PathWave?</label>
                    <select className="form-select" value={ff.recommend} onChange={upFf('recommend')}>
                      {['Yes, absolutely', 'Very likely', 'Neutral', 'Unlikely'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  {ffState === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={ffState === 'loading'}>{ffState === 'loading' ? 'Submitting...' : 'Submit Feedback'}</button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
