import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      setTimeout(() => el.classList.add('visible'), 100);
    }
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      {/* Background - blurred city running scene */}
      <div className="hero-bg">
        <div className="hero-bg-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero-runner.jpg)` }}></div>
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-inner">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title fade-up">
            RUN FASTER.<br />
            <span className="hero-title-orange">RUN SMARTER.</span>
          </h1>

          <p className="hero-subtitle fade-up fade-up-delay-1">
            <strong>Premium gear. Proven supplements.</strong><br />
            Everything you need to be unstoppable.
          </p>

          <div className="hero-actions fade-up fade-up-delay-2">
            <button className="btn-hero-primary">
              SHOP NOW
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-hero-outline">
              EXPLORE COLLECTION
            </button>
          </div>
        </div>

        {/* Right side is empty so the background image runner shows through */}
        <div className="hero-spacer"></div>
      </div>
    </section>
  );
};

export default HeroSection;
