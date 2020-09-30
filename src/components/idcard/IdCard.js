import React from 'react';
import './idCard.css';

function IdCard(props) {
  return (
    <div className="cards the-border">
      <div className="card-img">
        <img src={props.picture} alt="Person portrait" />
      </div>
      <div className="card-info">
        <p>
          <strong>First name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
