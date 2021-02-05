import React from 'react';
import Rating from './Rating';
import './DriverCard.css';


function DriverCard(props) {
    return (
        <div className='driver'>
        <img src={props.img} alt="driver" />
        <p><strong>{props.name}</strong></p>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}

export default DriverCard;