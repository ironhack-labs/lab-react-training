import React, { Component } from 'react';
import '../styles/Drivercard.css'


import Rating from './Rating';

class DriverCard extends Component {
    render(){
        return (
            <div className="drcard">
                    <img className="driver-img" src={this.props.img} alt="" />
                <div className="rbox">
                    <p>{this.props.name}</p>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        );
    }
}

export default DriverCard;



