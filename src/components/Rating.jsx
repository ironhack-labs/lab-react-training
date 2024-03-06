import React from 'react';
import solidStar from '../assets/images/fullyStar.png';
import regularStar from '../assets/images/empty star.jpeg';

const Rating = ({ rating }) => {
    // Calculate the number of full and empty stars
    const fullStars = Math.min(Math.floor(rating), 5);
    const emptyStars = 5 - fullStars;

    // Function to generate an array of stars
    const generateStars = (count, icon) => {
        return [...Array(count)].map((index) => (
            <img key={index} src={icon} alt="star" className='star' />
        ));
    };

    return (
        <div >
            {generateStars(fullStars, solidStar)}
            {generateStars(emptyStars, regularStar)}
        </div>
    );
};

export default Rating;
