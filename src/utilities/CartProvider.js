import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const itemCount = items.length;

  const value = {
    items,
    addItem,
    removeItem,
    itemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
