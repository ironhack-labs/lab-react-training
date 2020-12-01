import { findByPlaceholderText } from '@testing-library/react';
import React from 'react';
// Create a IdCard component with 6 props:

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string

const IdCard = (props) => {
  console.log(props);
  return (
    <>
      <img src={props.picture} alt="profile-picture" />
      <p>
        <strong>Last name: </strong>
        {props.lastName}
      </p>
      <p>
        <strong>First name: </strong>
        {props.firstName}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {props.height}
      </p>
      <p>
        <strong>Birth: </strong>
        {props.birth.toDateString()}
      </p>
    </>
  );
};

export default IdCard;
