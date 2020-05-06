import React from 'react'

const IdCard = (props) => (
  <div className="IdCard">
    <div>
      <img src={props.picture} alt="" />
    </div>
    <div>
      <p>
        <strong>Last Name: </strong>
        {props.lastName}
      </p>

      <p>
        <strong>First Name: </strong>
        {props.firstName}
      </p>

      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>

      <p>
        <strong>Height: </strong>
        {props.height}
      </p>

      <p>
        <strong>Birth: </strong>
        {props.birth.toDateString()}
      </p>
    </div>
  </div>
)

export default IdCard
