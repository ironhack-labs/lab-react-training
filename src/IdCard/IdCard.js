import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="User picture" />
      <div className="informations">
        <p>
          <strong> First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong> Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong> Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong> Height: </strong>
          {props.height / 100}m
        </p>
        <p>
          <strong> Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
