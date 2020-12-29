import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

function DriverCard(props) {
        return (
                <div className="DriverCard border">
                        <img src={props.img} alt={props.name} />
                        <div>
                                <h2>{props.name}</h2>
                                <Rating>{props.rating}</Rating>
                                <p>{props.car.model} - {props.car.licensePlate}</p>
                        </div>

                </div>
        )
}

export default DriverCard
