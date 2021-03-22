import React from 'react'
import Rating from "./Rating"

const DriverCard = (props) => {
    return (
        <div>

            <img width="100px" src={props.img}/>
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>

            
        </div>
    )
}

export default DriverCard
