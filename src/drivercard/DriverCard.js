import React from 'react'
import './DriverCard.css'

export default function DriverCard(props) {
    let driverRating='';
    const blackStar='★'
    const whiteStar='☆'
    for(let i=1;i<6;i++){
        if(Math.round(props.rating)>=i)
        driverRating+=blackStar;
        else
        driverRating+=whiteStar;
    }
    return (
        <div>
            <div className="driver-card">
                <div className="photo"><img src={props.img} alt=""/></div>
                <div className="driver-card-info">
                    <p id="drivers-name">{props.name}</p>
                    <p id="drivers-rating">{driverRating}</p>
                    <p id="drivers-car-info"><span>{props.car.model}</span> - <span>{props.car.licensePlate}</span></p>
                </div>
            </div>
        </div>
    )
}
