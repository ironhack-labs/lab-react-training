import React from 'react';

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
    console.log(props)
  return (
    <div>
        <img src={picture} alt={`${firstName} ${lastName}`} />
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth date: {JSON.stringify(birth)}</p>
    </div>);
}

export default IdCard;
