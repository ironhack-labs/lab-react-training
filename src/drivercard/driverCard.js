import React from 'react';
import './driverCard.css';
import Rating from '../Rating/rating.js';

function DriverCard (props) {
    return (
        <div className="driver-card">
            <div className="driver-pic">
                <img style={{ width:100, height:100, borderRadius:50 }} src={props.img} alt=""/>
            </div>
            <div className="driver-info">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard