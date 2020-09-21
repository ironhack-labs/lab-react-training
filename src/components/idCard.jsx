import React from 'react'
import './IdCard.css'

const IdCard = (props) => {
  return (
      <div className="IdCard">
        <img src={props.picture} alt={props.firstName}/>
        <div className="right">
          <div><b>First Name: </b>{props.firstName}</div>
          <div><b>Last Name: </b>{props.lastName}</div>
          <div><b>Gender: </b>{props.gender}</div>
          <div><b>Height: </b>{props.height}</div>
          <div><b>Birth: </b>{props.birth.toDateString()}</div>
        </div>
      </div>
    )
}

export default IdCard