import React from "react";

function DriverCard({name, rating, img, car})
{
    const handleRating = (num) => {
        const filledStars = '★'.repeat(Math.floor(num));
        const emptyStars = '☆'.repeat(5 - Math.floor(num));
    
        return filledStars + emptyStars;
    }

    return(
        <div className="driverCardContainer">
            <img src={img}></img>
            <div className="driverInfo">
                <h2>{name}</h2>
                <h3>{handleRating(rating)}</h3>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard