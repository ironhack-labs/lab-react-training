import React from "react"
import Rating from "./Rating"

function DriverCard(props){

    return(
        <div className="driver">
           <div>
                <img src={props.img} alt="driver img"/>
           </div>
           <div className="infos">
                <h2 className="driverText">{props.name}</h2>
                <div className="rate driverText"> <Rating>{props.rating}</Rating> </div>
                <p className="driverText">{props.car.model} - {props.car.licensePlate}</p>
           </div>
        </div>
    )

}

export default DriverCard