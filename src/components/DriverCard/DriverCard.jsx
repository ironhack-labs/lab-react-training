import React from "react";

import './DriverCard.css'

const DriverCard = (props) => {

    let name = props.name
    let rating = props.rating
    let img = props.img
    // let car = 
    // let licensePlate = props.car.licensePlate

let stars = Math.ceil(Number(props.rating))

let starsRating = ""

    switch(stars){
        case 0 :
            starsRating = "☆☆☆☆☆"
        break;
        case 1 :
            starsRating = "★☆☆☆☆"
        break;
        case 2 :
            starsRating = "★★☆☆☆"
        break;
        case 3 :
            starsRating = "★★★☆☆"
        break;
        case 4 :
            starsRating = "★★★★☆"
        break;
        case 5 :
            starsRating = "★★★★★"
        break;
        
     }


     return(
        <div className="firstOrder">
            <div className="secondOrder">
                <div>
                    <div><img className="sizeAdjust" src={img}></img></div>
                </div>
                <div className="driverCard">
                    <div>Name: {name}</div>
                    <div>Rating: {starsRating}</div>
                    <div>Car: {props.car.model}</div>
                    <div>License Plate: {props.car.licensePlate}</div>
                </div>
            </div>
        </div>
     )


}

export default DriverCard