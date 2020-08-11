import React from 'react'
import Rating from '../Rating/Rating'
import './DriverCard.css'

export default function DriverCard(props) {
    return (
        <div className="blue-container">
            <div className="img-container"><img src={props.img} alt=""/></div>
            <div>
                <span>{props.name}</span>
                <Rating>{props.rating}</Rating>
                <span>{props.car.model} - {props.car.licensePlate}</span>
            </div>
        </div>
    )
}
