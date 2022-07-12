import React from "react"; 
import "../components/css/DriverCard.css"


function DriverCard({name, rating, img, car}){
    return (
        <div className="driver">
            <div className="image">
                <img src={img} alt="img"/>
            </div>
            <div className="about">
                <h4>{name}</h4>
                <h5>{rating}</h5>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div> 
    )
}

export default DriverCard;