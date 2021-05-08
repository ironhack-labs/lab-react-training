import React from 'react';

function IdCard(props) {
  return (
    <div className="IdCard">
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height / 100}m</p>
      <p>Date of Birth: {props.birth.toDateString()}</p>
      <img src={props.image} alt="profile-img" />
    </div>
  );
}

export default IdCard;
