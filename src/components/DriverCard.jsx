import React from 'react';

const DriverCar = ({name,rating,img,car}) => (
    <div className="driverCar">
        <div className="pic">
            <img src={img} alt="profile"/>
        </div>
        <div className="data">
            <span className="name">{name}</span>
            <span className="name">{`${setRating(rating)}`}</span>
            <span className="car">{car.model} - {car.licensePlate}</span>
        </div>
    </div>
)

function setRating(rating) {
    switch (Math.round(parseFloat(rating))) {
        case 0:
            return "☆ ☆ ☆ ☆ ☆";
        case 1:
            return "★ ☆ ☆ ☆ ☆";
        case 2:
            return "★ ★ ☆ ☆ ☆";
        case 3:
            return "★ ★ ★ ☆ ☆";
        case 4:
            return "★ ★ ★ ★ ☆";
        case 5:
            return "★ ★ ★ ★ ★";
        default:
            return "Error, invalid rating";
    }
}

export default DriverCar;