import React from 'react';
import './IdCard.css';

function IdCard(props) {
  console.log(props.birth);
  return (
    <div className="idCard">
      <img className="picture" src={props.picture} />
      <div className="profile">
        <h5>First Name: {props.firstName}</h5>
        <h5>Last Name: {props.lastName}</h5>
        <h5>Gender: {props.gender}</h5>
        <h5>Height: {props.height}</h5>
        <h5>Birth: {props.birth}</h5>
      </div>
    </div>
  );
}

export default IdCard;
