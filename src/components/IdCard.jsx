import React from 'react';

const IdCard = (props) => {
  return (
    <div className="IdCard box">
      <img src={props.picture} alt={props.firstName} />
      <div className="right">
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>
          Height: {props.height.toString().charAt(0)}.
          {props.height.toString().slice(1, 3)}m
        </p>
        <p>Birth: {props.birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
