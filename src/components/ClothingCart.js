// 📁 ClothingCart.js
// Question 11: Clothing items - dropdowns + quantity
import React, { useState } from 'react';

function ClothingCart() {
  const items = ['Shirt', 'Pants', 'Sweater'];
  const [cart, setCart] = useState({});

  const handleChange = (item, key, value) => {
    setCart(prev => ({
      ...prev,
      [item]: { ...prev[item], [key]: value }
    }));
  };

  const total = Object.values(cart).reduce((sum, val) => sum + ((+val.quantity || 0) * 500), 0);

  return (
    <div>
      <h2>Clothing Cart</h2>
      {items.map((item) => (
        <div key={item}>
          {item}: 
          <select onChange={(e) => handleChange(item, 'size', e.target.value)}>
            <option value="">Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <input type="number" min="0" placeholder="Qty" onChange={(e) => handleChange(item, 'quantity', e.target.value)} />
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default ClothingCart;