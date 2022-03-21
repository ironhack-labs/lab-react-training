import React from 'react';

const DriverCard = (props) => {

    const rating = Math.round(props.rating)

    return (
        <div>
            <h4>{props.name}</h4>
            <h4>{rating}</h4>
            <h4>{props.img}</h4>
            <h4>{props.car.model} - {props.car.licensePlate}</h4>
        </div>
    );
};

export default DriverCard;