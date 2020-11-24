import React from 'react'
import "./DriverCard.css";

const DriverCard = ({ driverCard }) => {
    return (
        <article key ={driverCard.car.licensePlate} className="dc-container">
            <div>
                <img src={driverCard.img} className="dc-image" alt="driverCardImage"/>
            </div>

            <div className="dc-p-tag">
                <p>{driverCard.name}</p>
                <p>Rating: {driverCard.rating}</p>
                <p>{driverCard.car.model}</p>
                <p>{driverCard.car.licensePlate}</p>
            </div>
        </article>
    );
};

export default DriverCard