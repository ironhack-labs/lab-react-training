import React from 'react';

const IdCard = ({
  cardId: { lastName, firstName, gender, height, birth, picture },
}) => {
  return (
    <>
      <div className="idCard">
        <img src={picture} alt="id-pic" />{' '}
        <div>
          <p>
            <strong>First name:</strong> {firstName}
          </p>
          <p>
            <strong>Last name:</strong> {lastName}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Height:</strong> {height / 100}m
          </p>
          <p>
            <strong>Birth:</strong> {birth.toDateString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default IdCard;
