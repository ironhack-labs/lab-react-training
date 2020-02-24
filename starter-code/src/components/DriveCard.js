import React from "react"
import 'bulma/css/bulma.css'
import './../index.css'
import Rating from './Rating'
const DriveCard = (props) =>{
    console.log(props)
    return(
        <div className="DriveCard">
            
                <figure className="image is-128x128">
                    <img className="is-rounded" src={props.img} alt=""/>
                </figure> 
                <h2> {props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}

export default DriveCard;