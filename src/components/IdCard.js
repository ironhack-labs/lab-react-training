import React from 'react'
import '../assets/css/IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <div className="IdCard-picture">
        <img src={picture} alt={lastName + firstName}></img>
      </div>
      <div className="IdCard-info">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
      </div>
    </div>
  )
}

export default IdCard