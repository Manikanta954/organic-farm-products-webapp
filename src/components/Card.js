import React, { useState } from 'react';
import '../styles/Card.css';

function Card({ product, addToCart }) {
  const [quantity, setQuantity] = useState(6);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 6 && value % 2 === 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-quantity">
          <label>Quantity: </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="6"
            step="2"
          />
        </div>
        <div className="card-price">${(product.price * quantity).toFixed(2)}</div>
        <button onClick={() => addToCart({ ...product, quantity })}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
