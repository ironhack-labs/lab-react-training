import React from 'react';
import Rating from '../components/rating.js';

const DriverCard = ({name, rating, img, car}) => {
    return (
        <article className="drivercard-container">
            <div className="img-box">
                <img src={img} alt=""/>
            </div>
            <div className="info-box">
                <p className="name-label">{name}</p>
                <Rating className="rating-label">{rating}</Rating>
                <p className="car-label">{car.model} - {car.licensePlate}</p>
            </div>
            
        </article>
    );
}

export default DriverCard;