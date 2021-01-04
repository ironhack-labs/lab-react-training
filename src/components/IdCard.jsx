import React from 'react';

function IdCard(props) {
  return (
    <div>
      <img src={props.picture} />
      <div>
        <div>Firstname: {props.firstName}</div>
        <div>Lastname: {props.lastName}</div>
        <div>Gender: {props.gender}</div>
        <div>Height: {props.height}</div>
        <div>Birth: {props.birth.toString().slice(0, 15)}</div>
      </div>
    </div>
  );
}

export default IdCard;
