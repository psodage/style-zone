import React, { useRef } from 'react';
import './CategorySection.css';
import { shopCategories } from '../../data/products';

const CategorySection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="category-section section-padding" aria-labelledby="category-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="category-heading">SHOP BY CATEGORY</h2>
          <button className="view-all-btn" aria-label="View all categories">
            VIEW ALL
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="category-scroll-wrapper">
          <button className="scroll-btn scroll-btn-left" onClick={scrollLeft} aria-label="Scroll left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="category-scroll" ref={scrollRef}>
            {shopCategories.map((cat, i) => (
              <div key={cat.id} className="category-card fade-up" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="cat-img-wrap">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="cat-img"
                    loading="lazy"
                  />
                </div>
                <span className="cat-name">{cat.name}</span>
              </div>
            ))}

            {/* View All Card */}
            <div className="category-card view-all-card">
              <div className="cat-img-wrap view-all-img-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
              <span className="cat-name">View All</span>
            </div>
          </div>

          <button className="scroll-btn scroll-btn-right" onClick={scrollRight} aria-label="Scroll right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
