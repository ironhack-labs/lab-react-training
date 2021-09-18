import React, {Component} from 'react';
import Rating from '../rating/Rating.js'
import './DriverCard.css';

class DriverCard extends Component {
    render () {
        const {name, rating, img, car} = this.props
        return (
            <div className="driver-card">
                <img src={img} alt="driver" />
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        )
    }
}

export default DriverCard;