import React from 'react'
import "./DriverCard.css"
import Rating from "../Ratings/Rating"

const DriverCard = (props) => {
    console.log(props.car.model)
    const driverCardStyle = {backgroundColor:"blue", color:"white" ,height:"250px", width:"600px"}
    return (
        <div style={driverCardStyle}>
            <div>
            <img src={props.img}/>
            </div>
            <div>
    <Rating>{props.rating}</Rating>
            </div>
            <div>
        <h2>{props.name}</h2>
    <p>{props.car.model} {""} {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
