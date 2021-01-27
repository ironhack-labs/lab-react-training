import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = props => {
    
    return(
        <div className="driverCard">
            <img src={props.img} alt={props.name}/>

            <div className="driverCard-text">
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;