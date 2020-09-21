import React from 'react'
import Rating from './Rating'

function DriverCard(props) {

    return (
        <div className="DriverCard">
            <img src={props.img} alt="" />
                <div className="card-info">
                <p>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard