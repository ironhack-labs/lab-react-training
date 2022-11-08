import React from 'react'
import { Rating } from '../Rating/Rating';

export const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '400px',
        }}
      >
        <div>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              marginRight: '10px',
            }}
            src={img}
            alt={name}
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ margin: '0' }}>{name}</h3>
          <Rating>{rating}</Rating>
          <p style={{ margin: '0' }}>
            {car.model} {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};
