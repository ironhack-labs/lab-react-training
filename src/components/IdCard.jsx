import React from 'react';
import '../assets/css/IdCard.css';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <img className="imgCard "src={picture} alt="" />
      <ul className="listCard">
        <il>
          <p className="pCard">First name: {firstName}</p>
        </il>
        <il>
          <p className="pCard">Last name: {lastName}</p>
        </il>
        <il>
          <p className="pCard">Gender: {gender}</p>
        </il>
        <il>
          <p className="pCard">Height: {height}</p>
        </il>
        <il>
          <p className="pCard">Birth: {birth}</p>
        </il>
      </ul>
    </div>
  );
};

export default IdCard;
