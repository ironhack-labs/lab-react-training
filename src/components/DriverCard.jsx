import React from 'react';

function DriverCard(props) {
  return (
    <div className="DriverCard" style={{ width: '20px' }}>
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <img src={props.img} alt="driver-img" width="100" height="100" />
      <p>
        {props.car.model} {props.car.licensePlate}{' '}
      </p>
    </div>
  );
}

export default DriverCard;
