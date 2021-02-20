import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const i1 = {
    display: 'flex',
    justifyContent: 'space-start',
    margin: 15,
    padding: 5,
    borderStyle: 'solid',
  };
  const i1info = {
    display: 'flex',
    flexDirection: 'column',
  };
  return (
    <div style={i1}>
      <img src={picture} alt={firstName} width="200" />
      <div style={i1info}>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
      </div>
    </div>
  );
};

export default IdCard;
