import React from 'react';
import "./../styles/IdCard.css";

function IdCard(props) {
  return (
    <div className="IdCard">
      <img className="IdCard__img" src={props.picture} alt="{props.firstName} {props.lastName}" /> 
      <div>
        <p><b>First name:</b> {props.firstName}</p>
        <p><b>Last name:</b> {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height}</p>
        <p><b>Birth:</b> {props.birth.toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard;
