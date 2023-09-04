// src/components/Product.js
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
