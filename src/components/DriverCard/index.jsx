import './index.css';
import React from 'react';

import Rating from '../Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <div className="image-cropper">
        <img src={img} alt="..." />
      </div>
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
