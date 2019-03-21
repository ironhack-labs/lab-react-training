import React, { Component } from 'react';
import Rating from './Rating'

// Definition of the component DriverCard
class DriverCard extends Component {
  render() {
    return (
      <div className="DriverCard">
        <img className="left" src={this.props.img} />
        <div className="right">
          <h2>{this.props.name}</h2>
          <Rating>{this.props.rating}</Rating>
          <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
