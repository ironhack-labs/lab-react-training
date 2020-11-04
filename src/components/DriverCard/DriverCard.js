import React from 'react';
import './DriverCard.css';
import Rating from '../Rating/Rating';

const DriverCard = ({
    name,
    rating,
    img,
    car
}) => {
    return(
        <div>
            <div>{name}</div>
            <Rating children={rating}/>
        </div>
    );
}

export default DriverCard;