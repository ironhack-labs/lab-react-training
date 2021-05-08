import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { firstName, lastName, height, birth, picture } = props;
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let birthdate = birth.toLocaleDateString('en-US', options).replace(',', ' ');

  return (
    <div className="idcontainer">
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{height}</p>
        <p>{birthdate}</p>
      </div>
    </div>
  );
};

export default IdCard;
