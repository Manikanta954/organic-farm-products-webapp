import React, { useState } from 'react';
import '../styles/Card.css';

function Card({ product, addToCart }) {
  const [quantity, setQuantity] = useState(product.category === 'meat' ? 1 : 6); // Default 6 for eggs, 1 for meat

  const handleQuantityChange = (value) => {
    if (product.category === 'meat') {
      if (value >= 1) {
        setQuantity(value);
      }
    } else {
      if (value >= 6 && value % 2 === 0) {
        setQuantity(value);
      }
    }
  };

  const decreaseQuantity = () => {
    if (product.category === 'meat') {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      if (quantity > 6) {
        setQuantity(quantity - 2);
      }
    }
  };

  const increaseQuantity = () => {
    if (product.category === 'meat') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity + 2);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-details">
        {/* Apply smaller font for eggs */}
        <h2 className={`card-name ${product.category === 'eggs' ? 'small-font' : ''}`}>
          {product.name} {product.category === 'meat' && <span className="kg-label">(kg)</span>}
        </h2>
        <p className='card-description'>{product.description}</p>
        <div className="card-quantity">
          <label>Quantity: </label>
          <div className="quantity-input">
            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
              min={product.category === 'meat' ? "1" : "6"} // Minimum for meat is 1, eggs 6
              step={product.category === 'meat' ? "1" : "2"} // Step for meat is 1, eggs is 2
            />
            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
          </div>
          {product.category === 'meat' && <span className="kg-label">kg</span>}
        </div>
        <div className="card-price ">₹{(product.price * quantity).toFixed(2)}</div>
        <button className='add-to-cart-button' onClick={() => addToCart({ ...product, quantity })}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
