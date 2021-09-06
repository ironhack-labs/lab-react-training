import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const show = new Date(birth);
  let temp = height.toString();
  let heightShow = temp.substring(0, 1) + ',' + temp.substring(1, 3);
  return (
    <div className="allId">
      <div className="firsBlock">
        <img src={picture} alt="" />
      </div>
      <div className="secondBlock">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {heightShow}</p>
        <p>Birth: {show.toString().slice(0, 15)}</p>
      </div>
    </div>
  );
};

export default IdCard;
