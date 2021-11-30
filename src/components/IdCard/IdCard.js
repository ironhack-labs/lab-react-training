import React from 'react';
import './IdCard.styles.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="idCard">
      <div className='picture'>
        <img src={picture} alt={firstName + lastName}></img>
      </div>
      <div className='card-container'>
        <p><span>First Name:</span> {firstName}</p>
        <p><span>Last name:</span> {lastName}</p>
        <p><span>Gender:</span> {gender}</p>
        <p><span>Height:</span> {height}</p>
        <p><span>Birth:</span> {birth.toDateString()}</p>
      </div>
   </div>
  );
};

export default IdCard;
