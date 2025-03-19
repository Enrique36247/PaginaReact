import React from 'react';

const futbolCourts = [
  { name: 'Stadium 1', place: 'Downtown', description: 'A large stadium with professional facilities.' },
  { name: 'Field 2', place: 'Suburbs', description: 'A community field with artificial grass.' },
  { name: 'Park 3', place: 'Riverside', description: 'A scenic field near the river.' }
];

function FutbolCourts() {
  return (
    <div>
      <h2>Soccer Courts</h2>
      <ul>
        {futbolCourts.map((court, index) => (
          <li key={index}>
            <h3>{court.name}</h3>
            <p>Location: {court.place}</p>
            <p>{court.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FutbolCourts;
