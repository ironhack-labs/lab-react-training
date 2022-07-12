import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <article className="idCard">
      <div className="IdPic">
        <img src={picture} alt="picture" />
      </div>
      <footer>
        <h3>First name: {firstName}</h3>
        <h3>First name: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {height / 100}</h3>
        <h3>Birth: {birth.toDateString()}</h3>
      </footer>
    </article>
  );
};



export default IdCard;
