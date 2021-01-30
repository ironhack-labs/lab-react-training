import React from 'react';
import Rating from './Rating.js';

export default function DriverCard({name, rating, img, car}) {

    return (
        <div className='driverCont'>
            <img src={img} />
            <div>
                <p><strong>{name}</strong></p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )

}