import React from 'react'

export default function IdCard(props) {
  return (
    <div style={{display:'flex', border:'1px solid', alignItems: 'center'}}>
      <div>
        <img src={props.image}/>
      </div>
      <div>
        <p><strong>First name:</strong> {props.name}</p>
        <p><strong>Last name: </strong> {props.lastName}</p>
        <p><strong>Gender: </strong> {props.gender}</p>
        <p><strong>Height: </strong>{props.height}</p>
        <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
      </div>
    </div>
  )
}
