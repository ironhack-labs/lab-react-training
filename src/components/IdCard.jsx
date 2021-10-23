import React from 'react';

function IdCard(props) {
  return (
    <div>
      <p>Last Name: {props.lastName}</p>
      <p> First Name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p> Height: {props.height}</p>
      <p>Date of Birth:{props.birth.toDateString()}</p>
      <img src={props.picture} alt="" />
    </div>
  );
}

export default IdCard;
