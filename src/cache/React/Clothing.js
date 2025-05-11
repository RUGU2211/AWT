import React, { useState } from "react";

const Clothing = () => {
  const [items, setItems] = useState([
    { name: "Shirt", price: 500, size: "M", quantity: 1 },
    { name: "Pants", price: 800, size: "M", quantity: 1 },
    { name: "Sweater", price: 1200, size: "M", quantity: 1 },
  ]);

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = parseInt(quantity, 10);
    setItems(updatedItems);
  };

  const handleSizeChange = (index, size) => {
    const updatedItems = [...items];
    updatedItems[index].size = size;
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Clothing Store</h1>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{item.name}</h2>
          <div>
            <label>Size: </label>
            <select
              value={item.size}
              onChange={(e) => handleSizeChange(index, e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div>
            <label>Quantity: </label>
            <select
              value={item.quantity}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
      <h2>Total Amount: ₹{calculateTotal()}</h2>
    </div>
  );
};

export default Clothing;
