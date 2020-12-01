import React, { Component } from 'react';
import Rating from "./Rating"

class DriverCard extends Component {
    render({name, rating, img, car} = this.props) {

        return (
            <div className="driver-card">
                <img src={img} alt="Driver photo"></img>
                <div>
                    <h2>{name}</h2>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
        );
    }
}

export default DriverCard;