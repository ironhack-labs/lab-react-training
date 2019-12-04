import React, { Component } from "react";
import { DriverC } from "../styles/components";
import Rating from "./Rating";
export default class DriverCard extends Component {
  render() {
    return (
      <DriverC>
        <img src={this.props.img} alt="foto del pollo" />
        <h4>{this.props.name}</h4>
        <Rating child={this.props.rating}></Rating>
        <p>
          {this.props.car.model} - {this.props.car.licensePlate}
        </p>
      </DriverC>
    );
  }
}
