import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="profile"></img>
      <div className="IdCard-text">
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Height:</strong> {props.height}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
