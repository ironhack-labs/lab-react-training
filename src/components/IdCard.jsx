import React from 'react';
import '../styles/IdCard.css';
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="container-flex-idCard">
      <img src={picture} alt="" className="idCard-image" />
      <div className="container-text">
        <p>
          <span>First Name:</span>
          {firstName}
        </p>
        <p>
          <span>Last Name:</span>
          {lastName}
        </p>
        <p>
          <span>Gender:</span>
          {gender}
        </p>
        <p>
          <span>Height:</span>
          {height}
        </p>
        <p>
          <span>Birth:</span>
          {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
