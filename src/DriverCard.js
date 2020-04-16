import React from 'react';
import Rating from './Rating';

const DriverCard = props => {
    return (
        <div className="flex p-6 drlicense">
            <img src={props.img} alt={props.name} className="avatar w-24" />

            <div>
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;