import React from 'react';
import "./../styles/IdCard.css";

const IdCard = (props) => {
    console.log(props);
    return (
        <div className="IdCard">

        <img src={props.picture} alt="profile-pic"></img>
        <div className="text">
        <p><b>Firstname: </b>{props.firstName}</p>
        <p><b>Lastname:</b> {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height}</p>
        <p><b>Birth: </b>{props.birth}</p>
        </div>
        </div>
    )
}

export default IdCard;
