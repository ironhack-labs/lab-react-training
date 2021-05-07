import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} alt="profile" />
      <div className="idCard-description">
        <p>
          <span>Last name: </span>
          {props.lastName}
        </p>
        <p>
          <span>First name: </span>
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
          {props.birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
