import React from 'react';

function IdCard(props) {
  const { picture, firstName, lastName, gender, height, birth } = props;

  return (
    <div>
      <img src={picture} alt="profilepicture" />
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth}</p>
    </div>
  );
}

export default IdCard;
