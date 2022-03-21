import './DriverCard.css';
import React from 'react';
import Rating from '../Rating/Rating';



const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
    return (
        <div className="driver-card">
            <div className="mt-2">
                <img src={img} alt="..." />
            </div>
            <div className="driver-card-content">
                <h4> {name}</h4>
                <Rating>{rating}</Rating>
                <p className="card-text"> {model} - {licensePlate}</p>
            </div>
        </div>
    );
};

export default DriverCard;
