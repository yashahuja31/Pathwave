import React, { useState } from 'react';
import './StarRating.css';

export default function StarRating({ label, value, onChange }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating-group">
      {label && <div className="star-rating-label">{label}</div>}
      <div className="stars">
        {[1,2,3,4,5].map(s => (
          <button key={s} type="button"
            className={'star' + (s <= (hover || value) ? ' active' : '')}
            onClick={() => onChange && onChange(s)}
            onMouseEnter={() => setHover(s)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Rate ${s} stars`}>
            ★
          </button>
        ))}
      </div>
    </div>
  );
}
