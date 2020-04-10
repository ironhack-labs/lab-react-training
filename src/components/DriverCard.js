import React, { Component } from 'react'
import Rating from './Rating'

export default class DriverCard extends Component {
  render() {
    const { name, rating, img, car: { model, licensePlate } } = this.props
    return (
      <div className="driver-card">
        <img src={img} alt=""/>
        <div className="info">
          <p className="driver-name">{ name }</p>
          <Rating size={30}>{ rating }</Rating>
          <p className="driver-car">{ model } - { licensePlate } </p>
        </div>
      </div>
    )
  }
}
