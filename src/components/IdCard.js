import React from 'react';

function IdCard({ firstName, birth, gender, height, lastName, picture }) {
  return (
    <div>
      <div>
        <img src={picture} alt="" />
      </div>
      <h1> First name:{firstName} </h1>
      <h1> Last name:{lastName} </h1>
      <h1> Gender:{gender} </h1>
      <h1> Height:{height} </h1>
      <h1> Birth:{birth.toString()} </h1>
    </div>
  );
}

export default IdCard;
