import React from 'react';
import './DriverCard.css';

const DriverCard = ({name, rating, img, car: {model, licensePlate}}) =>{
    return(
        <div className="driverCard">
            <div className='driverImg'>
                <img src={img} alt="img"></img>
            </div>
            <div className='driverInfo'>
                <h4>{name}</h4>
                <p>{rating}</p>
                <p>{`${model} - ${licensePlate}`}</p>
            </div>
        </div>
    )
}
export default DriverCard;