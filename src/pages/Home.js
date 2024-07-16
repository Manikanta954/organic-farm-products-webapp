import React, { useContext } from 'react';
import Card from '../components/Card';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import '../styles/Home.css';
import '../styles/Fireworks.css'; // Import the firework CSS
import egg from './egg.jpg';
function Home() {
  const { addToCart } = useContext(CartContext);
  const products = [
    {
      id: 1,
      name: 'Organic Eggs',
      description: 'Fresh organic eggs from free-range chickens.',
      price: 4.99,
      image: egg,
    },
    // Add more products as needed
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      title: 'Added to Cart!',
      html: `
        <div>
          <p>${product.name} added to cart</p>
          <div class="fireworks">
            <div class="firework"></div>
            <div class="firework"></div>
            <div class="firework"></div>
            <div class="firework"></div>
            <div class="firework"></div>
            <div class="explosion"></div>
            <div class="explosion"></div>
            <div class="explosion"></div>
            <div class="explosion"></div>
          </div>
        </div>
      `,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'fireworks-popup',
      },
    });
  };

  return (
    <div className="home">
      {products.map((product) => (
        <Card key={product.id} product={product} addToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default Home;
