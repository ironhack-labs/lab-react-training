import React from 'react';
import Rating from './Rating';

const DriverCard = (props) =>{
    return (
    <div>
        <img src={props.img} alt=""/>
        <h4>{props.name}</h4>
        <Rating>{props.rating}</Rating>
        <p>{props.car['model']} - {props.car.licensePlate}   </p>
    </div>
    )
}

export default DriverCard;