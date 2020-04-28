import React from "react";
import "../index.css";

const IdCard = props => {
    return (
        <div className="idCard">
            <img src={props.image} alt="" />
            <div className="idText">
                <p><span>First name: </span>{props.firstName}</p>
                <p><span>Last name: </span>{props.lastName}</p>
                <p><span>Gender: </span>{props.gender}</p>
                <p><span>Height: </span>{props.heigth}m</p>
                <p><span>Birth: </span>{props.birth}</p>
            </div>
        </div>
    )
}

export default IdCard; 