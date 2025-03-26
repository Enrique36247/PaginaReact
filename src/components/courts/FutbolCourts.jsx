import React, { useState } from 'react';

const initialFutbolCourts = [
  { name: 'Stadium 1', place: 'Downtown', description: 'A large stadium with professional facilities.' },
  { name: 'Field 2', place: 'Suburbs', description: 'A community field with artificial grass.' },
  { name: 'Park 3', place: 'Riverside', description: 'A scenic field near the river.' }
];

function FutbolCourts() {
  const [futbolCourts, setFutbolCourts] = useState(initialFutbolCourts);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', place: '', description: '' });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(futbolCourts[index]);
  };

  const handleSave = () => {
    const updatedCourts = [...futbolCourts];
    updatedCourts[editingIndex] = formData;
    setFutbolCourts(updatedCourts);
    setEditingIndex(null);
    setFormData({ name: '', place: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                <button onClick={() => deleteCourt(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => addCourt({ name: 'New Court', place: 'New Place', description: 'New Description' })}>Add Court</button>
    </div>
  );
}

export default FutbolCourts;
