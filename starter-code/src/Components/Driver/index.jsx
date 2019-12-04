import React from 'react';

import './style.css';


function DriverCard (data) {
    const black = Math.round(data.rating)
    const white = 5 - black
    const rating = []
    for(let i = 0; i < black; i++ ){
       rating.push("★")
    }
    for(let i = 0; i < white; i++ ){
       rating.push("☆")
    }
    console.log(black,white)
    return (
      <div className ="drive">
      <img class= "drive-img" src = {data.img} />
      <div>
      <p>{data.name}</p>
      <p>{rating}</p>
      <p>{data.car.model} - {data.car.licensePlate}</p>
      </div>
      </div>
    )
}

export default DriverCard;

