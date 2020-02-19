import React, { Component } from "react";
import Rating from "./Rating";

export default class DriverCard extends Component {
  render() {
    return (
      <div id="driverCard">
        <img src={this.props.img} alt={this.props.name} />
        <div id="driverContent">
          <h1>{this.props.name}</h1>
          <Rating>{this.props.rating}</Rating>
          <span>
            {this.props.car.model} - {this.props.car.licensePlate}{" "}
          </span>
        </div>
      </div>
    );
  }
}
