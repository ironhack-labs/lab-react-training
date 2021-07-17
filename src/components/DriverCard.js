import { Component } from 'react';
import '../App.css';
import Rating from './Rating';

class DriverCard extends Component {
    render() {
        let carModel = this.props.car.model;
        let licensePlate = this.props.car.licensePlate;
        return (
            <div className='driver-card'>
                <div className='img'>
                    <img src={this.props.img}/>
                </div>
                <div className='info'>
                    <p className='driver'>{this.props.name}</p>
                    <Rating>{this.props.rating}</Rating> 
                    <p className='car'>{carModel} - {licensePlate}</p>
                </div>
            </div>
        )
    }
}

export default DriverCard;