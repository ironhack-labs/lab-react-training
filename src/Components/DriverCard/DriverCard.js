import React, { Component } from 'react';
import './DriverCard.css'
import Rating from '../Rating/Rating';

class DriverCard extends Component {
    render(){
        const {img, name, rating, car} = this.props;

        return (
            <div className="uber-kkkj">
                <img src={img} alt="drivers pic" />
                <div className='info'>
                    <h2>{name}</h2>
                    <Rating>{rating}</Rating>
                    <p>
                        {car.model} - {car.licensePlate}
                    </p>
                </div>
            </div>
        );
    };
}

export default DriverCard;
