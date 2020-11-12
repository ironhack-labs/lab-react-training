import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div
      className="borderContainer"
      style={{
        border: 'solid 1px',
        margin: '0.8% auto',
        padding: '0.3%',
        display: 'flex',
      }}
    >
      <img src={props.picture} />
      <div style={{ margin: '0 0.5%' }}>
        <b>First name</b>: {props.firstName}
        <br />
        <b>Last name</b>: {props.lastName}
        <br />
        <b>Gender</b>: {props.gender}
        <br />
        <b>Height</b>: {props.height / 100}m
        <br />
        <b>Birth</b>: {props.birth}
        <br />
      </div>
    </div>
  );
}

export default IdCard;
