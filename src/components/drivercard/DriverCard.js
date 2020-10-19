import React from 'react'

export default function DriverCard(props) {
    const BackgroundCol = {
        backgroundColor: "blue"
    }
    return (
        <div style={BackgroundCol} className="DriverCard">
            <div>{props.name}</div>
            <div>{props.rating}</div>
            <img src={props.img} alt="Driver-avatar"/>
            <div>{props.car.model}{props.car.licensePlate}</div>
        </div>
    )
}
