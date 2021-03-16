import React from 'react';
import './../views/DriverCard.css';
import Rating from './../components/Rating';

const DriverCard = ({name, car, img, rating}) => {

    return (
        <div className="DriverCard">
            <img src={img} alt=""/>
            <aside>
                <p>{name}</p>
                <Rating children={rating} />
                <p>{car.model} - {car.licensePlate}</p>
            </aside>
        </div>
    )
}

export default DriverCard
