import React from 'react'

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, img } = props;

  return (
    <div>
    <img src={img} alt="" />
    <p><b>Last Name:</b> {lastName}</p>
    <p><b>First Name:</b> {firstName}</p>
    <p><b>Gender:</b> {gender}</p>
    <p><b>Height:</b> {height}</p>
    <p><b>Birth:</b> {birth}</p>
    </div>
  )
}

export default IdCard