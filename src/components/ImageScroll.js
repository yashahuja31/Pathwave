import React, { useState, useEffect } from 'react';
import './ImageScroll.css';

export default function ImageScroll() {
  const images = [
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1427504494785-cdff32df91d1?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-scroll">
      <div className="scroll-container">
        {images.map((img, i) => (
          <div
            key={i}
            className={`scroll-slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="scroll-overlay" />
    </div>
  );
}
