import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div class="idCard">
      <img src={props.picture} alt="Id picture" />

      <ul>
        <li>
          <b>First name:</b> {props.firstName}
        </li>
        <li>
          <b>Last name:</b> {props.lastName}
        </li>
        <li>
          <b>Gender:</b> {props.gender}
        </li>
        <li>
          <b>Height:</b> {props.height}cm
        </li>
        <li>
          <b>Birth:</b> {props.birth.toDateString()}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
