import React from 'react';
import './Sport.css';
import { Link } from 'react-router-dom';
import futbolImage from '../../img/futbol.jpg';
import baloncestoImage from '../../img/basket.jpg';
import voleibolImage from '../../img/voley.jpg';

const sports = [
    { name: 'Soccer', description: 'A team sport played between two teams of eleven players each.', image: futbolImage, path: '/futbol' },
    { name: 'Basketball', description: 'A team sport in which two teams of five players try to score points.', image: baloncestoImage, path: '/basket' },
    { name: 'Volleyball', description: 'A team sport in which two teams of six players face each other.', image: voleibolImage, path: '/voley' }
];

const Sport = () => {
    return (
        <div className='sport-container'>
            {sports.map((sport, index) => (
                <div className='sport' key={index}>
                    <img src={sport.image} alt={sport.name} className='sport-image' />
                    <h3>
                        <Link to={sport.path}>{sport.name}</Link>
                    </h3>
                    <p>{sport.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Sport;
