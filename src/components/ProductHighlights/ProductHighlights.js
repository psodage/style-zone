import React from 'react';
import './ProductHighlights.css';

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--orange)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const ProductHighlights = ({ highlights }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="product-highlights">
      <h3 className="product-highlights__title">Product Highlights</h3>
      <div className="product-highlights__grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="product-highlights__card">
            <span className="product-highlights__icon">
              <CheckCircleIcon />
            </span>
            <span className="product-highlights__text">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlights;
