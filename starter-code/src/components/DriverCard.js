import React, { Component } from 'react'
import Rating from './Rating'

export default class DriverCard extends Component {

    render() {
        return (
            <div className="DriverCard">
            <div>
              <img
              src={this.props.img}></img>
              <div>
                  <h2>{this.props.name}</h2>
                  <Rating>{this.props.rating}</Rating>
                  <span >{this.props.car.model} - </span>
                  <span>{this.props.car.licensePlate}</span>
              </div>
            </div>  
        </div>
        )
    }
}
