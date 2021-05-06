import React from 'react';
import Rating from '../components/rating.js';

const DriverCard = ({name, rating, img, car}) => {
    return (
        <article>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
            
        </article>
    );
}

export default DriverCard;