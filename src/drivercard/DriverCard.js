import React from 'react';
import './DriverCard.css';


function rateStars(num) {

    if(num === 0){
      return '☆☆☆☆☆';
    }
    if(num === 1){
      return '★☆☆☆☆';
    }
    if(num === 2){
      return '★★☆☆☆';
    }
    if(num === 3){
      return '★★★☆☆';
    }
    if(num === 4){
      return '★★★★☆';
    }
    if(num === 5){
      return '★★★★★';
    }
  }
  

function DriverCard(props) {
  return (
    <div className="driver-bg">
      <img src={props.img} alt=""/>
      <div className="driverRight">
        <span>{props.name}</span><br/>
        <span>{rateStars(Math.round(props.rating))}</span><br/>
        <span id="lastSpan">{props.car.model}-{props.car.licensePlate}</span>
      </div>
    </div>
  )
}

export default DriverCard;