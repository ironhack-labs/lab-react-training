import React from 'react';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <div>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth}</p>
      <img src={picture} alt="pictureid" />
    </div>
  );
}

export default IdCard;
