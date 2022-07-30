import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div className="DriverCard">
      <div className="CardImage">
        <img
          src={img}
          height={150}
          widht={150}
          style={{ borderRadius: 400 }}
          alt="picture"
        />
      </div>

      <div>
        <p>
          <b>{name}</b>
        </p>

        <p>
          <Rating>{rating}</Rating>
        </p>

        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
