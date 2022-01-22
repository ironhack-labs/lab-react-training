import React from 'react'
import './id.css'

const IDcard = ({lastName, firstName, gender, height, birth, picture }) => {
    const birthDate = new Date(birth)
    return(
      <div>
      <div className="card">
      <img src={picture} alt="id"/>
      <h4>First Name: {firstName}</h4>
      <h4>Last Name: {lastName}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Height: {height}</h4>
      <h4>Birthday: {birthDate.toDateString()}</h4>
      </div>
      </div>
    )
  }
export default IDcard