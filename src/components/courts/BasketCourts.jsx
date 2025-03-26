import React, { useState } from 'react';

const initialBasketCourts = [
  { name: 'Court Alpha', place: 'Sports Complex', description: 'An indoor court with modern amenities.' },
  { name: 'Court Beta', place: 'High School', description: 'A classic outdoor court with hoops.' },
  { name: 'Court Gamma', place: 'Recreation Center', description: 'A court with seating for spectators.' }
];

function BasketCourts() {
  const [basketCourts, setBasketCourts] = useState(initialBasketCourts);

  const addCourt = (court) => {
    setBasketCourts([...basketCourts, court]);
  };

  const updateCourt = (index, updatedCourt) => {
    const updatedCourts = [...basketCourts];
    updatedCourts[index] = updatedCourt;
    setBasketCourts(updatedCourts);
  };

  const deleteCourt = (index) => {
    const updatedCourts = basketCourts.filter((_, i) => i !== index);
    setBasketCourts(updatedCourts);
  };

  return (
    <div>
      <h2>Basketball Courts</h2>
      <ul>
        {basketCourts.map((court, index) => (
          <li key={index}>
            <h3>{court.name}</h3>
            <p>Location: {court.place}</p>
            <p>{court.description}</p>
            <button onClick={() => deleteCourt(index)}>Delete</button>
            <button onClick={() => updateCourt(index, { name: 'Updated Name', place: 'Updated Place', description: 'Updated Description' })}>Update</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addCourt({ name: 'New Court', place: 'New Place', description: 'New Description' })}>Add Court</button>
    </div>
  );
}

export default BasketCourts;
