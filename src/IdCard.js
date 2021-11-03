import React from 'react';
export default function IdCard(props) {
  return (
    <section className="id-card">
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
      <img src={props.picture} alt="Member"/>
    </section>
  );
}

