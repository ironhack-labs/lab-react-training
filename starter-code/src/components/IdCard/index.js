import React from 'react';
import './style.css';

const IdCard = props => {
  return (
    <div className="id-card">
      <img className="img-idCard" src={props.picture} alt={props.firstName} />
      <div className="id-card-content">
        <p>
          <strong>First Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Heigth: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
