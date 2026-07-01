import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, cartTotal, cartSavings, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert('Order placed successfully! 🎉\nThis is a demo — no actual payment was processed.');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="container">
          <div className="cart-empty">
            <h2>No Items to Checkout</h2>
            <p>Add some products to your cart first.</p>
            <Link to="/" className="btn-orange">Shop Now</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <motion.main
      className="checkout-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <h1 className="section-title">CHECKOUT</h1>

        <div className="checkout-layout">
          {/* Left - Form */}
          <div className="checkout-form-section">
            {/* Shipping Details */}
            <div className="checkout-card">
              <h3 className="checkout-card-title">SHIPPING DETAILS</h3>
              <div className="checkout-form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" placeholder="Enter last name" />
                </div>
                <div className="form-group form-full">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="Enter email address" />
                </div>
                <div className="form-group form-full">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="Enter phone number" />
                </div>
                <div className="form-group form-full">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-input" placeholder="Enter street address" />
                </div>
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input type="text" className="form-input" placeholder="Enter city" />
                </div>
                <div className="form-group">
                  <label className="form-label">PIN Code</label>
                  <input type="text" className="form-input" placeholder="Enter PIN code" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="checkout-card">
              <h3 className="checkout-card-title">PAYMENT METHOD</h3>
              <div className="payment-method-options">
                {['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Cash on Delivery'].map((method) => (
                  <label className="payment-method-option" key={method}>
                    <input type="radio" name="payment" defaultChecked={method === 'UPI'} />
                    <span className="payment-method-label">{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="checkout-summary">
            <div className="checkout-card">
              <h3 className="checkout-card-title">ORDER SUMMARY</h3>

              <div className="checkout-items">
                {cart.map((item) => (
                  <div className="checkout-item" key={`${item.id}-${item.size}-${item.color}`}>
                    <div className="checkout-item-img">
                      <img src={item.image} alt={item.name} />
                      <span className="checkout-item-qty-badge">{item.quantity}</span>
                    </div>
                    <div className="checkout-item-info">
                      <span className="checkout-item-name">{item.name}</span>
                      <span className="checkout-item-meta">{item.size} / {item.color}</span>
                    </div>
                    <span className="checkout-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="checkout-totals">
                <div className="checkout-total-row">
                  <span>Subtotal</span>
                  <span>₹{(cartTotal + cartSavings).toLocaleString('en-IN')}</span>
                </div>
                <div className="checkout-total-row checkout-discount-row">
                  <span>Discount</span>
                  <span>− ₹{cartSavings.toLocaleString('en-IN')}</span>
                </div>
                <div className="checkout-total-row">
                  <span>Shipping</span>
                  <span className="cart-free-shipping">FREE</span>
                </div>
                <div className="checkout-total-final">
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button className="btn-orange checkout-place-order" onClick={handlePlaceOrder}>
                Place Order
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default CheckoutPage;
