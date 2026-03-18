import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StarRating from '../components/StarRating';
import { submitToSheets } from '../utils/sheets';
import './Contact.css';

const INIT_CF = { name:'', email:'', phone:'', destination:'', level:'', message:'' };
const INIT_FF = { name:'', email:'', recommend:'Yes, absolutely', message:'', overallRating:0, guidanceRating:0, visaRating:0 };

export default function Contact() {
  const [cf, setCf] = useState(INIT_CF);
  const [ff, setFf] = useState(INIT_FF);
  const [cfState, setCfState] = useState('idle'); // idle | loading | success | error
  const [ffState, setFfState] = useState('idle');
  const [activeTab, setActiveTab] = useState('consult');

  const upCf = k => e => setCf(p => ({ ...p, [k]: e.target.value }));
  const upFf = k => e => setFf(p => ({ ...p, [k]: e.target.value }));

  const submitConsult = async e => {
    e.preventDefault();
    setCfState('loading');
    const res = await submitToSheets(cf, 'Consultation');
    if (res.success) { setCfState('success'); setCf(INIT_CF); }
    else setCfState('error');
  };

  const submitFeedback = async e => {
    e.preventDefault();
    setFfState('loading');
    const res = await submitToSheets(ff, 'Feedback');
    if (res.success) { setFfState('success'); setFf(INIT_FF); }
    else setFfState('error');
  };

  return (
    <PageTransition>
      <div className="pt">
        {/* Header */}
        <div className="section-inner" style={{ padding: '5rem 0 3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Get in Touch</div>
            <h1 className="section-h2" style={{ maxWidth: 640 }}>Begin Your Journey to a <em>Dream University</em></h1>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="section-inner" style={{ paddingBottom: 0 }}>
          <div className="contact-tabs">
            <button className={`contact-tab${activeTab === 'consult' ? ' active' : ''}`} onClick={() => setActiveTab('consult')}>Book a Consultation</button>
            <button className={`contact-tab${activeTab === 'feedback' ? ' active' : ''}`} onClick={() => setActiveTab('feedback')}>Share Feedback</button>
          </div>
        </div>

        {/* Consultation Form */}
        {activeTab === 'consult' && (
          <motion.div key="consult" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="contact-layout section-inner">
              <div className="contact-info">
                <p className="section-p" style={{ marginBottom: '3rem' }}>Book a free consultation with one of our expert counsellors. No pressure — just clear, honest guidance on your best path forward.</p>
                <div className="contact-info-block">
                  {[
                    ['Headquarters', 'PathWave International\nNew Delhi, India'],
                    ['Counselling Offices', 'Delhi'],
                    ['Email', 'info@pathwaveinternational.com'],
                    ['Phone', '+91 96500 69340'],
                    ['WhatsApp', '+91 96500 69340'],
                  ].map(([l, v]) => (
                    <div className="contact-item" key={l}>
                      <div className="contact-item-label">{l}</div>
                      <div className="contact-item-val" style={{ whiteSpace: 'pre-line' }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {cfState === 'success' ? (
                <div className="form-success">
                  <div className="form-success-icon">✓</div>
                  <div className="form-success-title">Consultation Request Received!</div>
                  <p className="form-success-sub">Our counsellor will reach out within 24 hours. Check your email for confirmation.</p>
                  <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setCfState('idle')}>Submit Another</button>
                </div>
              ) : (
                <form className="form" onSubmit={submitConsult}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" required placeholder="Your full name" value={cf.name} onChange={upCf('name')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" required placeholder="your@email.com" value={cf.email} onChange={upCf('email')} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input className="form-input" placeholder="+91 xxxxx xxxxx" value={cf.phone} onChange={upCf('phone')} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Preferred Destination</label>
                      <select className="form-select" value={cf.destination} onChange={upCf('destination')}>
                        <option value="">Select a country</option>
                        {['United Kingdom','United States','Canada','Australia','Germany','Netherlands','Ireland','Other / Undecided'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Level of Study</label>
                      <select className="form-select" value={cf.level} onChange={upCf('level')}>
                        <option value="">Select level</option>
                        {["Undergraduate (Bachelor's)","Postgraduate (Master's)",'PhD / Doctorate','Foundation / Diploma','MBA','Other'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tell Us About Your Goals *</label>
                    <textarea className="form-textarea" required placeholder="Share your academic background, field of interest, target universities, or any questions..." value={cf.message} onChange={upCf('message')} />
                  </div>
                  {cfState === 'error' && <p className="form-error">Something went wrong. Please try again or contact us directly.</p>}
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={cfState === 'loading'}>
                    {cfState === 'loading' ? 'Submitting...' : 'Book Free Consultation →'}
                  </button>
                  <p className="form-note">Your data is securely stored and will only be used to contact you about your consultation.</p>
                </form>
              )}
            </div>
          </motion.div>
        )}

        {/* Feedback Form */}
        {activeTab === 'feedback' && (
          <motion.div key="feedback" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="section-inner" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
              {ffState === 'success' ? (
                <div className="form-success" style={{ maxWidth: 500 }}>
                  <div className="form-success-icon">✓</div>
                  <div className="form-success-title">Thank You for Your Feedback!</div>
                  <p className="form-success-sub">Your insights help us guide future students even better.</p>
                  <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setFfState('idle')}>Submit Another</button>
                </div>
              ) : (
                <form className="form" onSubmit={submitFeedback} style={{ maxWidth: 680 }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input className="form-input" placeholder="Your name" value={ff.name} onChange={upFf('name')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-input" type="email" placeholder="your@email.com" value={ff.email} onChange={upFf('email')} />
                    </div>
                  </div>
                  <StarRating label="Overall Counselling Experience" value={ff.overallRating} onChange={v => setFf(p => ({ ...p, overallRating: v }))} />
                  <StarRating label="Quality of Application Guidance" value={ff.guidanceRating} onChange={v => setFf(p => ({ ...p, guidanceRating: v }))} />
                  <StarRating label="Visa & Documentation Support" value={ff.visaRating} onChange={v => setFf(p => ({ ...p, visaRating: v }))} />
                  <div className="form-group">
                    <label className="form-label">Additional Comments</label>
                    <textarea className="form-textarea" placeholder="How did PathWave help you achieve your study abroad goals?" value={ff.message} onChange={upFf('message')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Would you recommend PathWave?</label>
                    <select className="form-select" value={ff.recommend} onChange={upFf('recommend')}>
                      {['Yes, absolutely','Very likely','Neutral','Unlikely'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  {ffState === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={ffState === 'loading'}>
                    {ffState === 'loading' ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
