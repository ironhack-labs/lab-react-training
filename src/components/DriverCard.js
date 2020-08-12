import React from 'react'
import Rating from './Rating'

const DriverCard = (props) => {
    return (
        <div className="drvCard">
            <div className="driver-div">
                <img className="driver" src={props.img} />
            </div>
            <div className="drv-info">
                <h3 className="drv-text">{props.name}</h3>
                <Rating className="drv-stars">{props.rating}</Rating>
                <p className="drv-text">{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
