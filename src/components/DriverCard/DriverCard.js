import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = ({name, rating, img, car}) => {
    return (
        <div className="driver-card">
            <img src={img}/>
            <div className="driver-card-body">
                <h1>{name}</h1>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;