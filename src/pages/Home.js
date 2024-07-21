import React, { useContext } from 'react';
import Card from '../components/Card';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import '../styles/Home.css';
import '../styles/Fireworks.css'; // Import the firework CSS
import egg from './egg.jpg';
import egg1 from './egg2.jpeg';
import chicken2 from './chicken2.jpeg';
import chickenbreast from './chickenbreast.jpeg';
import mutton1 from './mutton1.jpeg';
function Home() {
  const { addToCart } = useContext(CartContext);
  const products = [
    {
      id: 1,
      name: 'Organic Eggs',
      description: 'Fresh organic eggs from free-range chickens.',
      price: 15.00,
      image: egg,
    },
    {
      id: 2,
      name: 'Free range Eggs',
      description: 'Fresh eggs from country chickens.',
      price: 15.00,
      image: egg1,
    },
    {
      id: 3,
      name: 'Country chicken meat',
      description: 'Fresh and marinated country chicken meat.',
      price: 70.00,
      image: chicken2,
    },
    {
      id: 4,
      name: 'Chicken breast',
      description: 'Enjoy juicy marinated chicken breast of free range chicken.',
      price: 80.00,
      image: chickenbreast,
    },
    {
      id: 5,
      name: 'Mutton',
      description: 'Relish the tasty mutton meat from our organic farm.',
      price: 160.00,
      image: mutton1,
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
    <div className="home container">
      {products.map((product) => (
        <Card key={product.id} product={product} addToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default Home;
