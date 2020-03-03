import React, { Component } from 'react';
import './style.scss';
import Rating from '../../components/Rating';

const DriverCard = props => {
  const { name, rating, img, car } = props;
  return (
    <div className="drive">
      <img src={img} alt="pic" />
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
      <p>
        {car.model} - <span>{car.licensePlate}</span>
      </p>
    </div>
  );
};

export default DriverCard;
