
import React from "react"
import Ratings from "../Rating/Rating"
import "./DriverCard.css"


export function DriverCard({name,rating,img, car: {model, licensePlate}}) {
 
   return <div className="driver-container">
       <h2 className="drive-text">{name}</h2>
       <p className="drive-text">model: {model}</p>
       <p className="drive-text">licensePlate: {licensePlate}</p>
       <img className="img-size img-driver" src={img} alt={name}/>
       <Ratings>{rating}</Ratings>
   </div>

}