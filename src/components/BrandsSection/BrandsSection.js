import React from 'react';
import './BrandsSection.css';

const NikeLogo = () => (
  <svg viewBox="0 0 24 24" width="48" height="24" fill="currentColor" aria-hidden="true">
    <path d="M21 6.5c-1-.5-3.5-.2-6 1C12.5 8.7 8 11.5 5 14c-1.5 1.2-3 2.5-4 3.5c1-.5 3-1.2 5.5-2.2c4.5-1.8 11-4.8 13.5-6.5c1.5-1 2.2-2 1-2.3z"/>
  </svg>
);

const AdidasLogo = () => (
  <svg viewBox="0 0 24 24" width="36" height="24" fill="currentColor" aria-hidden="true">
    <polygon points="3,20 7,20 12,11 8,11" />
    <polygon points="8.5,20 12.5,20 17.5,6.5 13.5,6.5" />
    <polygon points="14,20 18,20 23,2 19,2" />
  </svg>
);

const brandNames = [
  { id: 1, name: 'NIKE', logo: <NikeLogo />, style: 'nike' },
  { id: 2, name: 'adidas', logo: <AdidasLogo />, style: 'adidas' },
  { id: 3, name: 'PUMA', logo: null, style: 'puma' },
  { id: 4, name: 'ASICS', logo: null, style: 'asics' },
  { id: 5, name: 'crocs', logo: null, style: 'crocs' },
  { id: 6, name: 'SKECHERS', logo: null, style: 'skechers' },
  { id: 7, name: 'New Balance', logo: null, style: 'newbalance' },
  { id: 8, name: 'rider', logo: null, style: 'rider' },
];

const BrandsSection = () => {
  return (
    <section className="brands-section section-padding" aria-labelledby="brands-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="brands-heading">TOP BRANDS</h2>
          <button className="view-all-btn" aria-label="View all brands">
            VIEW ALL
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="brands-grid">
          {brandNames.map((brand, i) => (
            <button
              key={brand.id}
              className={`brand-card brand-${brand.style} fade-up`}
              style={{ transitionDelay: `${i * 0.05}s` }}
              aria-label={`Shop ${brand.name}`}
            >
              {brand.logo ? (
                brand.logo
              ) : (
                <span className={`brand-name brand-name-${brand.style}`}>{brand.name}</span>
              )}
            </button>
          ))}

          {/* View All Card inside the grid */}
          <button
            className="brand-card brand-view-all fade-up"
            style={{ transitionDelay: `${brandNames.length * 0.05}s` }}
            aria-label="View all brands"
          >
            <span className="brand-name brand-name-viewall">VIEW ALL</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
