// 📁 OrderHistory.js
// Question 4: Order History Table
import React from 'react';

function OrderHistory({ orders }) {
  return (
    <div>
      <h2>Order History</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Customer</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td><td>{order.cust_name}</td><td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;