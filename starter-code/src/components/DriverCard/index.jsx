import React, { Component } from "react";
import Rating from "./../Rating";

class DriverCard extends Component {
  render() {
    const props = this.props;
    return (
      <div className="driver-card">
        <div className="driver-card-img">
          <img src={props.img} alt="user" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
