import React from 'react'

function IdCard({lastName, firstName, gender, height, birthDate, img}) {


  return (
    <div className='idCard-container'>
       <img src={img} alt='profile pic'/>
        <div className='idCard-text'>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height/100}m</p>
            <p><strong>Birth:</strong> {birthDate}</p>
        </div>

    </div>
  )
}

export default IdCard