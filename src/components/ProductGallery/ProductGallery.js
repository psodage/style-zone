import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductGallery.css';

const ProductGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState('center center');
  const mainRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!mainRef.current) return;
    const rect = mainRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setTransformOrigin('center center');
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div
        className="product-gallery__main"
        ref={mainRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`Product view ${activeIndex + 1}`}
            className="product-gallery__main-img"
            style={{
              transformOrigin,
              transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="product-gallery__thumbnails">
        {images.slice(0, 5).map((img, index) => (
          <button
            key={index}
            className={`product-gallery__thumb ${
              index === activeIndex ? 'product-gallery__thumb--active' : ''
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
