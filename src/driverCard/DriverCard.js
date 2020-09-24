import React from 'react'
// import Rating from '../rating/Rating'

export default function DriverCard(props) {
    let darkStars = Math.round(props.rating)
    let starsToDisplay = ''
    switch(darkStars){
        case 0:
            starsToDisplay = '☆☆☆☆☆'
            break;
        case 1:
            starsToDisplay = '★☆☆☆☆'
            break;
        case 2:
            starsToDisplay = '★★☆☆☆'
            break;
        case 3:
            starsToDisplay = '★★★☆☆'
            break;
        case 4:
            starsToDisplay = '★★★★☆'
            break;
        case 5:
            starsToDisplay = '★★★★★'
            break;
        default:
            return 'no rating'
    }   
    console.log(props.car)
    return (
        <div className="driver-box">
            <div className="driver-img">
                <img src={props.img} alt="driver-img"/>
            </div>
            <div className="driver-info">
                <h3>{props.name}</h3>
                <h2>{starsToDisplay}</h2>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
