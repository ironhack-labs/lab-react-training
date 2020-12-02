import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div>
      <img src={picture} alt="a person's face" />
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toDateString()}</p>
    </div>
  );
};

export default IdCard;
