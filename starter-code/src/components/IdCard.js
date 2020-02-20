import React from 'react'

const IdCard = (props) => {
  return (
    <div className="id">
      <div>
        <img src={props.picture} alt="id portrait"/>
      </div>
      <div>
        <p><strong>First Name:</strong>{props.firstName}</p>
        <p><strong>Last Name:</strong>{props.lastName}</p>
        <p><strong>Gender:</strong>{props.lastName}</p>
        <p><strong>Height:</strong>{props.height}m</p>
        <p><strong>Birth:</strong>{props.birth.toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard