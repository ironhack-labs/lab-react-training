import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
  return (
    <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>
        <img className='profilePic' src={picture} alt="Profile Pic" />
    </div>
  )
}

export default IdCard