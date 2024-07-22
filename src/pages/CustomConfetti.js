import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Checkout.css';
import CustomConfetti from './CustomConfetti';

function Checkout({ onBack }) {
  const { getTotalPrice } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState('');
  const [form, setForm] = useState({
    email: '',
    phone: '',
    name: '',
    address: '',
    pincode: ''
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    setTimeout(() => {
      setIsOrderPlaced(false);
      alert('Order placed successfully');
    }, 3000);
  };

  const handleCouponCheck = () => {
    alert('Coupon code checked');
  };

  return (
    <div className="checkout">
      <button onClick={onBack} className="back-button">Back to Cart</button>
      <h2 className="animated fadeInDown">Price Summary</h2>
      <p className="animated fadeInUp">Total: ₹{getTotalPrice().toFixed(2)}</p>
      <div className="coupon-code animated fadeInLeft">
        <label htmlFor="coupon">Coupon Code:</label>
        <input
          type="text"
          id="coupon"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="coupon-check-button" onClick={handleCouponCheck}>Check</button>
      </div>
      <form onSubmit={handleSubmit} className="animated fadeInRight">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button animated fadeInUp">Place Order</button>
      </form>
      <CustomConfetti trigger={isOrderPlaced} />
    </div>
  );
}

export default Checkout;
