import React from 'react';

//need to add rating - connect to Rating.js but not sure how yet

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img src={props.img} alt="driver pic" />
      <p>{props.name}</p>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
