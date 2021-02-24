import React from 'react'
import Rating from './Rating';

export default function DriverCard(props) {
    return (
        <div>
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <img width="30px" src={props.img} />
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}
