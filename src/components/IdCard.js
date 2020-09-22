import React from 'react';

function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} alt={`Profile of ${props.firstName} ${props.lastName}`}/>
      <article>
        <p>Last Name: {props.lastName}</p>
        <p>First Name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toString()}</p>
      </article>
    </div>
  );
}

export default IdCard;