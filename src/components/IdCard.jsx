import React from 'react'

function IdCard(props) {
    const {firstName, lastName, gender, height, birth, picture} = props
  return (
    <div>
        <img src={picture}/>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>
        <hr></hr>
        


    </div>
  )
}

export default IdCard