import React from 'react'

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props
    return (
    <div>
        <h3> {firstName}</h3>
        <h3> {lastName}</h3>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toLocaleString().slice(0,9)}</p>
        <img src={picture} alt="profile"/>

    </div>
  )
}

export default IdCard
