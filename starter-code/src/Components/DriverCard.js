import React, { Component } from 'react';
import Rating from './Rating';

class DriverCard extends Component {
  
    state = {
      name: this.props.name,
      rating: this.props.rating,
      img: this.props.img,
      carModel: this.props.car.model,
      carLicensePlate: this.props.car.licensePlate,
    }

    render() {

    return (
      <div className="DriverCard">
          <img src={this.state.img} alt="driver"/>
          <h1>{this.state.name}</h1>
          <Rating>{this.state.rating}</Rating>
          <p>{this.state.carModel} - {this.state.carLicensePlate} </p>
      </div>
    
    );
  }
}

export default DriverCard;