//Iteration 7 | Component: DriverCard

import React, { Component } from "react";
import Rating from "./Rating";

class DriverCard extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <Rating>{this.props.rating}</Rating>
        <p>
          {this.props.car.model} - {this.props.car.licensePlate}
        </p>
        <div>{this.props.img}</div>
      </div>
    );
  }
}

export default DriverCard;
