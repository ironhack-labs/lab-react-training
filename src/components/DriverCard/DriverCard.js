import React, { Component } from 'react'
import './DriverCard.css';
import Rating from '../Rating/Rating.js'

export default class DriverCard extends Component {
    render() {
        return (
            <div className="driverContainer">
                <div><img src={this.props.img}/></div>
                <div className="cardDetails">
                    <span>{this.props.name}</span> <br/>
                    <span><Rating>{this.props.rating}</Rating></span>
                    <span>{this.props.car.model}-{this.props.car.model}</span>
                </div>
            </div>
        )
    }
}
