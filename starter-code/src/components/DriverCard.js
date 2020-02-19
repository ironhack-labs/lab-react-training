import React, { Component } from "react";

export default class DriverCard extends Component { 
  render() {
    return (
      <div id="driver">
        <img src={this.props.img}></img>
        <div>
        <h1>{this.props.name}</h1>
         <p>{Math.round(this.props.rating)>=1 ? '★':'☆'}
        {Math.round(this.props.rating)>=2 ? '★':'☆'}
        {Math.round(this.props.rating)>=3 ? '★':'☆'}
        {Math.round(this.props.rating)>=4 ? '★':'☆'}
        {Math.round(this.props.rating)>=5 ? '★':'☆'}</p>
        <p>{this.props.car.model}-{this.props.car.licensePlate}</p>
        </div>
      </div>
    );
  }
}