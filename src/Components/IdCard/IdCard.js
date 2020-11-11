import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div>
      <div className="container">
        <div>
          <img src={props.picture} />
        </div>
        <div>
          <strong>First Name:</strong> {props.firstName} <br />
          <strong>Last Name:</strong> {props.lastName} <br />
          <strong>Gender:</strong> {props.gender} <br />
          <strong>Height:</strong> {props.height / 100}m <br />
          <strong>Birth:</strong> {props.birth.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default IdCard;
