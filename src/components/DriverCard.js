import React, { Component } from 'react';
import Rating from './Rating.js';


export default class DriverCard extends Component {
    render() {
        return (
            <div style="background-color: #455EB5, color: white">
                <div>
                    <img src={this.props.img} />
                </div>
                <div>
                    <h3>{this.props.name}</h3>
                    <div><Rating children={this.props.rating} /></div>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
} 