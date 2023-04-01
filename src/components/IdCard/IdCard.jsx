/*JSX DE LA INTERACCIÓN 1*/

import React from 'react';
import './IdCard.css';
import '../../App.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
       </div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}cm</p>
        <p><strong>Birth:</strong> {birth.toLocaleDateString()}</p>
      </div>
  );
};

export default IdCard;