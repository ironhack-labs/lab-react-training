import React from 'react';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;

  return (
    <div>
      <img src={picture} alt="..." />
      <p> FirstName: {firstName}</p>
      <p> LastName: {lastName}</p>
      <p> Gender: {gender}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default IdCard;
