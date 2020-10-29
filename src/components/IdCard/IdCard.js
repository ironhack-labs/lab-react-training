import React from 'react';

import './IdCard.css';

const genderEnum = {
  male: "male",
  female: "female",
};

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

  const birthCard = date => date.toUTCString().split(' ', 4).join(' ');

  const genderCard = gender => genderEnum[gender] ? gender : 'unknown';

  const heightCard = height => height / 100;

  return (
    <div className="card-container">
      <img src={picture} alt={`${firstName} ${lastName}`} />

      <div>
        <p><strong>First name: </strong>{firstName}</p>
        <p><strong>Last name: </strong>{lastName}</p>
        <p><strong>Gender: </strong>{genderCard(gender)}</p>
        <p><strong>Height: </strong>{heightCard(height)}m</p>
        <p><strong>Birth: </strong>{birthCard(birth)}</p>
      </div>
    </div>
  );
};

export default IdCard;
