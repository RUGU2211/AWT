// 📁 App.js
// To run: npm start

import React from 'react';
import OrderList from './components/OrderList';
import MenuList from './components/MenuList';
import StoreSummary from './components/StoreSummary';
import OrderHistory from './components/OrderHistory';
import CheckoutForm from './components/CheckoutForm';
import OnlineExam from './components/OnlineExam';
import ProductCatalog from './components/ProductCatalog';
import EventList from './components/EventList';
import LabTests from './components/LabTests';
import FlightList from './components/FlightList';
import ClothingCart from './components/ClothingCart';
import OfficeSupplyCart from './components/OfficeSupplyCart';

function App() {
  const branches = [
    { name: 'BigMart', city: 'Mumbai', revenue: 500000 },
    { name: 'QuickShop', city: 'Pune', revenue: 350000 },
  ];

  const orders = [
    { id: 1, cust_name: 'Abc', total: 2500 },
    { id: 2, cust_name: 'xyz', total: 3200 },
  ];

  return (
    <div>
      <h1>AWT React, json, hooks, validations, J-form, Use Cases, LocalStorage usage</h1>

      {/* Question 1: JSON - Order history, filter by status & amount */}
      <OrderList />

      {/* Question 2: JSON - Restaurant menu, filter by price < 250 */}
      <MenuList />

      {/* Question 3: Props & map - StoreSummary component with branches */}
      <StoreSummary branches={branches} />

      {/* Question 4: Display Order History Table */}
      <OrderHistory orders={orders} />

      {/* Question 5: Hooks - Checkout form with validations */}
      <CheckoutForm />

      {/* Question 6: Online Exam Page with validations */}
      <OnlineExam />

      {/* Question 7: Product catalog from JSON using hooks */}
      <ProductCatalog />

      {/* Question 8: Event list using data from localStorage */}
      <EventList />

      {/* Question 9: Diagnostics Center - AJAX from labtests.json */}
      <LabTests />

      {/* Question 10: Flight Management - AJAX from flights.json */}
      <FlightList />

      {/* Question 11: Clothing Store App with dropdowns and total calc */}
      <ClothingCart />

      {/* Question 12: Office supply portal with total from inputs */}
      <OfficeSupplyCart />
    </div>
  );
}

export default App;
