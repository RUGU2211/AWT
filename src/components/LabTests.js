// 📁 LabTests.js
// Question 9: AJAX from labtests.json
import React, { useEffect, useState } from 'react';

function LabTests() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('/json/labtests.json')
      .then(res => res.json())
      .then(setTests);
  }, []);

  return (
    <div>
      <h2>Lab Test Reports</h2>
      <table border="1">
        <thead>
          <tr><th>Patient</th><th>Test Type</th><th>Result</th></tr>
        </thead>
        <tbody>
          {tests.map((t, i) => (
            <tr key={i}><td>{t.patient_name}</td><td>{t.test_type}</td><td>{t.result}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LabTests;