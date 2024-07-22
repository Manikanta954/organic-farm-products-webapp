import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Checkout from './Checkout';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setIsAlertVisible(true);
    } else {
      setIsCheckout(true);
    }
  };

  const handleBack = () => {
    setIsCheckout(false);
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="cart">
      {isAlertVisible && (
        <div className="alert-overlay">
          <div className="alert-box">
            <h2>No items in cart to checkout</h2>
            <button onClick={closeAlert} className="ok-button">OK</button>
          </div>
        </div>
      )}
      {isCheckout ? (
        <Checkout onBack={handleBack} />
      ) : (
        <>
          <h1>Shopping Cart</h1>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ₹{getTotalPrice().toFixed(2)}</h2>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
