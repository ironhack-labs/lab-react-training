import React from 'react'
import Rating from '../rating/Rating'

export default function DriverCard(props) {
    return (
        <div className="driver-card">
            <div className="driver-image">
                <img src={props.img} alt="driver"/>
            </div>
            
            <div className="driver-info">
                <h3>{props.name}</h3>
                <span>{Rating}</span>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
