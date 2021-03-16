import React from 'react'
import Rating from './Rating'
import './../styles/iteration7.css'

const DriverCard = (props) => {
    return (
        <div className="DriverCard__card">
            <div className="DriverCard__identity-img">
                <img src={props.img} alt="identity-image"/>
            </div>
        <div>
            <h2>{props.name}</h2>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} {props.car.licensePlate}</p>
        </div>
        </div>

    )
}

export default DriverCard
