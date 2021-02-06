import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <article className="idCard">
      <img src={picture} alt="profile" />
      <div>
        <p>
          <span>First Name:</span> {firstName}{' '}
        </p>
        <p>
          <span>Last Name:</span> {lastName}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span>Height:</span> {height}
        </p>
        <p>
          <span>Birth:</span> {birth}
        </p>
      </div>
    </article>
  );
};

export default IdCard;
