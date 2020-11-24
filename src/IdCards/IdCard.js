import React from 'react';
import './IdCard.css';

const IdCard = (prop) => {
  return (
    <div className='idCard'>
      <img className='picture' src={prop.picture}></img>
      <div className='info'>
        <h5>First Name: {prop.firstName}</h5>
        <h5>Last Name: {prop.lastName}</h5>
        <h5>Gender: {prop.gender}</h5>
        <h5>Height: {prop.height / 100}m</h5>
        <h5>Birth: {prop.birth}</h5>
      </div>
    </div>
  );
};

export default IdCard;