import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

  return (
    <div className="allLicense">
      <div className="firsBlock">
        <img src={img} alt="" width='80px' />
      </div>
      <div className="secondBlock">
        <p>{name}</p>
        <p>{<Rating>{rating}</Rating>}</p>
         <p>{car.model} - {car.licensePlate}</p>
              </div>
    </div>
  );
};

export default DriverCard;