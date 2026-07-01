import React from 'react';
import './ColorSelector.css';

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  if (!colors || colors.length === 0) return null;

  const selectedColorObj = colors.find((c) => c.name === selectedColor);

  return (
    <div className="color-selector">
      <label className="color-selector__label">
        Select Color
        {selectedColorObj && <span>— {selectedColorObj.name}</span>}
      </label>
      <div className="color-selector__options">
        {colors.map((color) => {
          const isWhite =
            color.hex.toLowerCase() === '#ffffff' ||
            color.hex.toLowerCase() === '#fff';
          const isSelected = selectedColor === color.name;

          return (
            <button
              key={color.name}
              className={`color-selector__swatch ${
                isWhite ? 'color-selector__swatch--white' : ''
              } ${isSelected ? 'color-selector__swatch--selected' : ''}`}
              onClick={() => onColorChange(color.name)}
              aria-label={`Select ${color.name}`}
              aria-pressed={isSelected}
              title={color.name}
            >
              <span
                className="color-selector__swatch-inner"
                style={{ backgroundColor: color.hex }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;
