import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer" role="contentinfo">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Column 1 - Brand */}
          <div className="footer-col footer-brand">
            <a href="/" className="footer-logo" aria-label="StyleZone home">
              <img
                src="/logo-icon.png"
                alt="StyleZone Icon"
                className="footer-logo-icon-img"
              />
              <img
                src="/logo-head.png"
                alt="StyleZone - Style That Defines You"
                className="footer-logo-head-img"
              />
            </a>
            <p className="footer-brand-desc">
              Your one stop destination for running shoes, gear, accessories & supplements.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://youtube.com" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Shop */}
          <div className="footer-col">
            <h3 className="footer-col-title">SHOP</h3>
            <ul className="footer-links">
              {['Running Shoes', 'Crocs', 'Flip Flops', 'Sandals', 'Supplements', 'Apparel', 'Accessories'].map(link => (
                <li key={link}><a href={`/${link.toLowerCase().replace(' ', '-')}`} className="footer-link">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Help */}
          <div className="footer-col">
            <h3 className="footer-col-title">HELP</h3>
            <ul className="footer-links">
              {['Track Order', 'Shipping Policy', 'Return & Refund', 'FAQs', 'Size Guide', 'Contact Us'].map(link => (
                <li key={link}><a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div className="footer-col">
            <h3 className="footer-col-title">COMPANY</h3>
            <ul className="footer-links">
              {['About Us', 'Careers', 'Our Stores', 'Blog', 'Terms & Conditions', 'Privacy Policy'].map(link => (
                <li key={link}><a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Account */}
          <div className="footer-col">
            <h3 className="footer-col-title">ACCOUNT</h3>
            <ul className="footer-links">
              {['My Account', 'Orders', 'Wishlist', 'Addresses', 'Profile'].map(link => (
                <li key={link}><a href={`/${link.toLowerCase().replace(' ', '-')}`} className="footer-link">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 6 - Payment */}
          <div className="footer-col">
            <h3 className="footer-col-title">PAYMENT METHODS</h3>
            <div className="payment-methods">
              {[
                { name: 'Visa', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_2014_logo.svg' },
                { name: 'Mastercard', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
                { name: 'RuPay', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.svg' },
                { name: 'UPI', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg' },
                { name: 'Paytm', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Paytm_Logo_%28standalone%29.svg' },
                { name: 'G Pay', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg' },
              ].map(p => (
                <div key={p.name} className="payment-badge">
                  <img src={p.src} alt={p.name} className="payment-logo-img" />
                </div>
              ))}
            </div>

            <div className="secure-payment-text">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>100% SECURE PAYMENTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright">
            © 2024 Stylezone. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link">Terms of Use</a>
            <a href="/sitemap" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
