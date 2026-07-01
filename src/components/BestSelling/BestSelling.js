import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import './BestSelling.css';
import { products, categories } from '../../data/products';

const StarRating = ({ rating }) => (
  <div className="star-rating" aria-label={`Rating: ${rating} out of 5`}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF6A00" stroke="#FF6A00" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
    <span className="rating-num">{rating}</span>
  </div>
);

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <Link to={`/products/${product.id}`} className="product-card" role="article" aria-label={product.name}>
      <div className="product-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
        <div className="product-overlay">
          <button className="quick-add-btn" aria-label={`Quick add ${product.name} to cart`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Add to Cart
          </button>
          <button
            className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
            aria-label={`Add ${product.name} to wishlist`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={wishlisted ? 'var(--orange)' : 'none'}
              stroke={wishlisted ? 'var(--orange)' : 'currentColor'}
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-card-top">
          <span className={`product-brand-logo brand-name-${product.brandLogo.toLowerCase().replace(' ', '')}`}>
            {product.brandLogo}
          </span>
          <StarRating rating={product.rating} />
        </div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price-row">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="product-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          <span className="product-save">{product.discount}% OFF</span>
        </div>
      </div>
    </Link>
  );
};

const BestSelling = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="bestselling-section section-padding" aria-labelledby="bestselling-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="bestselling-heading">BEST SELLING PRODUCTS</h2>
          <button className="view-all-btn" aria-label="View all products">
            VIEW ALL
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Category Pills */}
        <div className="category-pills" role="tablist" aria-label="Product categories">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`pill ${activeCategory === cat ? 'pill-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Scroll */}
        <div className="products-scroll-wrap">
          <button className="products-arrow products-arrow-left" onClick={() => {
            const el = document.querySelector('.products-grid');
            if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
          }} aria-label="Scroll products left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="products-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button className="products-arrow products-arrow-right" onClick={() => {
            const el = document.querySelector('.products-grid');
            if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
          }} aria-label="Scroll products right">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
