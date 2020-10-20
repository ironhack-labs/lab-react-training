import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (
        <div>
            <img src={props.img} alt=''/>
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}
