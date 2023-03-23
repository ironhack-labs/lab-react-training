import React from "react";
import './drivercard.css'

function DriverCard({name, rating, img, car})  {
    const stars = Math.round(rating);
    const completeStars = '★'.repeat(stars); 
    const onlyStars = '☆'.repeat(5 - stars);

    return (
        <div className="DriverCard">
            <div className="card mb-3">

                <div className= "photoCard">
                    <img className="image-card"src = {img} alt= ""/>
                </div>

                <h1>{name}</h1>

                <div className=''>
                    {completeStars}
                    {onlyStars}
                </div>

                <div>
                    <h3>{car.model}</h3>
                    <h3>{car.licensePlate}</h3>
                </div>


            </div>
            
            
        </div>
    )
}

export default DriverCard;