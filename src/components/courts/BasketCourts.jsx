import React from 'react';

const basketCourts = [
  { 
    name: 'Court Alpha', 
    place: 'Sports Complex', 
    description: 'An indoor court with modern amenities.' 
  },{ 
    name: 'Court Beta', 
    place: 'High School', 
    description: 'A classic outdoor court with hoops.' 
  },{ 
    name: 'Court Gamma', 
    place: 'Recreation Center', 
    description: 'A court with seating for spectators.' 
  }
];

function BasketCourts() {
  return (
    <div>
      <h2>Basketball Courts</h2>
      <ul>
        {basketCourts.map((court, index) => (
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

export default BasketCourts;
