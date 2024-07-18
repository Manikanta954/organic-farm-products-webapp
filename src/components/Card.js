import React, { useState } from 'react';
import '../styles/Card.css';

function Card({ product, addToCart }) {
  const [quantity, setQuantity] = useState(6);

  const handleQuantityChange = (value) => {
    if (value >= 6 && value % 2 === 0) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 6) {
      setQuantity(quantity - 2);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 2);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-details">
        <h2>{product.name}</h2>
        <p className='card-description'>{product.description}</p>
        <div className="card-quantity">
          <label>Quantity: </label>
          <div className="quantity-input">
            <button className="quantity-btn" onClick={() => decreaseQuantity()}>-</button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
              min="6"
              step="2"
            />
            <button className="quantity-btn" onClick={() => increaseQuantity()}>+</button>
          </div>
        </div>
        <div className="card-price ">₹{(product.price * quantity).toFixed(2)}</div>
        <button className='add-to-cart-button' onClick={() => addToCart({ ...product, quantity })}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
