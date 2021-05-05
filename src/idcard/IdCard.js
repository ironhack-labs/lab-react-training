import React from 'react';

const IdCard = (props) => {

  return (
    <section className="id-card-container">
      <article className="id-card">
        <img src={props.picture} height="180" alt={props.firstName}/>
        <div>
          <h3>First name: {props.firstName}</h3>
          <h3>Last name: {props.lastName}</h3>
          <h3>Gender: {props.gender}</h3>
          <h3>Height: {props.height}</h3>
          <h3>Birth: {props.birth}</h3>
        </div>
      </article>
    </section>
  )
}

export default IdCard;