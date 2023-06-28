import React from 'react';
import './IdCard.css';


function IdCard({ lastName, firstName, gender, height, birth, imagen }) {
  const birthDate = new Date(birth);

  return (
    <div className="IdCard">
      <div>
        <img src={imagen} alt={imagen}></img>
      </div>
      <div>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birthDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
