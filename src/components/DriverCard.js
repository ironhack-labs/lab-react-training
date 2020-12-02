import React from 'react'

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img src={props.img} alt="driver pic" />
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard
