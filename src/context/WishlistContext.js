import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

const STORAGE_KEY = 'stylezone_wishlist';

const getInitialState = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error('Failed to load wishlist from localStorage:', e);
  }
  return [];
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(getInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage:', e);
    }
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isInWishlist, wishlistCount }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export default WishlistContext;
