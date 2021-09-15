import React from 'react';

import './style.css';

const IdCard = ({ firstName, lastName, picture, gender, height, birth }) => {
  let dataFormatada =
    birth.getDate() + '/' + (birth.getMonth() + 1) + '/' + birth.getFullYear();

  return (
    <div className="card">
      <img className="pic" src={picture} alt="pic" />
      <div className="info">
        <strong>First Name: {firstName}</strong>
        <strong>Last Name: {lastName}</strong>
        <strong>Gender: {gender}</strong>
        <strong>Height: {height}</strong>
        <strong>Birth: {dataFormatada}</strong>
      </div>
    </div>
  );
};

export default IdCard;
