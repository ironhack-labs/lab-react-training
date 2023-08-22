import React from 'react'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
  return (
    <div className='id-card'>
        <img src={picture} />
        <p><strong>FirstName:</strong> {firstName}</p>
        <p><strong>LastName:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
        
    </div>
  )
}

export default IdCard