import React from 'react';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  const formatDate = new Date(birth).toDateString();
  return (
    <div className="border">
      <div className="id-org">
        <img src={picture} alt={lastName} />
        <div className="id-info">
          <h4>First Name: {firstName}</h4>
          <h4>Last Name: {lastName}</h4>
          <h4>Gender: {gender}</h4>
          <h4>Height: {height}</h4>
          <h4>Birth: {formatDate}</h4>
        </div>
      </div>
    </div>
  );
};

export default IdCard;




