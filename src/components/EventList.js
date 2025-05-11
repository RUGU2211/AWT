// EventList.js
// Command to run: Import this component in App.js and render <EventList />

import React, { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load data using AJAX/fetch from public/json/events.json
    fetch('/json/events.json')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        // Also store in localStorage as mentioned in your requirement
        localStorage.setItem('events', JSON.stringify(data));
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, idx) => (
              <tr key={idx}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
};

export default EventList;
