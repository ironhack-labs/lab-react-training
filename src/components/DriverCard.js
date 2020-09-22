import React, {Fragment} from 'react';
import './DriverCard.css';
import Rating from './Rating'

function DriverCard(props){
    const {
    name, 
    rating,
    img,
    car} = props;
    
 return (
        <div className="driver-card">
        <img src={img} className="drive-img"/>
        
        <div className="info">
            <h1>{name}</h1>
            <Rating>{rating}</Rating>
            <p>{car.model}- {car.licensePlate}</p>
        </div>
        </div>
)};
     
export default DriverCard;