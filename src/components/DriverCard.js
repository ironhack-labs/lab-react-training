import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {

    return (
        <div className="driver">
            <div className="one-driver">
                <img src={props.img} alt="imagen" className="driver-img"/>
            </div>
            <div>
                <h3>{props.name}</h3>
                 <Rating>{props.rating}</Rating>
                <p>{props.car.model} {props.car.licensePlate}</p>
            </div>

        </div>
    )
}
