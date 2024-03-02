import React from 'react'
import './App.css';
function IdCard({ name }) {
  return (
    <div className='container'>
      <img className='photo' src={name.picture} alt='pictire of a frog' />
      <div className='id' >
        <p><strong>Last name:</strong> {name.lastName}</p>
        <p><strong>First name:</strong> {name.firstName}</p>
        <p><strong>gender: </strong> {name.gender}</p>
        <p><strong>height:</strong> {name.height}</p>
        <p><strong>birth :</strong> {name.birth.toUTCString()}</p>
      </div>
    </div>
  )

}
export default IdCard