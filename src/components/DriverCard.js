import React from 'react';

export default function DriverCard(props) {
  console.log(props);
  return (
    <div className="Driver-card-div">
      <div>
        <img id="driverCardImg" src={props.img} alt="" />
      </div>
      <div id="driverCardText">
        <h2>{props.name}</h2>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
