import React from "react";
import "../styles/IdCard.css"

const IdCard = (props) => {
return (
    <div class="boxes">
        <div><img src={props.picture} alt=""/></div>
        <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
        </div>
    </div>
);
}

export default IdCard;