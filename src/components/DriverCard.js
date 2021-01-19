import React from 'react'

import '../components/DriverCard.css'

import Rating from './Rating';

class DriverCard extends React.Component {
    render() {
        return(
            <div className="DriverCard">
                <img src={this.props.img} alt={this.props.name}/>
                <div>
                    <h2>{this.props.name}</h2>
                    <Rating>{this.props.rating}</Rating>
                    <p>{`${this.props.car.model} - ${this.props.car.licensePlate}`}</p>
                </div>
            </div>
        );
    }
}

export default DriverCard;