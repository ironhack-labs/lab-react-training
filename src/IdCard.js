import React from 'react'

export default function IdCard(props) {
  return (
    <div className="profile">
      <img src={props.picture} />
      <div className="details">
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  )
}