import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <div>
        <img src={picture} alt="profile"></img>
      </div>
      <div>
        <h3>First name: {firstName}</h3>
        <h3>Last name: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {height}</h3>
        <h3>Birth: {birth}</h3>
      </div>
    </div>
  )
}

export default IdCard;
