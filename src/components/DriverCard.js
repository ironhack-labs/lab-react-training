import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = (props) => {
    const {name, rating, img, car} = props;
    return (
        <div className="DriverCard">
            <img className="left" src={img} alt="" />
            <div className="right">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{`${car.model} - ${car.licensePlate}`}</p>
            </div>
            
        </div>
    );
};

export default DriverCard;
