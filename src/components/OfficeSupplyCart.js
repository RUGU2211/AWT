// 📁 OfficeSupplyCart.js
// Question 12: Pens & Notebooks cart with input
import React, { useState } from 'react';

function OfficeSupplyCart() {
  const [penQty, setPenQty] = useState(0);
  const [noteQty, setNoteQty] = useState(0);
  const total = penQty * 10 + noteQty * 20;

  return (
    <div>
      <h2>Office Supply Cart</h2>
      Pens (₹10): <input type="number" onChange={(e) => setPenQty(+e.target.value)} /><br />
      Notebooks (₹20): <input type="number" onChange={(e) => setNoteQty(+e.target.value)} /><br />
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default OfficeSupplyCart;
