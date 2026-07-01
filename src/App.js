import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Toast from './components/Toast/Toast';

import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="app">
              <Navbar />

              <Toast />

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<HomePage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>

              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
