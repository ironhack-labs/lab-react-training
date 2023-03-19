import React from 'react'

function IdCard({ card }) {
  return (
    <div className='card d-flex flex-row container m-3 align-items-center col-5'>
      <div className='m-2'><img src={card.picture} alt={card.firstName} /></div>
      <div className='d-flex justify-content-center'>
        <ul className='d-flex flex-column align-items-start'>
          <li><strong>First name:</strong> {card.firstName}</li>
          <li><strong>Last name:</strong> {card.lastName} </li>
          <li><strong>Gender:</strong> {card.gender}</li>
          <li><strong>Height:</strong> {card.height}</li>
          <li><strong>Birth:</strong> {card.birth}</li>
        </ul>
      </div>
    </div>
  )
}

export default IdCard