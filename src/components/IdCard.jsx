import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
  return (
    <div>
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth:{birth}</p>
        <img src={picture} alt="" />
    </div>
  )
}

export default IdCard