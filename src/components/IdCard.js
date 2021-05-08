import React from 'react';

export default function IdCard(props) {
  return (
    <div>
      <div className="idCard">
        <strong>First name: </strong> {props.firstName} <br />
        <strong>Last name:</strong> {props.lastName}
        <br />
        <strong>Gender:</strong> {props.gender}
        <br />
        <strong>Height</strong> {props.height / 100}m
        <br />
        <strong>Birthday: </strong> {props.birth.toDateString()}
        <br />
        <img src={props.picture} alt="person" />
      </div>
    </div>
  );
}
