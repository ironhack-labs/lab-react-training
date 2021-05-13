import React from 'react';

import './IdCard.css';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <article className="id-card">
      <img
        src={picture}
        height="100px"
        alt={`Profile picture for ${firstName} ${lastName}`}
      />
      <section>
        <ul>
          <li>
            <b>First name: </b>
            {firstName}
          </li>
          <li>
            <b>Last name: </b>
            {lastName}
          </li>
          <li>
            <b>Gender: </b>
            {gender}
          </li>
          <li>
            <b>Height: </b>
            {height / 100} m
          </li>
          <li>
            <b>Birth: </b>
            {birth.toDateString()}
          </li>
        </ul>{' '}
      </section>
    </article>
  );
}

export default IdCard;
