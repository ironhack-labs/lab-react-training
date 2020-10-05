import React from 'react';

const IdCard = (props) => {
  return (
    <div className="id-card">
      <img src={props.picture} alt="img" />
      <div>
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Gender name: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birthdate: {props.birth}</p>
      </div>
    </div>
  );
};

export default IdCard;
