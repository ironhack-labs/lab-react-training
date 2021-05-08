import React from 'react';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <article>
      <img src={picture} alt={`Profile picture for ${firstName} ${lastName}`} />
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
    </article>
  );
}

export default IdCard;
