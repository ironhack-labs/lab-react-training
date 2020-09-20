import React from 'react'
import './IdCard.css'

const IdCard = (props) => {
  return (
<div className="IdCard">
  <img src={props.picture} alt=""/>
  <div>
  <p><b>First Name: </b>{props.firstName}</p>
  <p><b>Last Name: </b>{props.lastName}</p>
  <p><b>Gender: </b>{props.gender}</p>
  <p><b>Height: </b>{props.height}</p>
  <p><b>Birth: </b>{props.birth.toDateString()}</p>
  </div>
  
</div>
    )
}

export default IdCard