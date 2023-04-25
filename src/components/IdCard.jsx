import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div>
      <img src={picture} alt={firstName} />
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
