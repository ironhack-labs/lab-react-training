import React from 'react';
import Rating from './Rating'

const DriverCard  = ({name, rating, img, car}) =>  { 

    const divStyle = { 
        backgroundColor : { "Blue": "#00B1E1" }
    };

    return (
        <div className={divStyle}>
            <img src={img} alt={name}></img>
            <Rating rating={rating}/>
            <h2>{name}</h2>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    )            
}

export default DriverCard;



