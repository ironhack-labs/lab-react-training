import React from 'react';
import Rating from '../rating/Rating';
import './drivercard.css';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="driver-card" style={{ background: '#455EB1' }}>
      <div className="driver-img">
        <img src={img} alt="Person portrait" />
      </div>
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating style={{ 'font-size': '2rem', color: 'white' }}>
          {rating}
        </Rating>
        <p>
          {' '}
          {car.model}
          {' - '}
          {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
