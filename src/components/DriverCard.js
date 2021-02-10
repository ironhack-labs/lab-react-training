import React from "react";
import Rating from './Rating'

function DriverCard({name,rating,img,car}){
    return(
        <div className="card">
            <div>
                <img className="imgCard" src={img}/>
            </div>
            <div className="cardContent">
                <p className="nameCard">{name}</p>
                <Rating>
                    {rating}
                </Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
};

export default DriverCard;