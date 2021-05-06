import React from 'react';

export default function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <img src={picture} />
      <ul>
        <li>{lastName}</li>
        <li>{firstName}</li>
        <li>{gender}</li>
        <li>{height / 10} m</li>
        <li>{birth.toDateString()}</li>
        <li>{lastName}</li>
      </ul>
    </div>
  );
}
