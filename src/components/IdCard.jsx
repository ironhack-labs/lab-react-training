import './IdCard.css';
import React from 'react';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <section className="cardText">
      <img src={picture} alt="image" />
      <div className="info">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong>
          {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong>
          {birth.toDateString()}
        </p>
      </div>
    </section>
  );
};

export default IdCard;
