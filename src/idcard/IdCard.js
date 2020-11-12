import React from 'react';
/* import CSS from './IdCard.css'; */

function IdCard(props) {
  return (
    <div className="info">
      <img src={props.picture} alt="Avatar" />

      <p>Last Name:{props.lastName} </p>

      <p>First Name:{props.firstName} </p>

      <p>Gender:{props.gender} </p>

      <p>Height:{props.height} </p>

      <p>Birth: {props.birth.toDateString()} </p>
    </div>
  );
}

export default IdCard;
