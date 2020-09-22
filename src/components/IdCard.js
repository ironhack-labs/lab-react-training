import React from 'react';

function IdCard(props) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  return (
    <div className="id-card">
      <img src={props.picture} alt={`Profile of ${props.firstName} ${props.lastName}`}/>
      <article>
        <p>Last Name: <b>{props.lastName}</b></p>
        <p>First Name: <b>{props.firstName}</b></p>
        <p>Gender: <b>{props.gender}</b></p>
        <p>Height: <b>{props.height}</b></p>
        <p>Birth: <b>{props.birth.toLocaleDateString('de-DE', options)}</b></p>
      </article>
    </div>
  );
}

export default IdCard;