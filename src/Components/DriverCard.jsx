import React from 'react';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="driver-card">
      <div className="driver-img">
        <img src={img} alt={name} />
      </div>
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < Math.round(rating) ? 'filled' : ''}>
              ★
            </span>
          ))}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
