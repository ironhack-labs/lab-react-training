import React, { Component } from 'react';
import Rating from '../rating/Rating';

export default class DriverCard extends Component {
    render() {
      console.log(this.props);
      return (
        <div>
          <img style={{ width: '50%' }} src={this.props.img} alt={this.props.name} />
          <h2>{this.props.name}</h2>
          <Rating>{this.props.rating}</Rating>
          <h5>
            {this.props.car.model} - {this.props.car.licensePlate}
          </h5>
        </div>
      );
    }
  }