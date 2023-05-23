import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <img
        className="id-card-img"
        src={picture}
        alt={`${firstName} ${lastName}`}
      />
      <div className="id-card-info">
        <div>
          <strong>First name: </strong>
          {firstName}
        </div>
        <div>
          <strong>Last name: </strong>
          {lastName}
        </div>
        <div>
          <strong>Gender: </strong>
          {gender}
        </div>
        <div>
          <strong>Height: </strong>
          {height} cm
        </div>
        <div>
          <strong>Birth: </strong>
          {birth.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default IdCard;
