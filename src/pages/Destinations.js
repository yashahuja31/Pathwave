import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { DESTINATIONS } from '../utils/data';
import './Destinations.css';

const UNIS = ['University of Oxford','University of Toronto','Harvard University','University of Melbourne','Imperial College London','McGill University','NYU · UCLA · USC','TU Munich · Sciences Po'];

export default function Destinations() {
  const nav = useNavigate();
  return (
    <PageTransition>
      <div className="pt">
        <div className="dest-hero section-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Study Destinations</div>
            <h1 className="section-h2" style={{ maxWidth: 640 }}>Your Dream Country<br /><em>Awaits You</em></h1>
            <p className="section-p">We guide students to leading universities across four continents. Wherever you want to study, PathWave knows the path.</p>
          </motion.div>
        </div>

        <div className="dest-grid section-inner">
          {DESTINATIONS.map((d, i) => (
            <motion.div className="dest-card" key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <div className="dest-card-flag">{d.flag}</div>
              <div className="dest-tag">{d.tag}</div>
              <div className="dest-title">{d.title}</div>
              <div className="dest-desc">{d.desc}</div>
              <ul className="dest-features">
                {d.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="btn-outline" style={{ marginTop: '2rem', padding: '0.7rem 1.5rem', fontSize: '0.75rem' }} onClick={() => nav('/contact')}>
                Apply for {d.tag} →
              </button>
            </motion.div>
          ))}
        </div>

        <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div className="section-inner partner-grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="section-tag">University Partners</div>
              <h2 className="section-h2">300+ <em>Partner</em><br />Universities</h2>
              <p className="section-p">Our network spans the world's most respected institutions — from Ivy League to Russell Group. Direct relationships that give our students a genuine edge.</p>
              <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => nav('/contact')}>Find Your University</button>
            </motion.div>
            <div className="uni-tags">
              {UNIS.map((u, i) => (
                <motion.div className="uni-tag" key={i}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}>
                  {u}
                </motion.div>
              ))}
            </div>
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
