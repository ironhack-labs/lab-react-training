import React, { Component } from 'react'
import Rating from './Rating'

export default class DriverCard extends Component {
    render() {
        return (
            <div className="driver">
                <img src={this.props.img} alt="Driver profile"></img>
                <div>
                    <p>{this.props.name}</p>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
}
