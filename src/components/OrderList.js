// 📁 OrderList.js
// Question 1: JSON - Create, fetch and display order history
// Display orders whose status is “pending” and amount is greater than 2000
// To run: Ensure App.js imports and uses <OrderList />

import React, { useEffect, useState } from 'react';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/json/orders.json') // Place orders.json in public folder
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (order) => order.status === 'pending' && order.amt > 2000
        );
        setOrders(filtered);
      });
  }, []);

  return (
    <div>
      <h2>Pending Orders greater than ₹2000</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.order_id}>
            Order #{order.order_id} | ₹{order.amt} | Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
