import React from 'react';
import '../App.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card">
      {' '}
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <p>First Name: {firstName}</p>
      <p> Last Name: {lastName}</p>
      <p> Gender: {gender}</p>
      <p> Height: {height}</p>
      <p>Birth: {birth.toISOString().slice(0, 10)}</p>
    </div>
  );
}

export default IdCard;
