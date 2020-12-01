import React from 'react';
import './IdCard.css';

export default function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} />
      <div>
        <p>First Name: {props.firstname}</p>
        <p>Last Name: {props.lastname}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  );
}
