import React from 'react'
import "./IdCard.css"

const IdCard = (props) => {
    return (
        <div className="card">
        <img src={props.picture} />
        <p>First Name:  {props.firstName}</p>
  <p>Last Name: {props.lastName}</p>
  <p>Gender: {props.gender}</p>
  <p>Height: {props.height}</p>
  <p>Birth: {props.birth.toString()}</p>
  
        </div>
    )
}

export default IdCard
