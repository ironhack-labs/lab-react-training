import React, { Component } from 'react';
import Rating from './Rating.js';

class DriverCard extends Component {

    render({name, rating, img, car}=this.props) {

        return (
            <div className='driverCont'>
                <img src={img} />
                <div>
                    <p><strong>{name}</strong></p>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
        )

    }

}

export default DriverCard;