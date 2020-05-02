import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (
        <div className="drivercard-wrapper">
        <img src={props.img} alt="imageDriver"/>
        <div> {props.name}
            <Rating>{props.rating}</Rating>
            {props.car.model}/{props.car.licensePlate}
        </div>
        </div>
    )
}
