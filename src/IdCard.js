import React from "react";
import "./IdCard.css"

const IdCard = (props)=>{
    const birthdate = props.birth.toLocaleString("en-us");
    return (
        <div className="container">
            <div>
            <img src={props.picture} alt="" />
            </div>
            <div>
            <h4>First name: {props.firstName}</h4>
            <h4>Last Name: {props.lastName}</h4>
            <h4>Gender: {props.gender}</h4>
            <h4>Height: {props.height}</h4>
            <h4>Date of Birth: {birthdate}</h4>
            </div>
        </div>
                
    )
}

export default IdCard;