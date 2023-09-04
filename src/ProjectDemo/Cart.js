// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, onClearCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={onClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
