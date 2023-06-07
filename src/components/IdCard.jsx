import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return (
    <div className="idCard">
      <img alt={firstName} src={picture} />
      <div>
        <p><b>First name:</b> {firstName}</p>
        <p><b>Last name: </b>{lastName}</p>
        <p><b>Gender: </b>{gender}</p>
        <p><b>Height:</b> {height}m</p>
        <p><b>Birth:</b> {birth.toLocaleDateString('en-US', options)}</p>
      </div>
    </div>
  );
}

export default IdCard;
