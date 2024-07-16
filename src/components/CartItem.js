import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartItem.css';

function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
