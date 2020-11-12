import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div className="info">
      <img src={props.picture} alt="Avatar" />
      <div>
        <p>
          <span>Last Name: </span>
          {props.lastName}
        </p>

        <p>
          <span>First Name: </span>
          {props.firstName}
        </p>

        <p>
          <span>Gender: </span>
          {props.gender}
        </p>

        <p>
          <span>Height: </span>
          {props.height}
        </p>

        <p>
          <span>Birth: </span>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
