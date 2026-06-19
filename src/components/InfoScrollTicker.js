import React, { useEffect, useRef, useState } from 'react';

// PathWave service/info bullet points with descriptions shown on hover
const INFO_ITEMS = [
  {
    icon: '◈',
    title: 'University Admissions',
    desc: 'We manage your entire application from shortlisting the right universities to submitting polished applications that maximise your chances of acceptance.',
  },
  {
    icon: '⬡',
    title: 'Profile Building',
    desc: 'We analyse your academic record, extracurriculars, and goals to craft a compelling applicant profile that stands out to top admissions committees.',
  },
  {
    icon: '◇',
    title: 'SOP & Essay Coaching',
    desc: 'Our experts guide you through writing a Statement of Purpose and personal essays that tell your unique story with clarity, authenticity, and impact.',
  },
  {
    icon: '⬙',
    title: 'Visa Assistance',
    desc: 'From document checklists to embassy interview coaching — we prepare you thoroughly so your student visa application is stress-free and successful.',
  },
  {
    icon: '◈',
    title: 'Scholarship Guidance',
    desc: 'We identify and match you with scholarships, grants, and bursaries at your target universities, and help you write winning funding applications.',
  },
  {
    icon: '◇',
    title: 'Pre-Departure Support',
    desc: 'Once you have your offer, we help with accommodation, travel planning, banking setup, and a full arrival orientation so you land fully prepared.',
  },
  {
    icon: '⬡',
    title: '95% Visa Success Rate',
    desc: 'Our meticulous documentation and coaching processes have resulted in a 95% student visa approval rate across all major study destinations.',
  },
  {
    icon: '⬙',
    title: '5000+ Students Placed',
    desc: 'Over 5,000 students have achieved their study abroad dreams through PathWave since 2012 — across 20+ countries and 300+ partner universities.',
  },
  {
    icon: '◈',
    title: 'UK Specialist',
    desc: 'Deep expertise in Russell Group and Oxford/Cambridge applications, UCAS, personal statements, and the UK Graduate Route visa for post-study work.',
  },
  {
    icon: '◇',
    title: 'USA & Canada Expert',
    desc: 'Ivy League and top-50 university applications, Common App, SAT/ACT guidance, F-1 visa support, and Canadian Express Entry PR pathways.',
  },
  {
    icon: '⬡',
    title: 'Free Consultation',
    desc: 'Every student journey starts with a no-cost, no-pressure one-on-one session with one of our expert counsellors to map out your personalised path.',
  },
  {
    icon: '⬙',
    title: 'Lifelong Partnership',
    desc: 'We stay connected after you land — supporting alumni with career guidance, further study applications, and post-study visa pathways.',
  },
];

const DOUBLED = [...INFO_ITEMS, ...INFO_ITEMS];

function TickerRow({ speed = 1, reverse = false, startOffset = 0, bg = 'var(--card)' }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(startOffset);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      const dir = reverse ? -1 : 1;
      offsetRef.current += delta * speed * dir;

      const singleWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
      if (singleWidth > 0) {
        if (offsetRef.current > singleWidth) offsetRef.current -= singleWidth;
        if (offsetRef.current < 0) offsetRef.current += singleWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, reverse]);

  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      {/* Fade left */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 140, background: 'linear-gradient(90deg, var(--deep) 40%, transparent)', zIndex: 3, pointerEvents: 'none' }} />
      {/* Fade right */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 140, background: 'linear-gradient(-90deg, var(--deep) 40%, transparent)', zIndex: 3, pointerEvents: 'none' }} />

      <div ref={trackRef} style={{ display: 'flex', gap: '1.2rem', width: 'max-content', willChange: 'transform', transition: 'none', padding: '0.5rem 0' }}>
        {DOUBLED.map((item, i) => (
          <InfoCard
            key={i}
            item={item}
            bg={bg}
            isHovered={hoveredIdx === i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          />
        ))}
      </div>
    </div>
  );
}

function InfoCard({ item, bg, isHovered, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        flexShrink: 0,
        position: 'relative',
        padding: '1.1rem 1.8rem',
        background: isHovered ? 'var(--surface)' : bg,
        border: `1px solid ${isHovered ? 'var(--gold)' : 'var(--border)'}`,
        cursor: 'default',
        transition: 'background 0.25s, border-color 0.25s',
        minWidth: 220,
        userSelect: 'none',
      }}>
      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
        <span style={{ fontSize: '1rem', color: isHovered ? 'var(--gold)' : 'var(--silver)', transition: 'color 0.25s' }}>{item.icon}</span>
        <span style={{ fontSize: '0.82rem', fontWeight: 500, color: isHovered ? 'var(--gold)' : 'var(--white)', letterSpacing: '0.03em', whiteSpace: 'nowrap', transition: 'color 0.25s' }}>{item.title}</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--gold)', marginLeft: '0.3rem', opacity: isHovered ? 0 : 0.6, transition: 'opacity 0.2s' }}>↗</span>
      </div>

      {/* Hover description tooltip */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 260,
          background: 'var(--midnight)',
          border: '1px solid var(--gold)',
          padding: '1rem 1.2rem',
          zIndex: 100,
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          animation: 'fadeInUp 0.18s ease',
          pointerEvents: 'none',
        }}>
          {/* Arrow */}
          <div style={{ position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, background: 'var(--midnight)', border: '1px solid var(--gold)', borderTop: 'none', borderLeft: 'none', transform: 'translateX(-50%) rotate(45deg)' }} />
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{item.title}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--silver)', lineHeight: 1.7 }}>{item.desc}</div>
        </div>
      )}
    </div>
  );
}

export default function InfoScrollTicker() {
  return (
    <section style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 0', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: '4rem', paddingRight: '4rem', marginBottom: '3rem' }}>
        <div className="section-tag">What We Do</div>
        <h2 className="section-h2">Our Work,<br /><em>At a Glance</em></h2>
        <p className="section-p">Scroll the page up or down to explore — hover any card to learn more about that service.</p>
      </div>

      {/* Row 1 — moves right on scroll down */}
      <TickerRow speed={0.45} reverse={false} startOffset={0} bg="var(--card)" />

      <div style={{ height: '1.2rem' }} />

      {/* Row 2 — moves left on scroll down (opposite) */}
      <TickerRow speed={0.45} reverse={true} startOffset={400} bg="var(--surface)" />

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--silver)', letterSpacing: '0.08em', opacity: 0.7 }}>↕ Scroll up or down to move the cards · Hover to read details</p>
      </div>
    </section>
  );
}
