import React from 'react'
import Rating from '../Rating/Rating'
import './DriverCard.css'
export default function DriverCard(props) {
    return (
        <div className = "container">
            <div className ="image-cropper">
            <img src = {props.img} className ="profile-pic" / >
            </div>
            <div className = "text-wrapper">
            <h2>{props.name}</h2>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model +" - "+props.car.licensePlate}</p>
            </div>
        </div>
    )
}
