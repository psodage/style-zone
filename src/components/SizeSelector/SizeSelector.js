import React from 'react';
import './SizeSelector.css';

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
  if (!sizes || sizes.length === 0) return null;

  return (
    <div className="size-selector">
      <span className="size-selector__label">Select Size</span>
      <div className="size-selector__options">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-selector__btn ${
              selectedSize === size ? 'size-selector__btn--selected' : ''
            }`}
            onClick={() => onSizeChange(size)}
            aria-pressed={selectedSize === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
