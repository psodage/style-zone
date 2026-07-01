import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import './RelatedProducts.css';

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 20 20" fill={filled ? 'var(--orange)' : 'none'} stroke={filled ? 'var(--orange)' : '#CCCCCC'} strokeWidth="1.5">
    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'var(--orange)' : 'none'} stroke={filled ? 'var(--orange)' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);
  const filledStars = Math.round(product.rating || 0);

  return (
    <Link to={`/products/${product.id}`} className="related-products__card">
      <div className="related-products__card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="related-products__card-image"
          loading="lazy"
        />
        <div className="related-products__card-overlay">
          <button
            className="related-products__overlay-cart-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Add to Cart
          </button>
          <button
            className="related-products__overlay-wishlist-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
          >
            <HeartIcon filled={wishlisted} />
          </button>
        </div>
      </div>

      <div className="related-products__card-info">
        <span className="related-products__card-brand">{product.brandLogo || product.brand}</span>
        <div className="related-products__card-rating">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} filled={i <= filledStars} />
          ))}
          <span className="related-products__card-rating-text">{product.rating}</span>
        </div>
        <span className="related-products__card-name">{product.name}</span>
        <div className="related-products__card-price-row">
          <span className="related-products__card-price">₹{product.price?.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="related-products__card-original-price">₹{product.originalPrice?.toLocaleString('en-IN')}</span>
          )}
          {product.discount && (
            <span className="related-products__card-discount">{product.discount}% OFF</span>
          )}
        </div>
      </div>
    </Link>
  );
};

const RelatedProducts = ({ products = [], currentProductId }) => {
  const carouselRef = useRef(null);

  const filteredProducts = products.filter(
    (p) => p.id !== currentProductId
  );

  const scroll = useCallback((direction) => {
    if (carouselRef.current) {
      const scrollAmount = 220;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  if (filteredProducts.length === 0) return null;

  return (
    <div className="related-products">
      <div className="section-header">
        <h2 className="section-title">YOU MAY ALSO LIKE</h2>
        <button className="view-all-btn">
          VIEW ALL
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>

      <div className="related-products__carousel-wrapper">
        <button
          className="related-products__arrow related-products__arrow--left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>

        <div className="related-products__carousel" ref={carouselRef}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button
          className="related-products__arrow related-products__arrow--right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
