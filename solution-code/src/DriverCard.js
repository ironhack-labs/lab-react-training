import React, { Component } from 'react';
import Rating from './Rating'

// Definition of the component DriverCard
class DriverCard extends Component {
  render() {
    return (
      <div className="DriverCard">
        <h2>Your Driver</h2>
        {this.props.name}
        <img src={this.props.img} />
        <Rating>{this.props.rating}</Rating>
      </div>
    );
  }
}

export default DriverCard;
