import React from 'react';

import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="id-card">
      <div className="pic-container">
        <picture>
          <img src={props.picture} alt="pic" />
        </picture>
      </div>
      <div className="info-container">
        <p>
          <b>First name: </b>
          {props.lastName}
        </p>
        <p>
          <b>last name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.height}
        </p>
        <p>
          <b>Birth: </b>
          {props.birth.toString().slice(0, 15)}
          
          
        </p>
      </div>
    </div>
  );
};

export default IdCard;

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string
