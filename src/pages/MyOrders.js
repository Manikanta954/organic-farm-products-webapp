import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const ordersRef = collection(db, 'orders', user.uid, 'userOrders');
        const snapshot = await getDocs(ordersRef);
        const ordersData = snapshot.docs.map(doc => doc.data());
        setOrders(ordersData);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Phone:</strong> {order.phone}</p>
          <p><strong>Pincode:</strong> {order.pincode}</p>
          <p><strong>Total:</strong> ₹{order.total.toFixed(2)}</p>
          <p><strong>Date:</strong> {order.date.toDateString()}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
