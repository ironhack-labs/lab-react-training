import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div className="borderContainer">
      <img src={props.picture} />
      <div style={{ margin: '0 0.5%' }}>
        <strong>First name</strong>: {props.firstName}
        <br />
        <strong>Last name</strong>: {props.lastName}
        <br />
        <strong>Gender</strong>: {props.gender}
        <br />
        <strong>Height</strong>: {props.height / 100}m
        <br />
        <strong>Birth</strong>: {props.birth.toDateString()}
        <br />
      </div>
    </div>
  );
}

export default IdCard;
