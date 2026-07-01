import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'stylezone_cart';

const getInitialState = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load cart from localStorage:', e);
  }
  return [];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product } = action.payload;
      const existingIndex = state.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (existingIndex >= 0) {
        const updated = [...state];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + product.quantity,
        };
        return updated;
      }

      return [...state, product];
    }

    case 'REMOVE_FROM_CART': {
      const { id, size, color } = action.payload;
      return state.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      );
    }

    case 'UPDATE_QUANTITY': {
      const { id, size, color, quantity } = action.payload;
      if (quantity < 1) return state;
      return state.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      );
    }

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], getInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product } });
  };

  const removeFromCart = (id, size, color) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, size, color } });
  };

  const updateQuantity = (id, size, color, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, color, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartSavings = cart.reduce(
    (sum, item) =>
      sum + (item.originalPrice - item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        cartSavings,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
