import React, { useState } from 'react';
import './Newsletter.css';

const CheckBadge = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="var(--orange)"/>
    <polyline points="8 12 11 15 16 9" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section" aria-labelledby="newsletter-heading">
      <div className="container newsletter-inner">
        {/* Left - Title + Description */}
        <div className="newsletter-left">
          <h2 className="newsletter-title" id="newsletter-heading">
            JOIN THE STYLEZONE COMMUNITY
          </h2>
          <p className="newsletter-desc">
            Get exclusive offers, new arrivals & running tips.
          </p>
        </div>

        {/* Center - Email form */}
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="email-input"
            required
            aria-label="Email address"
            id="newsletter-email"
          />
          <button type="submit" className="subscribe-btn" aria-label="Subscribe to newsletter">
            {subscribed ? '✓ Subscribed!' : 'SUBSCRIBE'}
          </button>
        </form>

        {/* Right - Benefits row */}
        <div className="newsletter-benefits">
          <div className="benefit-item">
            <CheckBadge />
            <span>Exclusive Offers</span>
          </div>
          <div className="benefit-item">
            <CheckBadge />
            <span>Early Access</span>
          </div>
          <div className="benefit-item">
            <CheckBadge />
            <span>Expert Tips</span>
          </div>
          <div className="benefit-item">
            <CheckBadge />
            <span>And More!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
