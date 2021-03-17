import React from 'react';
import '../assets/css/IdCard.css';
import { formatDate } from '../assets/misc/formatDate';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <div className="IdCard-picture">
        <img src={picture} alt={lastName + firstName}></img>
      </div>
      <div className="IdCard-info">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {formatDate(birth)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
