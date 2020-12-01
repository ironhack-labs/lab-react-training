import React, { Component } from 'react'
import Rating from '../rating/Rating'
import './DriverCard.css'

export default class DriverCard extends Component {
    render() {
        return (
            <div className="driverCardContainer">
                <div  className="driverCardImgContainer">
                    <img src={this.props.img} alt="Driver Image"/>
                </div>
                <div className="driverCardDataContainer">
                    <h2>{this.props.name}</h2>
                    <Rating>{this.props.rating}</Rating>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
}
