import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { TEAM } from '../utils/data';
import './About.css';

const VALUES = [
  ['⬡','Student First','Every decision we make is guided by what is genuinely best for the student — not commissions or shortcuts.'],
  ['◈','Honest Guidance','We give you a realistic picture of your options — even when that means delivering difficult truths with compassion.'],
  ['◇','Deep Expertise','Our counsellors have studied or worked abroad and maintain live knowledge of university requirements and visa rules.'],
  ['⬙','Lifelong Partnership','Our relationship does not end at the offer letter. We support alumni networks and post-study career pathways.'],
];

export default function About() {
  const nav = useNavigate();
  return (
    <PageTransition>
      <div className="pt">
        {/* Hero */}
        <div className="section-inner" style={{ padding: '5rem 0 4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Our Story</div>
            <h1 className="section-h2" style={{ maxWidth: 700 }}>Founded to Make <em>World-Class Education</em> Accessible to Every Student</h1>
            <div className="divider" />
            <p className="section-p" style={{ maxWidth: 700, fontSize: '1.05rem' }}>PathWave International was founded in 2012 by educators and former admissions professionals who saw many deserving students left behind — not for lack of talent, but for lack of guidance. Today we are one of the most trusted international education consultancies, having placed over 5,000 students in universities across 20+ countries.</p>
          </motion.div>
        </div>

        {/* Stats band */}
        <div className="about-stats-band">
          {[['5,000+','Students Placed'],['300+','Partner Universities'],['95%','Visa Success Rate'],['20+','Countries We Cover']].map(([n,l],i) => (
            <motion.div className="about-stat" key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <div className="about-stat-num">{n}</div>
              <div className="about-stat-label">{l}</div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div className="section-inner">
            <div className="section-tag">Leadership</div>
            <h2 className="section-h2">The Team Behind <em>PathWave</em></h2>
            <div className="team-grid">
              {TEAM.map((m, i) => (
                <motion.div className="team-card" key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                  <div className="team-avatar">{m.initial}</div>
                  <div className="team-info">
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                    <div className="team-bio">{m.bio}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section">
          <div className="section-inner">
            <div className="section-tag">Our Values</div>
            <h2 className="section-h2">What We Stand For</h2>
            <div className="values-grid">
              {VALUES.map(([icon, t, d], i) => (
                <motion.div className="value-card" key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <div className="value-icon">{icon}</div>
                  <div className="value-title">{t}</div>
                  <div className="value-desc">{d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '5rem 4rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem' }}>
            Your story deserves a <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>world-class chapter.</em>
          </div>
          <button className="btn-primary" onClick={() => nav('/contact')}>Start Your Journey</button>
        </section>
      </div>
    </PageTransition>
  );
}
