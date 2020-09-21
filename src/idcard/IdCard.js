import React, { Component } from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props;

  const birthDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(birth);
  const mHeight = height / 100;

  return (
    <div className="id-card">
      <img className="profile-pic" src={picture} alt={firstName}/>
      <div className="text-info">
        <p><strong>First name: </strong>
        {firstName}</p>
        <p><strong>Last name: </strong>
        {lastName}</p>
        <p><strong>Gender: </strong>
        {gender}</p>
        <p><strong>Height: </strong>
        {mHeight}m</p>
        <p><strong>Birth: </strong>
        {birthDate}</p>
      </div>
    </div>
  );
}

export default IdCard;
