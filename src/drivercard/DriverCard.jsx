import React from 'react';
import Rating from '../rating/Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {

  return (
     <div className="DriverCard">
    <img src={img} alt="img"></img>
    <div>
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
        <div> <p>{car.model} - {car.licensePlate}</p> </div>

    </div>
  </div>
  )
}

export default DriverCard;
