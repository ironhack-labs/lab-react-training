import React from 'react';
import './BoxColor.css';

function IdCard(props) {
  return (
    <div className="picCard">
      <img src={props.picture} />
      <div className="infoCard">
        <p>
          <b>Last Name:</b> {props.lastName}
        </p>
        <p>
          <b>First Name:</b> {props.firstName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
        <p>
          <b>Birth:</b> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default BoxColor;
