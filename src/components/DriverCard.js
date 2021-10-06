import React from 'react'

function DriverCard(props) {
    return (
        <div className="DriverCard">
            <p>{props.name}</p>
            <p>{props.rating}</p>
            <img src={props.img} alt="driver-img" />
            <p>{props.car.model} {props.car.licensePlate} </p>
        </div>
    )
}

export default DriverCard
