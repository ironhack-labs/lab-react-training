import React, { Component } from 'react';
import Rating from './rating';

export class Drivercard extends Component {
  render() {
    return (
      <div className="Drivercard">
        <div className="idimg">
          <img src={this.props.img} alt="" />
        </div>
        <div className="idcontent">
          <h2>{this.props.name}</h2>
          <div><Rating>{this.props.rating}</Rating></div>
          <div className="idcarinfo">{this.props.car.model} - {this.props.car.licensePlate}</div>
        </div>
      </div>
    )
  }
}

export default Drivercard
