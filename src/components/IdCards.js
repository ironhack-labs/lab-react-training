import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="">
      <img src={picture} alt="personal photo" />
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth: {birth}</li>
      </ul>
    </div>
  );
}

export default IdCard;
