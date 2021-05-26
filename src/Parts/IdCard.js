import React from 'react'

export default function IdCard(props) {


  return (
    <div class='border border-dark m-4 d-flex'>

      <img src={props.picture} alt="oops" />

      <div>
        <p>Last Name: {props.lastName}</p>
        <p>First Name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height / 100}m</p>
        <p>Birth: {props.birth}</p>
      </div>

  </div>
);
};

