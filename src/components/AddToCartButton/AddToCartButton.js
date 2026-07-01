import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import './AddToCartButton.css';

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const AddToCartButton = ({ onAddToCart, onBuyNow, disabled = false }) => {
  const handleRipple = useCallback((e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - rect.left - 20}px`;
    ripple.style.top = `${e.clientY - rect.top - 20}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }, []);

  const handleAddToCart = useCallback((e) => {
    handleRipple(e);
    if (onAddToCart) onAddToCart();
  }, [onAddToCart, handleRipple]);

  const handleBuyNow = useCallback((e) => {
    handleRipple(e);
    if (onBuyNow) onBuyNow();
  }, [onBuyNow, handleRipple]);

  return (
    <div className="add-to-cart-group">
      <motion.button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        disabled={disabled}
        whileTap={{ scale: 0.97 }}
      >
        <CartIcon />
        ADD TO CART
      </motion.button>

      <motion.button
        className="buy-now-btn"
        onClick={handleBuyNow}
        disabled={disabled}
        whileTap={{ scale: 0.97 }}
      >
        BUY NOW
      </motion.button>
    </div>
  );
};

export default AddToCartButton;
