import React, { useState } from 'react';

const initialBasketCourts = [
  { name: 'Court Alpha', place: 'Sports Complex', description: 'An indoor court with modern amenities.' },
  { name: 'Court Beta', place: 'High School', description: 'A classic outdoor court with hoops.' },
  { name: 'Court Gamma', place: 'Recreation Center', description: 'A court with seating for spectators.' }
];

function BasketCourts() {
  const [basketCourts, setBasketCourts] = useState(initialBasketCourts);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', place: '', description: '' });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(basketCourts[index]);
  };

  const handleSave = () => {
    const updatedCourts = [...basketCourts];
    updatedCourts[editingIndex] = formData;
    setBasketCourts(updatedCourts);
    setEditingIndex(null);
    setFormData({ name: '', place: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Basketball Courts</h2>
      <ul>
        {basketCourts.map((court, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input name="place" value={formData.place} onChange={handleChange} placeholder="Place" />
                <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                <h3>{court.name}</h3>
                <p>Location: {court.place}</p>
                <p>{court.description}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasketCourts;
