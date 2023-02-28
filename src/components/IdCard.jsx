import React from 'react';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <div>
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <h4>First name: {firstName}</h4>
        <h4>Last name: {lastName}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Height: {height}</h4>
        <h4>Birth: {birth.toLocaleString('en-GB', { timeZone: 'UTC' })}</h4>
      </div>
    </div>
  );
}

export default IdCard;
