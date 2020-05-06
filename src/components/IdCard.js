import React from 'react';
import './IdCard.css'

const IdCard = (props) => (
  <div className="IdCard">
    <img src={props.picture} alt="pic" />
    <div>
      <p><strong>First Name: </strong> {props.firstName}</p>
      <p><strong>last Name: </strong> {props.lastName}</p>
      <p><strong>Gender: </strong> {props.gender}</p>
      <p><strong>Height: </strong> {props.height}</p>
      <p><strong>Birth: </strong> {props.birth}</p>
    </div>
  </div>
);

export default IdCard;