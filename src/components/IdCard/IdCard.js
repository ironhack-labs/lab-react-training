import React from "react";
import "./IdCard.css";

//Created component with Hook Method
const IdCard = (props) => {
    return (
        <div className="idCard-container">
            <img src={props.picture} alt={props.firstName}/>
            <ul>
                <li> <b>First name:</b> {props.firstName}</li>
                <li> <b>Last name:</b> {props.lastName}</li>
                <li> <b>Gender:</b> {props.gender}</li>
                <li> <b>Height:</b> {(props.height)/100}m</li>
                <li> <b>Birth:</b> {props.birth.toDateString()}</li>
            </ul>
        </div>
    );
};

export default IdCard;