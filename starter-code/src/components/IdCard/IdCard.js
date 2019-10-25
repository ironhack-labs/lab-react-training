import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className='card-css box'>
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <strong>First Name: </strong>
        {firstName}
        <br />
        <strong>Last Name: </strong>
        {lastName}
        <br />
        <strong>Gender: </strong>
        {gender}
        <br />
        <strong>Height: </strong>
        {height}
        <br />
        <strong>Birth: </strong>
        {birth}
        <br />
      </div>
    </div>
  );
};

export default IdCard;
