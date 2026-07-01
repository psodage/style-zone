import React from 'react';
import './BrandsSection.css';

const brandNames = [
  { id: 1, name: 'NIKE', logo: '/brand-logos/nike.svg', style: 'nike' },
  { id: 2, name: 'adidas', logo: '/brand-logos/adidas.svg', style: 'adidas' },
  { id: 3, name: 'PUMA', logo: '/brand-logos/puma.svg', style: 'puma' },
  { id: 4, name: 'ASICS', logo: '/brand-logos/asics.svg', style: 'asics' },
  { id: 5, name: 'crocs', logo: '/brand-logos/crocs.svg', style: 'crocs' },
  { id: 6, name: 'SKECHERS', logo: '/brand-logos/skechers.svg', style: 'skechers' },
  { id: 7, name: 'New Balance', logo: '/brand-logos/newbalance.svg', style: 'newbalance' },
  { id: 8, name: 'rider', logo: '/brand-logos/rider.svg', style: 'rider' },
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
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className="brand-logo-img"
              />
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
