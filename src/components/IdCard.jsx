import React from 'react'


function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
  return (
    <div>
        <p>First Name: {firstName} </p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toLocaleString().slice(0,10)}</p>
        <img src={picture} alt="picture"/>
    </div>
  )
}

export default IdCard