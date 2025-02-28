import React from 'react';
import './Review.css';

const reviews = [
    { name: 'John Doe', review: 'Great product!' },
    { name: 'Jane Smith', review: 'Very useful and well made.' },
    { name: 'Sam Johnson', review: 'Exceeded my expectations.' },
    { name: 'Chris Lee', review: 'Good value for the price.' }
];

const Review = () => {
    return (
        <div className='review-container'>
            {reviews.map((review, index) => (
                <div className='review' key={index}>
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                </div>
            ))}
        </div>
    );
};

export default Review;