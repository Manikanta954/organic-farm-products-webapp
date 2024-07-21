import React from 'react';
import '../styles/AboutUs.css';
import CEO from './CEO.png'; // Add your picture in the assets folder

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p className="about-description" >
        Welcome to Organic Eggs! We are dedicated to providing you with the freshest and
        highest quality organic eggs from free-range chickens. Our farm follows the best
        practices to ensure the well-being of our chickens and the sustainability of our
        environment.
      </p>
      <p className="about-description">
        Our mission is to deliver healthy and delicious eggs to your doorstep while
        promoting a sustainable and ethical approach to farming. Thank you for choosing
        Organic Eggs.
      </p>
      <div className="founder-section">
        <img src={CEO} alt="Founder" className="founder-pic" />
        <div className="founder-details">
          <h2 className="founder-title">Founder & CEO</h2>
          <h3 className="founder-name"><span className="highlighted-letter">M</span>anikanta <span className="highlighted-letter1">T</span>alagama</h3>
          <p className="founder-objective">
            My objective in establishing Organic farm is to provide fresh, high-quality organic meat and eggs from free-range chickens while promoting sustainable and ethical farming practices to provide best nutrition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
