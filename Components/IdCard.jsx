import React from "react";

const IdCard = (props) => {
return (
    <div className="IdCard">
    <div>
    <img src={props.picture} alt=""/>
    </div>
    <p>First name: {props.firstName}</p>
    <p>Last name: {props.lastName}</p>
    <p>Gender: {props.gender}</p>
    <p>Height: {props.height}</p>
    <p>Birth date: {props.birth}</p>
    </div>
)
}

export default IdCard;