import React from 'react'
import '../assets/css/DriverCard.css'
import Rating from  './Rating'
const DriverCard = ({name,rating,img,car}) => {

    
    return (
        <div className="d-flex DriverCard justify-content-center align-items-center">
            <img src={img} alt='Profile image' className='round__image' height='100'/>
            <div className='d-flex flex-column align-items-start px-3'>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <div>
                    <span>{car.model}</span> - <span>{car.licensePlate}</span>
                </div>
            </div>
        </div>
    )
  }

export default DriverCard