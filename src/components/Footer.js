// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Organic Farm Products. All rights reserved.</p>
        <p><a href="/about">About Us</a></p>
      </div>
    </footer>
  );
};

export default Footer;
