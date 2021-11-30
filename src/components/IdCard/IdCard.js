import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="idCard">
    <div className="card-photo">
      <img src={picture} alt={firstName + lastName}></img>
    </div> 
    <div className="card-text">
      <p> <strong>First name:</strong> {lastName}</p>
      <p><strong>Last name:</strong> {firstName}</p>
      <p> <strong>Gender: </strong>{gender}</p>
      <p> <strong>Heigth:</strong> {height}</p>
      <p> <strong>Birth:</strong> {birth.toDateString()} </p>
    </div>
    </div>
  );
};

export default IdCard;
