import React, { Component } from 'react'
import getRatingStars from '../tools/getRatingStars'

class DriverCard extends Component {
    render() {
        return (
            <div className='driver-card'>
                <div className='driver-card-img'>
                    <img src={this.props.img} alt={this.props.name}/>
                </div>
                <div className='driver-card-data'>
                    <h2>{this.props.name}</h2>
                    <div>
                        {getRatingStars(this.props.rating)}
                    </div>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
}

export default DriverCard
