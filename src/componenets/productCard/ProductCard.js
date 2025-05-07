import React from 'react'

function ProductCard({ product }) {
  return (
    <div>
       <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <div className="product-price">${product.price}</div>
        <button className="buy-button">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
