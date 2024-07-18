import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{textDecoration:"none"}}>Organic Eggs</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <div className="cart-link">
          <Link to="/cart">Cart</Link>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        <Link to="/about">About Us</Link>
        <Link to="/profile">Profile</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
