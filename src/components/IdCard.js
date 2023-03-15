import React from 'react'

function IdCard( { lastName, firstName, gender, height, birth, picture} ) {
  return (
    <div className='d-flex m-2 border p-2'>
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div className='d-flex flex-column align-items-start'>
        <p className='m-0'>
          <span><b>First Name:</b></span> {firstName}
        </p>
        <p className='m-0'>
          <span><b>Last Name:</b></span> {lastName}
        </p>
        <p className='m-0'>
          <span><b>Gender:</b></span> {gender}
        </p>
        <p className='m-0'>
          <span><b>Height:</b></span> {height}
        </p>
        <p className='m-0'>
          <span><b>Birth:</b></span> {birth.toDateString()}
        </p>
      </div>
    </div>
  )
}

export default IdCard