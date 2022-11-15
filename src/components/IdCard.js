import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;
  return (
    <div>
       <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>height: {height}</p>
        <p>birth: {birth.toLocaleString().slice(0, 10)}</p>
        <img src={picture} ></img>
    </div>
  )
}

export default IdCard;