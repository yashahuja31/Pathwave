import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ImageScroll from '../components/ImageScroll';
import { SERVICES, DESTINATIONS, TESTIMONIALS } from '../utils/data';
import './Home.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Home() {
  const nav = useNavigate();
  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="hero">
        <ImageScroll />
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <motion.div className="hero-tag" {...fadeUp(0.1)}>Global Student Admissions Consultancy</motion.div>
          <motion.h1 className="hero-h1" {...fadeUp(0.22)}>
            Your Path to a<br /><em>World-Class</em><br />University
          </motion.h1>
          <motion.p className="hero-sub" {...fadeUp(0.36)}>
            PathWave International guides ambitious students to their dream universities in the UK, USA, Canada, Australia, and Europe — with expert counselling at every step.
          </motion.p>
          <motion.div className="hero-actions" {...fadeUp(0.48)}>
            <button className="btn-primary" onClick={() => nav('/destinations')}>Explore Destinations</button>
            <button className="btn-outline" onClick={() => nav('/contact')}>Book Free Consultation</button>
          </motion.div>
        </div>
        <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}>
          {[['5000+','Students Placed'],['95%','Visa Success Rate'],['300+','Partner Universities']].map(([n, l]) => (
            <div className="stat" key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{ background: 'var(--deep)' }}>
        <div className="section-inner">
          <div className="section-tag">What We Do</div>
          <h2 className="section-h2">Services Built for<br /><em>Students Who Aim High</em></h2>
          <div className="divider" />
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <motion.div className="service-card" key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <button className="service-link" onClick={() => nav('/contact')}>Get Started →</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS STRIP ── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Where We Send Students</div>
          <h2 className="section-h2">Dream Destinations<br /><em>Made Real</em></h2>
          <div className="divider" />
          <div className="dest-strip">
            {DESTINATIONS.map((d, i) => (
              <motion.div className="dest-strip-card" key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => nav('/destinations')}>
                <div className="dest-flag">{d.flag}</div>
                <div className="dest-strip-title">{d.tag}</div>
                <div className="dest-strip-count">{['130+','4000+','200+','80+'][i]} Universities</div>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <button className="btn-outline" onClick={() => nav('/destinations')}>View All Destinations →</button>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="section-inner about-grid">
          <div className="about-visual">
            <div className="about-visual-main"><div className="about-monogram">PW</div></div>
            <div className="about-badge">
              <div className="about-badge-num">12+</div>
              <div className="about-badge-text">Years of Guidance</div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Our Foundation</div>
            <h2 className="section-h2">Guidance.<br /><em>Ambition.</em><br />Results.</h2>
            <div className="divider" />
            <p className="section-p">Since 2012, PathWave International has been the trusted partner for students and families navigating international university admissions. We don't just process applications — we shape futures.</p>
            <div className="about-pillars">
              {[
                ['Expert Counsellors', 'Former admissions officers and certified consultants with first-hand knowledge of global universities.'],
                ['Personalised Approach', 'Fully customised strategies based on your academic profile, ambitions, budget, and destination preferences.'],
                ['End-to-End Support', 'From first consultation to landing in your dream country — your guide throughout the entire journey.'],
              ].map(([t, d], i) => (
                <div className="pillar" key={i}>
                  <div className="pillar-num">0{i + 1}</div>
                  <div><div className="pillar-title">{t}</div><div className="pillar-desc">{d}</div></div>
                </div>
              ))}
            </div>
            <button className="btn-outline" style={{ marginTop: '2rem' }} onClick={() => nav('/about')}>Our Story →</button>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 4rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-h2" style={{ textAlign: 'center' }}>Your Journey in <em>Four Steps</em></h2>
          </div>
          <div className="process-steps">
            {[
              ['Consult', 'A free session to understand your academic profile, goals, budget, and destination preferences.'],
              ['Strategise', 'We build a personalised university shortlist and application roadmap tailored to you.'],
              ['Apply', 'Our experts guide your essays, documents, and submissions to maximise acceptance chances.'],
              ['Arrive', 'Visa, accommodation, and pre-departure prep — you land in your new country fully ready.'],
            ].map(([t, d], i) => (
              <motion.div className="process-step" key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                <div className="step-num">0{i + 1}</div>
                <div className="step-title">{t}</div>
                <div className="step-desc">{d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--deep)' }}>
        <div className="section-inner">
          <div className="section-tag">Student Voices</div>
          <h2 className="section-h2">Stories of <em>Success</em></h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div className="testimonial" key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="testimonial-quote">"{t.quote}"</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="cta-band-title">Ready to Begin Your <em>Global Journey?</em></div>
          <p className="cta-band-sub">Book a free consultation with our expert counsellors and take the first step toward your dream university.</p>
          <button onClick={() => nav('/contact')} className="cta-band-btn">Book Free Consultation</button>
        </motion.div>
      </section>
    </PageTransition>
  );
}
