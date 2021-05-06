import React from 'react';

function IdCard(props) {
  return (
    <div>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Date of Birth: {props.birth.toDateString()}</p>
      <img src={props.image} alt="image" />
    </div>
  );
}

export default IdCard;
