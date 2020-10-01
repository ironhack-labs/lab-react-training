import React from 'react';
import '../assets/styles/style.css'


function IdCard(props) {
  return (
    <div className='id-card'>
      <img alt='A person' src={props.picture} />
      <ul>
        <li><strong>First name: </strong> {props.firstName}</li>
        <li><strong>Last name: </strong> {props.lastName}</li>
        <li><strong>Gender: </strong> {props.gender}</li>
        <li><strong>Height: </strong> {props.height}</li>
        <li><strong>Birth: </strong> {props.birth.toLocaleDateString()}</li>
      </ul>
    </div>
  )
}

export default IdCard;