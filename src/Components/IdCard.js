import React from "react"; 
import './IdCard.css';
const IdCard = ({ picture, firstName, lastName, gender, height, birth }) => {
 
  return (
    <div className='card'>
      <img src={picture} alt={firstName} />
      <p>
        <span><strong>First name:</strong> {firstName}</span>
        <span><strong>Last name:</strong> {lastName}</span>
        <span><strong>Gender:</strong> {gender}</span>
        <span><strong>Height:</strong> {height}</span>
        <span><strong>Birth:</strong> {birth.toDateString()}</span>
      </p>
    </div>
  );
};

export default IdCard;