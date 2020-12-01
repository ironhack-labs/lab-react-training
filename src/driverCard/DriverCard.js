import React from 'react';
import './DriverCard.css'
import Rating from '../raiting/Rating';


function DriverCard(props){
    return(
    <div className="DriverCard">
     <div>
         <img src={props.img} alt ="driver card"></img>
     </div>
     <div>
    <h4>{props.name}</h4>
    <Rating>{props.rating}</Rating>
    <p>{props.car.model}- {props.car.licensePlate}</p>
    </div>
    </div>
    );
}

export default DriverCard;
