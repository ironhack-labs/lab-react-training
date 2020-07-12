import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (
        <div className="DriverCard">
            <div>
            <div>
                <img src={props.img} alt="img"/>
            </div>
            <div className="DriverCard__info">
                <label>{props.name}</label>
                <Rating />
                <label>{props.car.model} - {props.car.licensePlate}</label>
            </div>
            </div>
        </div>
    )
}
