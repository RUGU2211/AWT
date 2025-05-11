// 📁 StoreSummary.js
// Question 3: Props & map()
import React from 'react';

function StoreSummary({ branches }) {
  return (
    <div>
      <h2>Store Summary</h2>
      <ul>
        {branches.map((b, i) => (
          <li key={i}>{b.name} - {b.city} - ₹{b.revenue}</li>
        ))}
      </ul>
    </div>
  );
}

export default StoreSummary;