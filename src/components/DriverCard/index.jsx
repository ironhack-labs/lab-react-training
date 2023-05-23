import Rating from "../Rating"
import React from "react"
import './index.css'

const DriverCard = ({name, rating, img, car}) =>{
    return(
        <div className="driverCard">
            <img className="pic" src={img} alt=""/>
            <div className="driverInfo">      
                <p className="pad driverName">{name}</p>
                <Rating className="pad ratingStars">{rating}</Rating>
                <p className="pad">{car.model}-{car.licensePlate}</p>
            </div>
        </div>
    )
}
export default DriverCard