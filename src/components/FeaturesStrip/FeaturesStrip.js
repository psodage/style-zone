import React from 'react';
import './FeaturesStrip.css';

const features = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: '100% ORIGINAL',
    desc: 'Authentic Products',
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'FAST DELIVERY',
    desc: 'Across India',
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
      </svg>
    ),
    title: 'EASY RETURNS',
    desc: '7-Day Return Policy',
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'SECURE PAYMENT',
    desc: '100% Secure Checkout',
  },
];

const FeaturesStrip = () => {
  return (
    <section className="features-strip" aria-label="Key Features">
      <div className="container features-grid">
        {features.map((f, i) => (
          <div key={f.id} className="feature-item fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-text">
              <span className="feature-title">{f.title}</span>
              <span className="feature-desc">{f.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesStrip;
