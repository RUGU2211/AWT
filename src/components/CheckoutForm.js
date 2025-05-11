// 📁 CheckoutForm.js
// Question 5: Checkout form with validations
import React, { useState } from 'react';

function CheckoutForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', pincode: '', email: '', phone: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { firstName, lastName, pincode, email, phone } = form;
    if (!firstName || !lastName || !pincode || !email || !phone)
      return 'All fields are required';
    if (!/^[0-9]{6}$/.test(pincode)) return 'Invalid pincode';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Invalid email';
    if (!/^[987]\d{9}$/.test(phone)) return 'Invalid phone number';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) setError(err);
    else alert('Form Submitted Successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout Form</h2>
      <input name="firstName" onChange={handleChange} placeholder="First Name" /><br />
      <input name="lastName" onChange={handleChange} placeholder="Last Name" /><br />
      <input name="pincode" onChange={handleChange} placeholder="Pincode" /><br />
      <input name="email" onChange={handleChange} placeholder="Email" /><br />
      <input name="phone" onChange={handleChange} placeholder="Phone" /><br />
      <button type="submit">Submit</button>
      <p style={{ color: 'red' }}>{error}</p>
    </form>
  );
}

export default CheckoutForm;
