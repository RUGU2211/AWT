// 📁 ProductCatalog.js
// Question 7: Fetch product catalog using hooks
import React, { useEffect, useState } from 'react';

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/json/products.json')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name} - ₹{p.price} - {p.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;