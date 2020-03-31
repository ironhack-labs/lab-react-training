import React from 'react'
import Rating from "./Rating";
const DriverCard = (props) => {
    
    return (
        <div className = "espacioDriver">
        <div className = "colorCar" style ={{color: 'white'}}>
            <div className="flexy">
            <div className ="columns2">
            <img className = "imgcar" src={props.img} alt="" />
            </div>
            <div className ="columns2">
            <p>{props.name}</p>
            <p style = {{color: 'white'}}><Rating>{props.rating}</Rating></p> 
            <p>{props.car.model}</p>
            <p>{props.car.licensePlate}</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default DriverCard
