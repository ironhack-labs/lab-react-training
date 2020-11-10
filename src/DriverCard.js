import React, { Component } from 'react'
import Rating from './Rating';

export class DriverCard extends Component {
    render() {
        return (
            <div className='flex driver-card'>
                <img className='profile' src={this.props.img} alt={this.props.name} />
                <div>
                    <p>{this.props.name}</p>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
}

export default DriverCard
