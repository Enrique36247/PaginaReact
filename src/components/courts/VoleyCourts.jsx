import React from 'react';

const voleyCourts = [
  { name: 'Court A', place: 'City Center', description: 'A well-maintained court in the heart of the city.' },
  { name: 'Court B', place: 'Beachside', description: 'A sandy court perfect for beach volleyball.' },
  { name: 'Court C', place: 'Community Park', description: 'A family-friendly court in a quiet park.' }
];

function VoleyCourts() {
  return (
    <div>
      <h2>Volleyball Courts</h2>
      <ul>
        {voleyCourts.map((court, index) => (
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

export default VoleyCourts;
