
//-----iteration 1----- 


import React from 'react';
import '../styles/IdCard.css';

function IdCard (props) {
    return (
        <div className="IdCard">
            <img className="img-IdCard" src={props.picture} alt="artist"/>
            <div className="char-IdCard">
               <p><b>First Name:</b> {props.firstName}</p>
               <p><b>Last Name:</b> {props.lastName}</p>
               <p><b>Gender:</b> {props.gender}</p>
               <p><b>Height:</b> {props.height}m</p>
               <p><b>Birth:</b> {props.birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;