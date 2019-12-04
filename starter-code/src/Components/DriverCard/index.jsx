import React from "react";
import Rating from "./../Rating";

import "./style.css";

function DriverCard(props) {
  return (
    <div className="driver-card">
      <img className="driver-card-img" src={props.img} alt="" />
      <div>
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <h5>
          {props.car.model} - {props.car.licensePlate}
        </h5>
      </div>
    </div>
  );
}

export default DriverCard;
