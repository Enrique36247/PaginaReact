import React, { useState } from 'react';

const initialVoleyCourts = [
  { name: 'Court A', place: 'City Center', description: 'A well-maintained court in the heart of the city.' },
  { name: 'Court B', place: 'Beachside', description: 'A sandy court perfect for beach volleyball.' },
  { name: 'Court C', place: 'Community Park', description: 'A family-friendly court in a quiet park.' }
];

function VoleyCourts() {
  const [voleyCourts, setVoleyCourts] = useState(initialVoleyCourts);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', place: '', description: '' });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(voleyCourts[index]);
  };

  const handleSave = () => {
    const updatedCourts = [...voleyCourts];
    updatedCourts[editingIndex] = formData;
    setVoleyCourts(updatedCourts);
    setEditingIndex(null);
    setFormData({ name: '', place: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addCourt = (court) => {
    setVoleyCourts([...voleyCourts, court]);
  };

  const updateCourt = (index, updatedCourt) => {
    const updatedCourts = [...voleyCourts];
    updatedCourts[index] = updatedCourt;
    setVoleyCourts(updatedCourts);
  };

  const deleteCourt = (index) => {
    const updatedCourts = voleyCourts.filter((_, i) => i !== index);
    setVoleyCourts(updatedCourts);
  };

  return (
    <div>
      <h2>Volleyball Courts</h2>
      <ul>
        {voleyCourts.map((court, index) => (
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
                <button onClick={() => deleteCourt(index)}>Delete</button>
                <button onClick={() => updateCourt(index, { name: 'Updated Name', place: 'Updated Place', description: 'Updated Description' })}>Update</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => addCourt({ name: 'New Court', place: 'New Place', description: 'New Description' })}>Add Court</button>
    </div>
  );
}

export default VoleyCourts;
