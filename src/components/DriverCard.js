import React from 'react';

const DriverCard = (props) => {
  return (
    <div>
      <h1>DriverCard</h1>

      <div>
        <img style={{ borderRadius: '50px', height: '50px' }} src={props.img} />
      </div>

      <div>
        <div>{props.name}</div>

        <div>{props.rating}</div>

        <div>
          {props.car.model}-{props.car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
