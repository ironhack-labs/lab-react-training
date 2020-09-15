import React from "react"
import Rating from "../components/Rating"

export default function DriverCard(props){

  return(
    <div className="driverCard">
      <img src={props.img}/>
      <div className="right">
        <h2>
         {props.name}
        </h2>
        <Rating>
          {props.rating}
        </Rating>
        <span>
        {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  )
}

