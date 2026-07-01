import React from 'react';
import './SupplementBanner.css';

const supplements = [
  {
    id: 1,
    name: 'PROTEIN',
    desc: 'Build & Recover',
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=200&h=200&fit=crop&q=80',
    emoji: '🥛',
  },
  {
    id: 2,
    name: 'PRE-WORKOUT',
    desc: 'Energy & Focus',
    image: 'https://images.unsplash.com/photo-1611073615530-51d5c797b672?w=200&h=200&fit=crop&q=80',
    emoji: '⚡',
  },
  {
    id: 3,
    name: 'ENERGY GELS',
    desc: 'Instant Energy',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=200&h=200&fit=crop&q=80',
    emoji: '🔋',
  },
  {
    id: 4,
    name: 'ELECTROLYTES',
    desc: 'Stay Hydrated',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop&q=80',
    emoji: '💧',
  },
];

const SupplementBanner = () => {
  return (
    <section className="supplement-banner" aria-labelledby="supplement-heading">
      <div className="container supp-inner">
        {/* Left - Athlete */}
        <div className="supp-athlete fade-up">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=420&fit=crop&q=80"
            alt="Athletic runner"
            className="athlete-img"
            loading="lazy"
          />
          <div className="athlete-glow"></div>
        </div>

        {/* Middle - Text */}
        <div className="supp-text fade-up fade-up-delay-1">
          <span className="supp-tag">PERFORMANCE NUTRITION</span>
          <h2 className="supp-title" id="supplement-heading">
            FUEL YOUR BODY.<br />
            <span className="supp-title-orange">POWER YOUR RUN.</span>
          </h2>
          <p className="supp-desc">
            Explore our range of supplements for better performance and faster recovery.
          </p>
          <button className="btn-orange supp-btn">
            SHOP SUPPLEMENTS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Right - Supplement Products */}
        <div className="supp-products fade-up fade-up-delay-2">
          {supplements.map((s, i) => (
            <div key={s.id} className="supp-product" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="supp-product-img">
                <img src={s.image} alt={s.name} loading="lazy" />
              </div>
              <div className="supp-product-info">
                <span className="supp-product-name">{s.name}</span>
                <span className="supp-product-desc">{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplementBanner;
