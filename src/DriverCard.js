import React from 'react';
import Stars from './Stars';

export default class DriverCard extends React.Component {
    constructor(state,props){
       super(props); 
    }
    render() {
      return (
        <div className="DriverCard">
          <img src={this.props.img} alt="photo"/> 
          <p>{this.props.name}</p>
          <Stars className="Stars">{this.props.rating}</Stars> 
          <p>Car: {this.props.car.model}, license: {this.props.car.licensePlate}</p>
        </div>
      );
    }
  }
