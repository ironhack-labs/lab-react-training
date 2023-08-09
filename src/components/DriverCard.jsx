import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  const stars = '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{stars}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
