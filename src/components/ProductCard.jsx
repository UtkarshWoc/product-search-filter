import React from 'react';

const ProductCard = ({ product }) => {
  // Format price to INR format as per the example (₹2000)
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image-placeholder">
          {product.name.charAt(0)}
        </div>
        <span className="product-category-badge">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
