import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="driver-card">
      <div className="driver-card-img">
        <img src={img} alt={`${name} avatar`} />
      </div>
      <div className="driver-card-info">
        <h2>{name}</h2>
        <div className="driver-card-rating">
          {[...Array(filledStars)].map((_, i) => (
            <span key={i} className="star filled">★</span>
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <span key={i} className="star empty">☆</span>
          ))}
          <span>{rating.toFixed(1)}</span>
        </div>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
