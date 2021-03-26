import React from 'react'
import '../assets/css/DriverCard.css'
import Rating from './Rating'

const DriverCard = ({name, rating, img, car}) => {
    return (
        <div className="DriverCard">
                <div className="imgDriver">
                    <img src={img} alt="Driver"/>
                </div>
                <div>
                    <h3>{name}</h3>
                    <div>
                        <p><Rating>{rating}</Rating></p>
                    </div>
                    <div className="car">
                        <p> {car.model} - </p><p>{car.licensePlate}</p>
                    </div>
                </div>
        </div>
    )
}

export default DriverCard