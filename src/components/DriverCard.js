import React from 'react';
import './DriverCard.css';
import Rating from './Rating';

export default function DriverCard(props) {
    const rating = props.rating
    console.log('This is the DriverCard Components prop:',props)
    return (
        <div className="driverCardDiv">
        <div><img className="driverPic" src={props.img} alt={props.name}/></div>
        <div className="driverInfo">
            <h2>{props.name}</h2>
            <Rating>{rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
            
        </div>
    )
}
