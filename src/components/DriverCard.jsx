import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const value = Rating({ rating });
  const roundedStyle = {
    borderRadius: '50%',
  };
  return (
    <div className="driverCard">
      <div>
        <img src={img} alt="" style={roundedStyle} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{value}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
