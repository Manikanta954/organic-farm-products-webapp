import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your-publishable-key-here');

const Payment = ({ onPaymentSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  );
};

export default Payment;
