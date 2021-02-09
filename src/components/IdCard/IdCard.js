import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}){
  return (
    <div className='container-row fit-content'>
      <div>
        <img className='margin' src={picture}></img>
      </div>
      <div className='text-person'>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong>{gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Birth:</strong> {birth}</p>
      </div>
    </div>
  );
}

export default IdCard