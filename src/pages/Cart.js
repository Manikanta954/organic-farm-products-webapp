import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, getTotalPrice, removeFromCart } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout');
    // Implement checkout functionality here
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
