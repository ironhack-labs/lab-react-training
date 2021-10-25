import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div>
      <img src={props.picture} alt="" />
      <p>
        <b>First Name: </b>
        {props.firstName}
      </p>
      <p>
        <b>Last Name: </b>
        {props.lastName}
      </p>
      <p>
        <b>Gender: </b>
        {props.gender}
      </p>
      <p>
        <b>Height: </b>
        {props.height / 100}m
      </p>
      <p>
        <b>Birth: </b>
        {props.birth.toDateString()}
      </p>
    </div>
  );
}

export default IdCard;
