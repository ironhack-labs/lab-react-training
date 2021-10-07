import React from 'react';

function IdCard({ lastName, firstName, birth, gender, height, picture }) {
  return (
    <div>
      <h1>First name:{firstName} </h1>
      <h1>Last name:{lastName}</h1>
      <h1> Gender:{gender}</h1>
      <h1>Height:{height}</h1>
      <h1>Birth:{birth.toString()}</h1> {/* Ya que llega como objeto*/}
        <img src={picture} alt={firstName} />
    </div>
  );
}

export default IdCard;
