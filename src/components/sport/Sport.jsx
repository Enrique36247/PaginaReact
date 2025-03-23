import React from 'react';
import './Sport.css';
import futbolImage from '../../img/futbol.jpg';
import baloncestoImage from '../../img/basket.jpg';
import voleibolImage from '../../img/voley.jpg';

const sports = [
  { name: 'Soccer', description: 'A team sport played between two teams of eleven players each.', image: futbolImage },
  { name: 'Basketball', description: 'A team sport in which two teams of five players try to score points.', image: baloncestoImage },
  { name: 'Volleyball', description: 'A team sport in which two teams of six players face each other.', image: voleibolImage }
];

const Sport = () => {
  return (
    <div className='sport-container' id='sport'>
      {sports.map((sport, index) => (
        <div className='sport' key={index}>
          <img src={sport.image} alt={sport.name} className='sport-image' />
          <h3>{sport.name}</h3>
          <p>{sport.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sport;
