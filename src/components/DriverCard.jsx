import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
    return (
        <div className="driver-card">
            <div>
                <img src={img} alt={name} />
            </div>

            <div className="driver-info">
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}
export default DriverCard