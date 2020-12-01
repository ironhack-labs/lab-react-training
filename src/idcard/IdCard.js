import React from 'react';
// Create a IdCard component with 6 props:

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string

const IdCard = ({ picture, lastName, firstName, gender, height, birth }) => {
  return (
    <>
      <img src={picture} alt="profile-picture" />
      <p>
        <strong>Last name: </strong>
        {lastName}
      </p>
      <p>
        <strong>First name: </strong>
        {firstName}
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
    </>
  );
};

export default IdCard;
