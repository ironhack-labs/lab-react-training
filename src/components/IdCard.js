import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div className="card">
      <img src={props.picture} height="250" width="250" alt="" />
      <span>
        <p>
          <span>
            <strong>First name: </strong>
          </span>
          {props.lastName}
        </p>
        <p>
          <span>
            <strong>Last name: </strong>
          </span>
          {props.firstName}
        </p>
        <p>
          <span>
            <strong>Gender: </strong>
          </span>
          {props.gender}
        </p>
        <p>
          <span>
            <strong>Height: </strong>
          </span>
          {props.height}
        </p>
        <p>
          <span>
            <strong>Birth: </strong>
          </span>
          {props.birth.toDateString(props.birth)}
        </p>
      </span>
    </div>
  );
}

export default IdCard;
