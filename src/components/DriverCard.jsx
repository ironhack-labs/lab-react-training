import React from 'react'
import Rating from './Rating'

function DriverCard(props) {
    console.log(props);
    return (
        <div>
            <img src={props.img} className="driverCard"/>
            <h3> {props.name} </h3>
            <Rating>{props.rating}</Rating>
            <p> {props.car.model} - {props.car.licensePlate} </p>
        </div>
    )
}

export default DriverCard