import React, { Component } from "react";
import "./DriverCard.css";

export default class DriverCard extends Component {
  render() {
    const { imageDriver, title, rating, car } = this.props;
    return (
      <div className="driverCard-container">
        <div>
          <img src={imageDriver} className="driverCard-image"></img>
        </div>
        <div className="driverCard-title-right">
          <h2>{title}</h2>
          <div className="driverCard-rating">{rating}</div>
          <p>{car}</p>
        </div>
      </div>
    );
  }
}
