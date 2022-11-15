import React from 'react'

function IdCard(props) {
    const {firstName, lastName, gender, height, birth, picture}= props
  return (
    <div>
    <div> <img src={picture} alt="" /></div>
    <p>FirstName:{firstName}</p>
    <p>LastName:{lastName}</p>
    <p>Gender:{gender}</p>
    <p>Height:{height}</p>
    <p>Birth:{birth.toISOString().slice(0,10) }</p>
   
    </div>
  )
}

export default IdCard


