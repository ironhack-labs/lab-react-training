import React from "react"

function IdCard(props) {
    const {firstName, lastName, gender, height, birth, picture} = props
    
  return (
    <div>
    
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{birth.toLocaleDateString()}</p>
        <img src={picture} alt="person face" />

    </div>
  )
}

export default IdCard