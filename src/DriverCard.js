import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="main">
      <div className="main__left">
        <div className="main__left--imageWrapper">
          <img
            className="main__left--image"
            src={img}
            alt="driverProfilePhoto"
          />
        </div>
      </div>
      <div main__right>
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <h4>
          {car.model}-{car.licensePlate}
        </h4>
      </div>
    </div>
  );
};

export default DriverCard;
