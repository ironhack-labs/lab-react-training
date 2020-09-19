import React from 'react'

const IdCard = (props) => {
  return (
<div>
  <img src={props.picture} alt=""/>
  <p><b>First Name: </b>{props.firstName}</p>
  <p><b>Last Name: </b>{props.lastName}</p>
  <p><b>Gender: </b>{props.gender}</p>
  <p><b>Height: </b>{props.height}</p>
  <p><b>Birth: </b>{props.birth.toDateString()}</p>
</div>
    )
}

export default IdCard