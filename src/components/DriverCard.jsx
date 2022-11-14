import React from 'react'
import Rating from "../components/Rating"

function DriverCard({ name, rating, img, car }) {
    return (
        <div className="drive-card">
            <div>
                <img src={img} className="drive-card-picture" width="100px" alt='' />
            </div>
            <div className="drive-card-text">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>


        </div>
    )
}

export default DriverCard;