import React from 'react'
import Rating from './Rating';

export default function DriverCard(props) {
    return (
        <div class="driverCard">
            <img class="driverCardContainer" src={props.img} alt="driver"/>
            <div class="driverCardText driverCardContainer">
                <p class="driverCardName">
                    <b>{props.name}</b>
                </p>
                <Rating>{props.rating}</Rating>
                <p>
                    {props.car.model} - {props.car.licensePlate}
                </p>
            </div>
        </div>
    )
}
