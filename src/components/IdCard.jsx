import React from 'react';

const IdCard = (props) => {
  return (
    <div className="idCard">
      <p>Last Name: {props.lastName}</p>
      <p>First Name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height / 100}m</p>
      <p>Birth: {props.birth.toDateString()}</p>
      <img src={props.picture} alt="oops" />
    </div>
  );
};

export default IdCard;
