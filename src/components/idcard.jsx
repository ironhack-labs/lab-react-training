import React from 'react';
import './idcard.css';

const IdCard = (props) => {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const gender = props.gender;
  const height = props.height;
  const birth = props.birth;
  return (
    <div class="idcardStyle">
      <div className="photo">
        <img src={props.picture} alt="IdCard Photography" />
      </div>
      <div class="cardInformation">
        <p>
          <strong>First Name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
