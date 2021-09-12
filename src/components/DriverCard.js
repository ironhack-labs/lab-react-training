import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

export default function DriverCard({ name, rating, imgLink, car }) {
  return (
    <div className="driver-card-container">
      <div className="driver-img-container">
        <img src={imgLink} alt="Driver" />
      </div>
      <div className="driver-info-container">
        <h3>{name}</h3>
        <Rating rating={rating} />
        <p>
          {car ? car.model : ''} - {car ? car.licensePlate : ''}
        </p>
      </div>
    </div>
  );
}
