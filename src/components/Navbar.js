import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {  RiShoppingCartLine, RiUserLine } from 'react-icons/ri'; // Importing icons from React Icons
import { AiOutlineHome,AiOutlineInfoCircle } from 'react-icons/ai';
import '../styles/Navbar.css';


function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="navbar-brand playwrite-cu-d">
        <Link to="/" style={{ textDecoration: "none",fontSize:"30px" }}>Organic Farm</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" title="Home"><AiOutlineHome /></Link>
        <div className="cart-link">
          <Link to="/cart" title="Cart"><RiShoppingCartLine /></Link>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        <Link to="/about" title="AboutUs"><AiOutlineInfoCircle /></Link>
        <Link to="/profile" title="Profile"><RiUserLine /></Link>
      </div>
    </nav>
  );
}

export default Navbar;
