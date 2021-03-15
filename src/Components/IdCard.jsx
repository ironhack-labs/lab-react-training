import React from 'react';
import './../styles/IdCard.css';

function IdCard(props) {
    console.log(props);
    return (
        <div className="IdCard">
            <img src={props.picture} alt="Profile" />
            <p><b>Lastname:</b> {props.lastName}</p>
            <p><b>Fistname:</b> {props.firstName}</p>
            <p><b>Gender:</b>{props.height}</p>
            <p><b>Birth:</b>{props.birth}</p>
        </div>
    )
}

export default IdCard
