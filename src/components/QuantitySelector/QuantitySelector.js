import React from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const MIN = 1;
  const MAX = 10;

  const decrement = () => {
    if (quantity > MIN) {
      onQuantityChange(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < MAX) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="quantity-selector">
      <span className="quantity-selector__label">Quantity</span>
      <div className="quantity-selector__controls">
        <button
          className="quantity-selector__btn"
          onClick={decrement}
          disabled={quantity <= MIN}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="quantity-selector__count" aria-live="polite">
          {quantity}
        </span>
        <button
          className="quantity-selector__btn"
          onClick={increment}
          disabled={quantity >= MAX}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
