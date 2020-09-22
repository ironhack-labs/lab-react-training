import React, { Component } from 'react'

export default class DriverCard extends Component {
    render() {
        let rate = this.props.rating
        return (
            <div className="driverCard">
            <div className="driverImg">
                <img src={this.props.img} alt=""/>
                </div>
             <div className="driverInfo">
                <div>
                {this.props.name}
                </div>
                <div className="driverRating">
                {rate <1 ? '☆' : '★'}
                {rate <2 ? '☆' : '★'}
                {rate <3 ? '☆' : '★'}
                {rate <4.1 ? '☆' : '★'}
                {rate <4.5 ? '☆' : '★'}
                </div>
                <div className="carDetails">
                {this.props.car.model} - {this.props.car.licensePlate}
                </div>
                </div>
            </div>
        )
    }
}
