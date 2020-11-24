import React, { Component } from 'react';
import './DriverCard.css'
import Rating from './Rating';

class DriverCard extends Component {
    render(){
        return (
            <div /*style={{backgroundColor: {this.prop.bgColor},color: {this.props.color}}}> */className="driver-card-div">
                <div className="card-el-1">
                    <img className="driver-img" src={this.props.img} alt="" width="100px"/>
                </div>
                <div className="card-el-2">
                    <p>{this.props.name}</p>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        );
    }
}

export default DriverCard;