import React from "react";
import '../styles/DriverCard.css';
import Rating  from "./Rating";

const DriverCard = (props) => {

    return (
        <div className="driver-card">
                <img src={props.img} alt='driver' className="img-driver"/>
                <div className="div-text-perfil">
                    <span>{props.name}</span>
                    <Rating className='rating '>{props.rating}</Rating>   {/* "★★★☆☆"*/ }
                    <div className="model-car">{props.car.model} - {props.car.licensePlate}</div>
                </div>
        </div>
    );
};

export default DriverCard; 