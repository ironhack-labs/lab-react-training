import React from 'react'
import Rating from './Rating'

function DriverCard(props) {
    return (
        <div className="drivercard">
            <div>
                <img src={props.img} alt="driverpic" className="drivercard-img"></img>
            </div>
            <div>
                <p>{props.name}</p>
                <p><Rating>{props.rating}</Rating></p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard