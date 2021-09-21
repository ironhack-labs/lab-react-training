import React from 'react';

const idCard = ({ imgURL, firstName, lastName, height, birth }) => {
  return (
    <div>
      <img src={imgURL}></img>
      <div>
        First Name: <span>{firstName}</span>
      </div>
      <div>
        Last Name: <span>{lastName}</span>
      </div>
      <div>
        Height: <span>{height}</span>
      </div>
      <div>
        Birthday: <span>{birth}</span>
      </div>
    </div>
  );
};

export default idCard;