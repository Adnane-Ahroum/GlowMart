// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
