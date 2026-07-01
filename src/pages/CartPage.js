import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, cartCount, cartTotal, cartSavings, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="btn-orange">
              Continue Shopping
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <motion.main
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <div className="cart-header">
          <h1 className="section-title">SHOPPING CART</h1>
          <span className="cart-item-count">{cartCount} {cartCount === 1 ? 'Item' : 'Items'}</span>
        </div>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item, index) => (
              <motion.div
                className="cart-item"
                key={`${item.id}-${item.size}-${item.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/products/${item.id}`} className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <div>
                      <span className="cart-item-brand">{item.brand}</span>
                      <Link to={`/products/${item.id}`} className="cart-item-name">{item.name}</Link>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                      aria-label="Remove item"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </button>
                  </div>

                  <div className="cart-item-meta">
                    <span>Size: <strong>{item.size}</strong></span>
                    <span>Color: <strong>{item.color}</strong></span>
                  </div>

                  <div className="cart-item-bottom">
                    <div className="cart-item-qty">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                        aria-label="Increase quantity"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="12" y1="5" x2="12" y2="19"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      </button>
                    </div>

                    <div className="cart-item-pricing">
                      <span className="cart-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      {item.originalPrice > item.price && (
                        <span className="cart-item-original">₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="cart-actions-row">
              <Link to="/" className="cart-continue-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Continue Shopping
              </Link>
              <button className="cart-clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <h3 className="cart-summary-title">ORDER SUMMARY</h3>

            <div className="cart-summary-rows">
              <div className="cart-summary-row">
                <span>Subtotal ({cartCount} items)</span>
                <span>₹{(cartTotal + cartSavings).toLocaleString('en-IN')}</span>
              </div>
              <div className="cart-summary-row cart-summary-savings">
                <span>Discount</span>
                <span>− ₹{cartSavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="cart-summary-row">
                <span>Shipping</span>
                <span className="cart-free-shipping">FREE</span>
              </div>
            </div>

            <div className="cart-summary-total">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>

            <button
              className="btn-orange cart-checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <div className="cart-security">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Secure Checkout — SSL Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default CartPage;
