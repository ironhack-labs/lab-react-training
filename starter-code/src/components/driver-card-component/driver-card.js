import React, { Component } from 'react';
import './driver-card.css';
import Rating from '../rating-component/rating';
export default class DriverCard extends Component {
    render() {
        return (
            <div className="driver-card">
               <div className='center-content'>
                  <img src={this.props.img} alt="driver-picture" />
                  <div className="driver-content">
                    <h3>{this.props.name}</h3>
                    <Rating rate = {this.props.rating} />
                    <div className="car-details">
                       <p>{this.props.car.model+' -  '}</p><p>{this.props.car.licensePlate}</p>
                    </div>
                  </div>
               </div>
            </div>
        )
    }
}

