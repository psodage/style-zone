import React from 'react';
import './StatsSection.css';

const UserGroupIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 11 11 13 15 9" />
  </svg>
);

const BoxIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CreditCardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const stats = [
  { id: 1, value: '10,000+', label: 'Happy Customers', icon: <UserGroupIcon /> },
  { id: 2, value: '50+', label: 'Premium Brands', icon: <ShieldCheckIcon /> },
  { id: 3, value: '5,000+', label: 'Products', icon: <BoxIcon /> },
  { id: 4, value: '4.8★', label: 'Average Rating', icon: <StarIcon /> },
  { id: 5, value: '100%', label: 'Secure Payments', icon: <CreditCardIcon /> },
  { id: 6, value: '24/7', label: 'Customer Support', icon: <HeadsetIcon /> },
];

const StatsSection = () => {
  return (
    <section className="stats-section" aria-label="Store Statistics">
      <div className="container stats-grid">
        {stats.map((stat, i) => (
          <div key={stat.id} className="stat-item fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="stat-icon">
              {stat.icon}
            </div>
            <div className="stat-text">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
