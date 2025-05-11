// 📁 MenuList.js
// Question 2: Display menu items with price < 250
import React, { useEffect, useState } from 'react';

function MenuList() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/json/menu.json') // Place menu.json in public folder
      .then((res) => res.json())
      .then((data) => setMenu(data.filter(item => item.price < 250)));
  }, []);

  return (
    <div>
      <h2>Menu Items Below ₹250</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item.item} ({item.type}) - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;