import React from 'react';
import "./IdCard.css"

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="profile" />
      <div>
        <p>
          <strong>First name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height / 100}m
        </p>
        <p>
          <strong>Birth:</strong> {props.birth.toString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
