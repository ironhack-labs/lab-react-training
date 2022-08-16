import React from 'react';
import Rating from './components/Rating/Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <div className="main-card">
      <img className="driver-img" src={img} alt="img" />
      <div className="driver-info">
        <h3>{name}</h3>
        <div className="rating-card">
          <Rating rating={finalRating} />
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
