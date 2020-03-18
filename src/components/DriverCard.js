import React from 'react'
import Rating from './Rating'

const DriverCard = props =>{
    return (
        <div class="driver-card">
            <img alt="" src={props.img} />
            <div class="driver-info">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;