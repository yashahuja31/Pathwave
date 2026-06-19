import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { DESTINATIONS } from '../utils/data';

const inView = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: d, duration: 0.55 } });

export default function Destinations() {
  const nav = useNavigate();
  return (
    <PageTransition>
      <div className="pt">
        <div className="section-inner" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Study Destinations</div>
            <h1 className="section-h2" style={{ maxWidth: 640 }}>Your Dream Country<br /><em>Awaits You</em></h1>
            <p className="section-p">We guide students to leading universities across four continents. Wherever you want to study, PathWave knows the path.</p>
          </motion.div>
        </div>

        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem', paddingBottom: '4rem' }} className2="dest-page-grid">
          {DESTINATIONS.map((d, i) => (
            <motion.div key={i} {...inView(i * 0.1)}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '3rem', transition: 'all 0.4s' }}
              whileHover={{ borderColor: 'var(--gold)', y: -4 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>{d.flag}</div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>{d.tag}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 500, marginBottom: '1rem' }}>{d.title}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--silver)', lineHeight: 1.8 }}>{d.desc}</div>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {d.features.map((f, j) => (
                  <li key={j} style={{ fontSize: '0.83rem', color: 'var(--silver)', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <span style={{ width: 14, height: 1, background: 'var(--gold)', display: 'block', flexShrink: 0 }} />{f}
                  </li>
                ))}
              </ul>
              <button className="btn-outline" style={{ marginTop: '2rem', padding: '0.7rem 1.5rem', fontSize: '0.75rem' }} onClick={() => nav('/contact')}>
                Apply for {d.tag} →
              </button>
            </motion.div>
          ))}
          <style>{`@media(max-width:768px){ .dest-page-grid{ grid-template-columns:1fr !important; } }`}</style>
        </div>

        <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className2="partner-grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="section-tag">University Partners</div>
              <h2 className="section-h2">300+ <em>Partner</em><br />Universities</h2>
              <p className="section-p">From Ivy League to Russell Group — direct relationships that give our students a genuine edge in admissions.</p>
              <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => nav('/contact')}>Find Your University</button>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['University of Oxford', 'University of Toronto', 'Harvard University', 'University of Melbourne', 'Imperial College London', 'McGill University', 'NYU · UCLA · USC', 'TU Munich · Sciences Po'].map((u, i) => (
                <motion.div key={i} {...inView(i * 0.06)} style={{ padding: '1rem', background: 'var(--card)', border: '1px solid var(--border)', fontSize: '0.8rem', color: 'var(--silver)' }}>{u}</motion.div>
              ))}
            </div>
            <style>{`@media(max-width:768px){ .partner-grid{ grid-template-columns:1fr !important; } }`}</style>
          </div>
        </section>

        <section style={{ padding: '5rem 4rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem' }}>
            Don't see your dream destination? <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>We go further.</em>
          </div>
          <button className="btn-primary" onClick={() => nav('/contact')}>Speak to a Counsellor</button>
        </section>
      </div>
    </PageTransition>
  );
}
