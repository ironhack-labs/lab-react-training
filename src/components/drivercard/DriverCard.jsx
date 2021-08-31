import React from 'react';
import "./DriverCard.css";
import Ratings from '../ratings/Ratings';

export default class DiverCard extends React.Component {
    render() {
        const driver = this.props;

        return(
            <div className='DriverCard'>
                <img className='driverCardImg' src={driver.img} alt='Driver photo' />
                <div className='driverCardText'>
                    <h2>{driver.name}</h2>
                    <Ratings>{driver.rating}</Ratings>
                    <p>{driver.car.model} - {driver.car.licensePlate}</p>
                </div>
            </div>
        )
    }
}