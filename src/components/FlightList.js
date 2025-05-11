// FlightList.js
// Run: Place this component in your React project and import it in App.js to display

import React, { useEffect, useState } from 'react';

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Simulate AJAX call - fetching from local JSON file
    fetch('/json/flights.json')
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
      })
      .catch((error) => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Flight Management</h2>
      {flights.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Airline</th>
              <th>Departure</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.airline}</td>
                <td>{flight.departure}</td>
                <td>₹{flight.fare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading flights...</p>
      )}
    </div>
  );
};

export default FlightList;
