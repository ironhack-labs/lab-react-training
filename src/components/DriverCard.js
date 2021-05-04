import React from 'react';
import Rating from './Rating';

import './DriverCard.css'

const DriverCard = (props) => {
    const { name, rating, img, car } = props;

    return <div className="driverCard">
        <img src={img}></img>
        <div>
            <h2>{name}</h2>
            <Rating>{rating}</Rating>   
            <div>{car.model} - {car.licensePlate} </div>         
                 
        </div>


    </div>
}

export default DriverCard