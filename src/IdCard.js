import React from 'react'

export default function IdCard(props) {
  return (
    <>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
      <img src={props.picture} />
    </>
  )
}