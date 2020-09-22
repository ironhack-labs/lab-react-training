import React from 'react';
import Rating from './Rating';

const DriverCard = props => {


    return (
        <div>
            <div><img src={props.img} alt='test'/></div>
            <p>{props.name}</p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
            <Rating>{props.rating}</Rating>
        </div>
    );
}

export default DriverCard;