import React from 'react';

function IdCard(props) {
  return (
    <div>
      <div>Last Name: {props.lastName}</div>
      <div>First Name: {props.firstName}</div>
      <div>Gender: {props.gender}</div>
      <div>Height: {props.height}m</div>
      <div>Birthday: {props.birth}</div>
      <div>{props.picture}</div>
    </div>
  );
}

export default IdCard;
