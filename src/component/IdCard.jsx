import React from 'react';

const IdCard = ({
    lastName,
    firstName,
    gender,
    height,
    birth,
    children
  }) => {
    return (
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
        {children}
      </div>
    );
  };

export default IdCard;