import React, { Component } from "react";
import Rating from "../Rating"
import "./style.css";

export default class DriverCard extends Component {
  render() {
      const {name, rating, img, car } = this.props;
    return (
      <div className="DriverCard">
        <div className="boximg">
          <img alt={name} src={img} className="img"/>
        </div>
        <div className="inline">
          <div className="w100">
            {name}
          </div> 
          <div className="w100">
            <Rating>{rating}</Rating>
          </div>
          <div> 
            {car.model}
            {car.licensePlate}
          </div>
        </div> 
      </div>
    );
  }
}