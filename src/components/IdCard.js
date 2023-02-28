import React from 'react';

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <h3>First Name: {capitalize(firstName)}</h3>
      <h3>Last Name: {capitalize(lastName)}</h3>
      <h3>Gender: {capitalize(gender)}</h3>
      <h3>Height: {height}</h3>
      <h3>Birth: {birth.toLocaleString()}</h3>
      <img src={`${picture}`} alt="" />
    </div>
  );
}

export default IdCard;
