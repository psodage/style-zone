import React from 'react';
import { motion } from 'framer-motion';
import { useWishlist } from '../../context/WishlistContext';
import './WishlistButton.css';

const WishlistButton = ({ productId }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(productId);

  return (
    <motion.button
      className="wishlist-btn"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(productId);
      }}
      whileTap={{ scale: 0.9 }}
      animate={wishlisted ? { scale: [1, 1.25, 1] } : { scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <svg
        viewBox="0 0 24 24"
        fill={wishlisted ? 'var(--orange)' : 'none'}
        stroke={wishlisted ? 'var(--orange)' : 'var(--text-gray)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </motion.button>
  );
};

export default WishlistButton;
