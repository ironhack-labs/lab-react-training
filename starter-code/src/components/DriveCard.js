import React from 'react';
import './DriveCard.css'
import Rating from './Rating'

const DriverCard = ({name, rating, img, car}) => {
    
    return (
        <div className="m-3 " style={ {backgroundColor: '#455EB5'}}>
           <div className="d-inline ">
                <img className="img-driver" src={img}  alt={name}/>
           </div>
           <div className="d-inline color-white">
                {name}
                <Rating className="">{rating}</Rating>
                {car.model} - {car.licensePlate}
            </div>
        </div>
    )
}

export default DriverCard;
