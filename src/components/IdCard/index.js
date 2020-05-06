import React from 'react'

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="" />
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
    </div>
  )
}

export default IdCard
