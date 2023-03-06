import React from "react";
import "./index.css"

function IdCard({firstName, lastName, gender, height, birth, picture}) {
    return (
      <div className = "IdCard">
        <div className="user-image">
        <img src={picture} alt="user"/>
        </div>
        <div className="IdCard-information">
        <h1>Firts Name: <span>{firstName}</span></h1>
        <h1>Last Name: <span>{lastName}</span></h1>
        <h1>Gender: <span>{gender}</span></h1>
        <h1>Height: <span>{height/100}m</span></h1>
        <h1>Birth: <span>{birth.toDateString()}</span></h1>
        </div>
      </div>
    );
}

export default IdCard;
