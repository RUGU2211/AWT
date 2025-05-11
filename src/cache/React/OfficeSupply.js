import React, { useState } from "react";

const OfficeSupply = () => {
  const [items, setItems] = useState([
    { name: "Pen", price: 20, quantity: 1 },
    { name: "Notebook", price: 100, quantity: 1 },
  ]);

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = parseInt(quantity, 10);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Office Supply Store</h1>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{item.name}</h2>
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

export default OfficeSupply;
