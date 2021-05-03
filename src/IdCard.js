import React from 'react';

export default function IdCard(props) {
  <div>
  <img src={props.image} alt="profile pic"/>
    <h1>
      name : {props.firstName}
      {props.lastName}
    </h1>
    <h1>gender: {props.gender}</h1>
    <h1>height : {props.height}</h1>
    <h1>birth : {props.birth}</h1>
  </div>;
}
