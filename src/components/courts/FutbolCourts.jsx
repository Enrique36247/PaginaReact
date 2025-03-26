import React, { useState } from 'react';

const initialFutbolCourts = [
  { name: 'Stadium 1', place: 'Downtown', description: 'A large stadium with professional facilities.' },
  { name: 'Field 2', place: 'Suburbs', description: 'A community field with artificial grass.' },
  { name: 'Park 3', place: 'Riverside', description: 'A scenic field near the river.' }
];

function FutbolCourts() {
  const [futbolCourts, setFutbolCourts] = useState(initialFutbolCourts);

  const addCourt = (court) => {
    setFutbolCourts([...futbolCourts, court]);
  };

  const updateCourt = (index, updatedCourt) => {
    const updatedCourts = [...futbolCourts];
    updatedCourts[index] = updatedCourt;
    setFutbolCourts(updatedCourts);
  };

  const deleteCourt = (index) => {
    const updatedCourts = futbolCourts.filter((_, i) => i !== index);
    setFutbolCourts(updatedCourts);
  };

  return (
    <div>
      <h2>Soccer Courts</h2>
      <ul>
        {futbolCourts.map((court, index) => (
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

export default FutbolCourts;
