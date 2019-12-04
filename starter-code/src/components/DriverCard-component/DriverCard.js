import React, { Component } from "react";
import Rating from "../Rating-component/Rating";

export default class DriverCard extends Component {
  divStyle = {
    border: "solid 1px black",
    width: "100vw",
    borderRadius: "5px",
    padding: "10px",
    boxSizing: "border-box",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    margin: "10px"
  };

  imgStyle = {
    width: "150px",
    marginRight: "10px",
    borderRadius: "50%"
  };

  render() {
    return (
      <div>
        <div style={this.divStyle}>
          <img
            src={this.props.img}
            alt={this.props.name}
            style={this.imgStyle}
          />
          <div>
            <p>{this.props.name}</p>
            <Rating>{this.props.rating}</Rating>
            <p>
              {this.props.car.model}
              {this.props.car.licensePlate}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
