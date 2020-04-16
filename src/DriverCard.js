import React from "react";
import Rating from "./Rating";

const DriverCard = (props) => {
  return (
    <div className="driverCard">
      <div className="driverInfo">
        <div className="imgdiv">
          <img src={props.img} alt={props.name}></img>
        </div>
      </div>
      <div className="driverInfo">
        {props.name}
        <Rating>{props.rating}</Rating>
        {props.car.model} - {props.car.licensePlate}
      </div>
    </div>
  );
};

export default DriverCard;
