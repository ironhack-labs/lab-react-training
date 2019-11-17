import React, { Component } from "react";


export default class DriverCard extends Component {
  showStars = () => {
    let starRoundNumber = Math.round(this.props.rating);
    let stars = ["☆", "☆", "☆", "☆", "☆"];
    let printStars = "";
    let arrayStars = [];
    for (let i = 0; i < starRoundNumber; i++) {
      printStars += "★";
    }
    arrayStars = printStars.split("");
    stars.splice(0, starRoundNumber);
    return (arrayStars + stars).replace(/,/g, " ");
  };
  render() {
    return (
      <div className="box d-flex flex-row justify-content-center" style={{backgroundColor: '#4850c4', color: 'white', borderRadius:'14px'}}>
        <div className="img rounded-circle" style={{backgroundImage: "url(" + this.props.img + ")" }}>
          {/* <img src={this.props.img} alt={this.props.name}   className="img-fluid" /> */}
        </div>
        <div className="col-8">
          <h3>{this.props.name}</h3>
          <h4>{this.showStars()}</h4>
          <h5>
            {this.props.car.model} - {this.props.car.licensePlate}
          </h5>
        </div>
      </div>
    );
  }
}
