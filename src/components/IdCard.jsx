import React from 'react'

function IdCard(props) {

    const {lastName, firstName, gender, heigth, birth, picture} = props

  return (
    <div class="idCard">

        <div>
        <img src={picture} alt="card pic" />
        </div>

        <div>
        <p>First name: <span>{firstName}</span></p>
        <p>Last name: <span>{lastName}</span></p>
        <p>Gender: <span>{gender}</span></p>
        <p>Height: <span>{heigth}</span></p>
        <p>birth: <span>{birth.toLocaleString()}</span></p>
        </div>
    </div>
  )
}

export default IdCard