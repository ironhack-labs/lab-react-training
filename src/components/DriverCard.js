import React from 'react'
import Rating from './Rating'
import '../components/cssComponents/DriverCard.css'

function DriverCard(props) {
    return (
        <div className="driver-card">
            <div>
            <p>{props.name}</p>
            <p><Rating>{props.rating}</Rating></p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
            <div>
            <p><img src={props.img} alt="profimg" height="100px"/></p>
            </div>
            </div>

        </div>
    )
}

export default DriverCard
