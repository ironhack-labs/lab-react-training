import React from 'react';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;

  return (
    <div className="card">

      <img src={picture} alt="profilePicture" />
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toLocaleString()}</p>
      
    </div>
  );
}

export default IdCard;
