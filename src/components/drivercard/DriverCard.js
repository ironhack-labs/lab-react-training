import React, { Component } from 'react';
import Rating from '../rating/Rating';
import './DriverCard.css'

export default class DriverCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={ this.props.img }  alt="picture"/>
                </div>
                <div>
                    <p>{ this.props.name }</p>
                    <Rating>{ this.props.rating }</Rating>
                    <p>{ this.props.car.model } - { this.props.car.licensePlate }</p>
                </div>
            </div>
        )
    }
}
