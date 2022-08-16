import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;
  return (
    <div>
        <img src={picture} alt={firstName} />
        <h1>Name: {firstName}</h1>
        <h1>Last Name: {lastName}</h1>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
    </div>
  )
}

export default IdCard