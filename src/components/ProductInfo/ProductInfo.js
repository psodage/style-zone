import React from 'react';
import './ProductInfo.css';

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 20 20" fill={filled ? 'var(--orange)' : 'none'} stroke={filled ? 'var(--orange)' : '#CCCCCC'} strokeWidth="1.5">
    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
  </svg>
);

const ProductInfo = ({ product }) => {
  const {
    name,
    brand,
    brandLogo,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
    sku,
    availability,
    description,
  } = product;

  const filledStars = Math.round(rating || 0);

  return (
    <div className="product-info">
      {/* Product Name */}
      <h1 className="product-info__name">{name}</h1>

      {/* Star Rating */}
      <div className="product-info__rating-row">
        <div className="product-info__stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} filled={i <= filledStars} />
          ))}
        </div>
        <span className="product-info__reviews-count">
          ({reviews || 0} Reviews)
        </span>
      </div>

      <hr className="product-info__divider" />

      {/* Brand, Availability, SKU */}
      <div className="product-info__meta">
        <div className="product-info__meta-row">
          <span className="product-info__meta-label">Brand:</span>
          <span className="product-info__meta-value">{brandLogo || brand}</span>
        </div>

        <div className="product-info__meta-row">
          <div className="product-info__availability">
            <span className="product-info__availability-dot" />
            <span className="product-info__availability-text">
              {availability || 'In Stock'}
            </span>
          </div>
        </div>

        {sku && (
          <div className="product-info__meta-row">
            <span className="product-info__sku-label">SKU:</span>
            <span className="product-info__sku-value">{sku}</span>
          </div>
        )}
      </div>

      <hr className="product-info__divider" />

      {/* Price */}
      <div className="product-info__price-row">
        <span className="product-info__price">₹{price?.toLocaleString('en-IN')}</span>
        {originalPrice && (
          <span className="product-info__original-price">
            ₹{originalPrice?.toLocaleString('en-IN')}
          </span>
        )}
        {discount && (
          <span className="product-info__discount-badge">{discount}% OFF</span>
        )}
      </div>

      <hr className="product-info__divider" />

      {/* Description */}
      {description && (
        <p className="product-info__description">{description}</p>
      )}
    </div>
  );
};

export default ProductInfo;
