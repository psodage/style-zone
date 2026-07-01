import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  
  const { cartCount, cartTotal } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="fire-icon">🔥</span>
            <span>FREE SHIPPING ON ORDERS ABOVE <strong>₹1999</strong></span>
          </div>
          <div className="top-bar-right">
            <a href="#track" className="top-link">Track Order</a>
            <a href="#store" className="top-link">Store Locator</a>
            <a href="#help" className="top-link">Help &amp; Support</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="/logo-icon.png"
              alt="StyleZone Icon"
              className="logo-icon-img"
            />
            <img
              src="/logo-head.png"
              alt="StyleZone - Style That Defines You"
              className="logo-head-img"
            />
          </Link>

          {/* Center Navigation */}
          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <li><Link to="/" className="nav-link active">HOME</Link></li>
            <li className="has-dropdown">
              <Link to="/products" className="nav-link">
                SHOP <span className="dropdown-arrow">▾</span>
              </Link>
            </li>
            <li><Link to="/brands" className="nav-link">BRANDS</Link></li>
            <li><Link to="/new-arrivals" className="nav-link">NEW ARRIVALS</Link></li>
            <li><Link to="/offers" className="nav-link">OFFERS</Link></li>
            <li><Link to="/supplements" className="nav-link">SUPPLEMENTS</Link></li>
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Search */}
            <div className={`search-box ${searchFocused ? 'focused' : ''}`}>
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="search-input"
                aria-label="Search products"
              />
            </div>

            {/* Wishlist Icon with badge */}
            <button className="nav-icon-btn nav-wishlist-btn" aria-label="Wishlist" title="Wishlist">
              <div className="nav-icon-badge-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
              </div>
            </button>

            {/* Account Icon */}
            <button className="nav-icon-btn" aria-label="Account" title="My Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>

            {/* Cart Icon with badge */}
            <button className="nav-cart-btn" aria-label="Shopping Cart" onClick={() => navigate('/cart')}>
              <div className="nav-icon-badge-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
              </div>
              {cartCount > 0 && (
                <span className="nav-cart-total">₹{cartTotal.toLocaleString('en-IN')}</span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-toggle"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
                <span></span><span></span><span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
