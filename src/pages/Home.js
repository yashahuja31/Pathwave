import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import InfoScrollTicker from '../components/InfoScrollTicker';
import { SERVICES, DESTINATIONS, TESTIMONIALS, STATS, WHY_CHOOSE_US } from '../utils/data';

const inView = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: d, duration: 0.55, ease: [0.22, 1, 0.36, 1] } });

export default function Home() {
  const nav = useNavigate();

  return (
    <PageTransition>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '10rem 4rem 6rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse at center,black 40%,transparent 80%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 780 }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', padding: '0.4rem 1rem', border: '1px solid var(--border)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2.5rem' }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold)', display: 'block' }} />
            Global Student Admissions Consultancy
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.2rem,7vw,6rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Your Path to a<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>World-Class</em><br />University
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36 }}
            style={{ fontSize: '1.05rem', color: 'var(--silver)', maxWidth: 520, marginBottom: '3rem', fontWeight: 300 }}>
            PathWave International guides ambitious students to their dream universities in the UK, USA, Canada, Australia, and Europe — with expert counselling at every step.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.48 }}
            style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => nav('/destinations')}>Explore Destinations</button>
            <button className="btn-outline" onClick={() => nav('/contact')}>Book Free Consultation</button>
          </motion.div>
        </div>
        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}
          style={{ position: 'absolute', right: '4rem', bottom: '6rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }} className="hero-stats">
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--silver)', marginTop: '0.2rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
        <style>{`@media(max-width:900px){ .hero-stats{ display:none !important; } }`}</style>
      </section>

      {/* ── DESTINATIONS STRIP ── */}
      <section className="section" style={{ background: 'var(--deep)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="section-inner">
          <div className="section-tag">Where We Send Students</div>
          <h2 className="section-h2">Dream Destinations<br /><em>Made Real</em></h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginTop: '3rem' }} className="dest-strip-grid">
            {DESTINATIONS.map((d, i) => (
              <motion.div key={i} {...inView(i * 0.1)} onClick={() => nav('/destinations')}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '2.5rem 2rem', cursor: 'pointer', textAlign: 'center', transition: 'all 0.3s' }}
                whileHover={{ borderColor: 'var(--gold)', y: -4 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{d.flag}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.4rem' }}>{d.tag}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>{['130+', '4000+', '200+', '80+'][i]} Universities</div>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <button className="btn-outline" onClick={() => nav('/destinations')}>View All Destinations →</button>
          </div>
          <style>{`@media(max-width:900px){ .dest-strip-grid{ grid-template-columns:1fr 1fr !important; } }`}</style>
        </div>
      </section>

      {/* ── SERVICES + WHY CHOOSE US (combined) ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="section-inner">
          {/* Services */}
          <div className="section-tag">What We Offer</div>
          <h2 className="section-h2">Our Services &<br /><em>Why Choose PathWave</em></h2>
          <p className="section-p">From your first consultation to your first day on campus — we handle every part of your journey with precision and care.</p>
          <div className="divider" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5px', background: 'var(--border)', marginBottom: '6rem' }} className="srv-grid">
            {SERVICES.map((s, i) => (
              <motion.div key={i} {...inView(i * 0.07)}
                style={{ background: 'var(--card)', padding: '2.5rem', position: 'relative', overflow: 'hidden', transition: 'background 0.3s' }}
                whileHover={{ background: 'var(--deep)' }}>
                <div style={{ width: 44, height: 44, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.6rem' }}>{s.title}</div>
                <div style={{ fontSize: '0.87rem', color: 'var(--silver)', lineHeight: 1.8 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media(max-width:900px){ .srv-grid{ grid-template-columns:1fr !important; } }`}</style>

          {/* Why Choose Us */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '5rem' }}>
            <div className="section-tag">Why PathWave</div>
            <h2 className="section-h2" style={{ maxWidth: 560 }}>Six Reasons Students<br /><em>Choose Us</em></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', marginTop: '3rem' }} className="why-grid">
              {WHY_CHOOSE_US.map((w, i) => (
                <motion.div key={i} {...inView(i * 0.08)}
                  style={{ padding: '2rem', border: '1px solid var(--border)', background: 'var(--card)', position: 'relative', transition: 'border-color 0.3s' }}
                  whileHover={{ borderColor: 'var(--gold)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold-dim)', lineHeight: 1, marginBottom: '1rem' }}>{w.num}</div>
                  <div style={{ fontWeight: 500, fontSize: '0.92rem', marginBottom: '0.6rem', color: 'var(--white)' }}>{w.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--silver)', lineHeight: 1.75 }}>{w.desc}</div>
                </motion.div>
              ))}
            </div>
            <style>{`@media(max-width:900px){ .why-grid{ grid-template-columns:1fr !important; } }`}</style>
          </div>
        </div>
      </section>

      {/* ── SCROLL-DRIVEN UNIVERSITY TICKER ── */}
      <InfoScrollTicker />

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 4rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>Your Journey in <em>Four Steps</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', position: 'relative' }} className="process-grid">
            <div style={{ position: 'absolute', top: '2rem', left: '12.5%', right: '12.5%', height: 1, background: 'var(--border)' }} className="process-line" />
            {[['Consult', 'A free session to understand your academic profile, goals, budget, and destination preferences.'], ['Strategise', 'We build a personalised university shortlist and application roadmap tailored to you.'], ['Apply', 'Our experts guide your essays and submissions to maximise your acceptance chances.'], ['Arrive', 'Visa, accommodation, and pre-departure prep — you land in your new country fully ready.']].map(([t, d], i) => (
              <motion.div key={i} {...inView(i * 0.12)} style={{ padding: '0 1.5rem', textAlign: 'center' }}>
                <div style={{ width: '4rem', height: '4rem', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--gold)', margin: '0 auto 1.5rem', background: 'var(--midnight)', position: 'relative', zIndex: 1 }}>0{i + 1}</div>
                <div style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{t}</div>
                <div style={{ fontSize: '0.83rem', color: 'var(--silver)' }}>{d}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media(max-width:900px){ .process-grid{ grid-template-columns:1fr 1fr !important; } .process-line{ display:none !important; } }`}</style>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--deep)' }}>
        <div className="section-inner">
          <div className="section-tag">Student Voices</div>
          <h2 className="section-h2">Stories of <em>Success</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '3rem' }} className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} {...inView(i * 0.1)} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--platinum)', marginBottom: '1.5rem' }}>"{t.quote}"</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: 36, height: 36, background: 'var(--gold-dim)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--gold)', flexShrink: 0 }}>{t.initial}</div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>{t.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--silver)' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <style>{`@media(max-width:900px){ .testi-grid{ grid-template-columns:1fr !important; } }`}</style>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: 'var(--gold)', padding: '5rem 4rem', textAlign: 'center' }}>
        <motion.div {...inView()}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, color: 'var(--midnight)', marginBottom: '0.8rem' }}>
            Ready to Begin Your <em style={{ fontStyle: 'italic' }}>Global Journey?</em>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'rgba(10,10,15,0.65)', marginBottom: '2rem' }}>Book a free consultation with our expert counsellors and take the first step toward your dream university.</p>
          <button onClick={() => nav('/contact')} style={{ padding: '1rem 2.5rem', background: 'var(--midnight)', color: 'var(--gold)', border: 'none', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
            Book Free Consultation
          </button>
        </motion.div>
      </section>

    </PageTransition>
  );
}
