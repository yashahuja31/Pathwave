import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const inView = (d = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: d, duration: 0.5 } });

const VALUES = [
  ['◈', 'Student First', 'Every decision we make is guided by what is genuinely best for the student — not commissions or shortcuts.'],
  ['⬡', 'Honest Guidance', 'We give you a realistic picture of your options — even when it means delivering difficult truths with compassion.'],
  ['◇', 'Deep Expertise', 'Our counsellors have studied or worked abroad and maintain live knowledge of university requirements and visa rules.'],
  ['⬙', 'Lifelong Partnership', 'Our relationship does not end at the offer letter. We support alumni networks and post-study career pathways.'],
];

const TBA_ROLES = [
  'Founder & Chief Counsellor',
  'Head of UK & Europe',
  'Head of USA & Canada',
  'Head of Visa & Documentation',
  'Head of Scholarships',
  'Student Success Manager',
];

export default function About() {
  const nav = useNavigate();
  return (
    <PageTransition>
      <div className="pt">

        {/* Hero */}
        <div className="section-inner" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag">Our Story</div>
            <h1 className="section-h2" style={{ maxWidth: 700 }}>Founded to Make <em>World-Class Education</em> Accessible to Every Student</h1>
            <div className="divider" />
            <p className="section-p" style={{ maxWidth: 700, fontSize: '1.05rem' }}>
              PathWave International was founded by educators and former admissions professionals who saw many deserving students left behind — not for lack of talent, but for lack of guidance. Today we are one of the most trusted international education consultancies, having placed over 5,000 students in universities across 20+ countries.
            </p>
          </motion.div>
        </div>

        {/* Stats band */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'var(--gold)' }} className="stats-band">
          {[['5,000+', 'Students Placed'], ['300+', 'Partner Universities'], ['95%', 'Visa Success Rate'], ['20+', 'Countries We Cover']].map(([n, l], i) => (
            <motion.div key={i} {...inView(i * 0.1)} style={{ padding: '3rem 2rem', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(10,10,15,0.15)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--midnight)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(10,10,15,0.7)', marginTop: '0.4rem' }}>{l}</div>
            </motion.div>
          ))}
          <style>{`@media(max-width:768px){ .stats-band{ grid-template-columns:1fr 1fr !important; } }`}</style>
        </div>

        {/* ── TEAM — TO BE ANNOUNCED ── */}
        <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div className="section-inner">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Leadership</div>
              <h2 className="section-h2">The Team Behind <em>PathWave</em></h2>
              <p className="section-p" style={{ textAlign: 'center', margin: '0 auto' }}>Our leadership team will be announced soon. We are building something exceptional.</p>
            </div>

            {/* TBA Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }} className="team-tba-grid">
              {TBA_ROLES.map((role, i) => (
                <motion.div key={i} {...inView(i * 0.1)}
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', overflow: 'hidden', position: 'relative' }}>

                  {/* Avatar placeholder with animated shimmer */}
                  <div style={{ width: '100%', aspectRatio: '1', background: 'var(--surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    {/* Shimmer overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.06) 50%, transparent 60%)', animation: 'shimmer 2.5s infinite', backgroundSize: '200% 100%' }} />
                    {/* Blurred circle placeholder */}
                    <div style={{ width: 80, height: 80, borderRadius: '50%', border: '1px dashed rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '1.8rem', opacity: 0.3 }}>?</span>
                    </div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.6 }}>Coming Soon</div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    {/* Name placeholder */}
                    <div style={{ height: '1.2rem', background: 'var(--surface)', borderRadius: 2, marginBottom: '0.8rem', width: '70%', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.08), transparent)', animation: 'shimmer 2s infinite' }} />
                    </div>
                    {/* Role */}
                    <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.7, marginBottom: '0.8rem' }}>{role}</div>
                    {/* Bio placeholder lines */}
                    {[100, 80, 60].map((w, j) => (
                      <div key={j} style={{ height: '0.7rem', background: 'var(--surface)', borderRadius: 2, marginBottom: '0.4rem', width: `${w}%`, position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)', animation: `shimmer ${1.8 + j * 0.2}s infinite` }} />
                      </div>
                    ))}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.5 }}>
                      To Be Announced
                    </div>
                  </div>
                </motion.div>
              ))}
              <style>{`@media(max-width:768px){ .team-tba-grid{ grid-template-columns:1fr !important; } }`}</style>
            </div>

            {/* Announcement banner */}
            <motion.div {...inView(0.3)} style={{ marginTop: '3rem', padding: '2rem 3rem', border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, marginBottom: '0.3rem' }}>
                  Team announcement <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>coming soon</em>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>We are finalising our leadership team. Stay tuned for the big reveal.</div>
              </div>
              <button className="btn-outline" onClick={() => nav('/contact')} style={{ whiteSpace: 'nowrap' }}>
                Get in Touch →
              </button>
            </motion.div>

            <style>{`
              @keyframes shimmer {
                0%   { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
            `}</style>
          </div>
        </section>

        {/* Values */}
        <section className="section">
          <div className="section-inner">
            <div className="section-tag">Our Values</div>
            <h2 className="section-h2">What We Stand For</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', marginTop: '3rem' }} className="values-grid">
              {VALUES.map(([icon, t, d], i) => (
                <motion.div key={i} {...inView(i * 0.1)}
                  style={{ padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--card)', transition: 'border-color 0.3s' }}
                  whileHover={{ borderColor: 'var(--gold)' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.5rem' }}>{t}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--silver)' }}>{d}</div>
                </motion.div>
              ))}
              <style>{`@media(max-width:768px){ .values-grid{ grid-template-columns:1fr !important; } }`}</style>
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
