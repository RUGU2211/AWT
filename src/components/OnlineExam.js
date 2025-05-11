// 📁 OnlineExam.js
// Question 6: Online exam form validations
import React, { useState } from 'react';

function OnlineExam() {
  const [form, setForm] = useState({ candidateId: '', emailId: '', password: '' });
  const [msg, setMsg] = useState('');

  const validate = () => {
    const { candidateId, emailId, password } = form;
    if (!candidateId.startsWith('EXAM')) return'Invalid Candidate ID';
    if (!/^\S+@\S+\.\S+$/.test(emailId)) return 'Invalid Email';
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}/.test(password)) return 'Invalid Password';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) setMsg(err);
    else setMsg('Login successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Online Exam Login</h2>
      <input name="candidateId" onChange={(e) => setForm({ ...form, candidateId: e.target.value })} placeholder="Candidate ID" /><br />
      <input name="emailId" onChange={(e) => setForm({ ...form, emailId: e.target.value })} placeholder="Email ID" /><br />
      <input type="password" name="password" onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" /><br />
      <button type="submit">Login</button>
      <p>{msg}</p>
    </form>
  );
}

export default OnlineExam;