import React from 'react';

const DriverCard = (props) => {
    const { name, rating, img, car } = props;
    let stars;
    switch (true) {
        case (rating < 0.9):
            stars = "☆☆☆☆☆";
            break;
        case (rating >= 0.9 && rating < 1.9):
            stars = "★☆☆☆☆";
            break;
        case (rating >= 1.9 && rating < 2.9):
            stars = "★★☆☆☆";
            break;
        case (rating >= 2.9 && rating < 3.9):
            stars = "★★★☆☆";
            break;
        case (rating >= 3.9 && rating < 4.9):
            stars = "★★★★☆";
            break;
        default:
            stars = "★★★★★";
            break;
    };
    return (
        <div className="DriverCard">
            <img className="left" src={img} alt={name}/>
            <div className="right">
                <h2>{name}</h2>
                <div className="Rating">{stars}</div>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
};
    
export default DriverCard;

