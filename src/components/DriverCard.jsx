import React, { Component } from 'react';
import Rating from '../components/Rating';

export default class DriverCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />
        <div>
          <h3>{this.props.name}</h3>
          <Rating>{this.props.rating}</Rating>
          <p>
            {this.props.car.model} - {this.props.car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}
