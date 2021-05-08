import React from 'react';
import '../App.css';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="id-card">
      <div>
        <img src={picture}></img>
      </div>
      <div>
        <p>
          <b>First name: </b>
          {firstName}
        </p>
        <p>
          <b>Last name: </b>
          {lastName}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Height: </b>
          {height / 100}m
        </p>
        <p>
          <b>Birth: </b>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
