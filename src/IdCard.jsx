import React from 'react';
import './IdCard.css';

function IdCard(props) {
  const { picture, firstName, lastName, gender, height, birth } = props;
  return (
    <div className="IdCard">
      <img src={picture} alt="Not found" className="IdCard-photo" />
      <div className="IdCard-info">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
