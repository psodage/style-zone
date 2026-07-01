import React from 'react';
import './PromotionBanners.css';

const PromotionBanners = () => {
  return (
    <section className="promo-section" aria-label="Promotional Banners">
      <div className="container promo-grid">
        {/* Banner 1 - New Arrivals */}
        <div className="promo-banner banner-white">
          <div className="promo-content">
            <span className="promo-tag">NEW ARRIVALS</span>
            <h3 className="promo-title-dark">Performance<br />Redefined</h3>
            <button className="btn-promo-dark">SHOP NOW</button>
          </div>
          <div className="promo-img-wrap">
            <img
              src="/white-running-shoe.jpg"
              alt="New Arrival Running Shoes"
              className="promo-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Banner 2 - Crocs */}
        <div className="promo-banner banner-black">
          <div className="promo-content">
            <span className="promo-tag-white">CROCS COLLECTION</span>
            <h3 className="promo-title">Comfort That<br />Moves With You</h3>
            <button className="btn-promo-white">SHOP CROCS</button>
          </div>
          <div className="promo-img-wrap promo-img-center">
            <img
              src="https://images.unsplash.com/photo-1629813295982-f38b1d7fefc6?w=280&h=240&fit=crop&q=80"
              alt="Crocs Collection"
              className="promo-img promo-img-big"
              loading="lazy"
            />
          </div>
          <div className="promo-glow promo-glow-dark"></div>
        </div>

        {/* Banner 3 - Flip Flops */}
        <div className="promo-banner banner-white">
          <div className="promo-content">
            <span className="promo-tag">FLIP FLOPS &amp; SANDALS</span>
            <h3 className="promo-title-dark">Every Step.<br />Everywhere.</h3>
            <button className="btn-promo-dark">EXPLORE NOW</button>
          </div>
          <div className="promo-img-wrap">
            <img
              src="/white-flip-flop.jpg"
              alt="Flip Flops and Sandals"
              className="promo-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanners;
