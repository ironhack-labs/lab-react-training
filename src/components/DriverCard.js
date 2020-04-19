import React, { Component } from 'react';
import './DriverCard.css';
import Rating from './Rating';

class DriverCard extends Component {
    render() {
        const { img, name, rating, car: {model, licensePlate}} = this.props;

        return (
            <div className='DriverCard'>
                <img src={img} alt='' />
                <div>
                    <h2>{name}</h2>
                    <div className='DriverCard-rating'>
                        <Rating>{rating}</Rating>
                    </div>
                    <div>
                        <span>{model}</span> - <span>{licensePlate}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverCard;