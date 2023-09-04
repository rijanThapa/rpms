// src/App.js
import React, { useState } from 'react';
import productsData from './products';
import ProductList from './ProductList';
import Cart from './Cart';

function Main() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <h1>Online Retail Shop</h1>
      <ProductList products={productsData} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} onClearCart={clearCart} />
    </div>
  );
}

export default Main;
