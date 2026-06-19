import React, { useState } from 'react';

export default function StarRating({ label, value, onChange }) {
  const [hover, setHover] = useState(0);
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {label && <div style={{ fontSize: '0.82rem', color: 'var(--silver)', marginBottom: '0.6rem' }}>{label}</div>}
      <div style={{ display: 'flex', gap: '0.3rem' }}>
        {[1,2,3,4,5].map(s => (
          <button key={s} type="button"
            onClick={() => onChange && onChange(s)}
            onMouseEnter={() => setHover(s)}
            onMouseLeave={() => setHover(0)}
            style={{ fontSize: '1.6rem', background: 'none', border: 'none', cursor: 'pointer', color: s <= (hover || value) ? 'var(--gold)' : 'rgba(255,255,255,0.1)', padding: 0, lineHeight: 1, transition: 'color 0.15s' }}>
            ★
          </button>
        ))}
      </div>
    </div>
  );
}
