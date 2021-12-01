import React from 'react';
import '../DriverCard/DriverCard.Styles.css'
import Rating from'../Rating/Rating'
const DriverCard =(props)=>{
    const {name, rating, img, car} = props
    return (
        <div className="DriverCard">
            <div>
                <img id="imgDriver" src={img} alt={name}></img>
            </div>

            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model}-{car.licensePlate}</p>
            </div>

        </div>
      
    )
    }
    
    export default DriverCard;