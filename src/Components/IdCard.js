import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <div className="id-img">
        <img src={picture} alt={firstName + { lastName }} />
      </div>
      <div className="data">
        <p>
          <b>First name:</b>
          {firstName}
        </p>
        <p>
          <b>Last name:</b>
          {lastName}
        </p>
        <p>
          <b>Gender:</b>
          {gender}
        </p>
        <p>
          <b>Height:</b>
          {height}
        </p>
        <p>
          <b>Birth:</b>
          {birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
